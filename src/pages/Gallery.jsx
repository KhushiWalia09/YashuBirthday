import { useState, useMemo } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { products } from '../data/products';

export default function Gallery({ searchQuery, addToCart }) {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Filter products by search term and selected sidebar category
  const filteredProducts = useMemo(() => {
    return products.filter((p) => {
      const matchesSearch =
        p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.desc.toLowerCase().includes(searchQuery.toLowerCase());

      if (selectedCategory === 'All') return matchesSearch;
      if (selectedCategory === 'Rooftop') return matchesSearch && p.title.toLowerCase().includes('rooftop');
      if (selectedCategory === 'Saree') return matchesSearch && p.title.toLowerCase().includes('saree');
      if (selectedCategory === 'Balcony') return matchesSearch && p.title.toLowerCase().includes('balcony');
      if (selectedCategory === 'Evening') return matchesSearch && p.title.toLowerCase().includes('evening') || p.title.includes('3:02 PM');
      
      return matchesSearch;
    });
  }, [searchQuery, selectedCategory]);

  return (
    <div className="gallery-container">
      {/* Left Filters Sidebar */}
      <aside className="gallery-sidebar">
        {/* Category Filter */}
        <div className="filter-section">
          <h3>Department</h3>
          <ul>
            <li className={selectedCategory === 'All' ? 'active' : ''}>
              <a onClick={() => setSelectedCategory('All')}>All Birthday Moments</a>
            </li>
            <li className={selectedCategory === 'Rooftop' ? 'active' : ''}>
              <a onClick={() => setSelectedCategory('Rooftop')}>Rooftop Portraits</a>
            </li>
            <li className={selectedCategory === 'Saree' ? 'active' : ''}>
              <a onClick={() => setSelectedCategory('Saree')}>Traditional Saree Glow</a>
            </li>
            <li className={selectedCategory === 'Balcony' ? 'active' : ''}>
              <a onClick={() => setSelectedCategory('Balcony')}>Balcony Daydreams</a>
            </li>
            <li className={selectedCategory === 'Evening' ? 'active' : ''}>
              <a onClick={() => setSelectedCategory('Evening')}>Evening & Candid Lights</a>
            </li>
          </ul>
        </div>

        {/* Avg. Customer Review Filter */}
        <div className="filter-section">
          <h3>Customer Review</h3>
          <ul>
            <li>
              <a className="stars-link" onClick={() => setSelectedCategory('All')}>
                <span className="rating-stars">⭐⭐⭐⭐⭐</span> <span>& Up</span>
              </a>
            </li>
            <li>
              <a className="stars-link" onClick={() => setSelectedCategory('All')}>
                <span className="rating-stars">⭐⭐⭐⭐☆</span> <span>& Up</span>
              </a>
            </li>
            <li>
              <a className="stars-link" onClick={() => setSelectedCategory('All')}>
                <span className="rating-stars">⭐⭐⭐☆☆</span> <span>& Up</span>
              </a>
            </li>
          </ul>
        </div>

        {/* Price Filter */}
        <div className="filter-section">
          <h3>Price</h3>
          <ul>
            <li><a onClick={() => setSelectedCategory('All')}>Under ₹100</a></li>
            <li><a onClick={() => setSelectedCategory('All')}>₹100 - ₹500</a></li>
            <li className="active"><strong><a onClick={() => setSelectedCategory('All')}>Free / Unlimited</a></strong></li>
          </ul>
        </div>

        {/* Seller Info */}
        <div className="filter-section">
          <h3>Seller</h3>
          <ul>
            <li style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <input type="checkbox" defaultChecked disabled />
              <span>Yashu Birthday Co.</span>
            </li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#777', fontSize: '11px', paddingLeft: '20px' }}>
              (100% Positive Ratings)
            </li>
          </ul>
        </div>
      </aside>

      {/* Right Listing Grid */}
      <main className="gallery-main">
        {/* Results Header */}
        <div className="results-header">
          <div>
            Showing {filteredProducts.length} results
            {searchQuery && (
              <> for "<strong>{searchQuery}</strong>"</>
            )}
            {selectedCategory !== 'All' && (
              <> in <strong>{selectedCategory} Portraits</strong></>
            )}
          </div>
          <div>
            Sort by: <strong>Featured ▼</strong>
          </div>
        </div>

        {/* Dynamic Listing Grid */}
        {filteredProducts.length > 0 ? (
          <div className="results-grid">
            {filteredProducts.map((p) => (
              <div key={p.id} className="product-card-amz">
                {/* Product Thumbnail Image */}
                <div
                  className="product-card-thumb"
                  style={{ cursor: 'pointer' }}
                  onClick={() => navigate(`/product/${p.id}`)}
                >
                  <img src={p.image} alt={p.title} />
                </div>

                {/* Product Body Information */}
                <div className="product-card-body">
                  <div className="product-card-brand">
                    Brand: Yashu's Birthday Co.
                  </div>
                  <Link to={`/product/${p.id}`} className="product-card-name">
                    {p.title}
                  </Link>

                  {/* Stars Rating */}
                  <div className="rating-row">
                    <span className="rating-stars">⭐⭐⭐⭐⭐</span>
                    <span className="rating-count">
                      {120 + p.id * 15} ratings
                    </span>
                  </div>

                  {/* Prime Badge */}
                  <div>
                    <span className="prime-badge" aria-label="Amazon Prime" />
                  </div>

                  {/* Price Block */}
                  <div className="price-row-amz" style={{ fontSize: '18px', color: 'var(--amz-price)', fontWeight: 700 }}>
                    Unlimited <span style={{ fontSize: '12px', color: 'var(--amz-gray)', fontWeight: 'normal', marginLeft: '6px' }}>(Priceless)</span>
                  </div>

                  {/* Faux Shipping Tags */}
                  <div className="delivery-tag">
                    Get it by <strong>Tomorrow, June 1</strong><br />
                    FREE Delivery by Amazon
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="card-actions-amz">
                  <button
                    onClick={() => addToCart(p)}
                    className="button button-primary"
                    style={{ borderRadius: '8px', fontSize: '12px' }}
                  >
                    Add to Cart
                  </button>
                  <button
                    onClick={() => navigate(`/product/${p.id}`)}
                    className="button button-ghost"
                    style={{ borderRadius: '8px', fontSize: '12px', padding: '6px' }}
                  >
                    Product Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div style={{ backgroundColor: '#fff', padding: '40px', textAlign: 'center', border: '1px solid #ddd' }}>
            <h3 style={{ fontSize: '18px', marginBottom: '8px' }}>No matches found for your search.</h3>
            <p style={{ color: '#565959', fontSize: '13px' }}>Double check your spelling or try clearing the search filters to see all available moments.</p>
            <button
              onClick={() => { setSelectedCategory('All'); navigate('/gallery'); }}
              className="button button-primary"
              style={{ width: 'auto', marginTop: '15px', borderRadius: '8px' }}
            >
              Clear Filters & View All
            </button>
          </div>
        )}
      </main>
    </div>
  );
}
