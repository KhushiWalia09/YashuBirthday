import { useParams, Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { products } from '../data/products';

export default function Product({ addToCart }) {
  const { id } = useParams();
  const navigate = useNavigate();
  
  // Find product by id, fallback to first product
  const product = products.find((p) => String(p.id) === id) || products[0];

  const [activeImage, setActiveImage] = useState(product.image);
  const [quantity, setQuantity] = useState(1);
  const [showModal, setShowModal] = useState(false);

  // Sync active image if product id changes
  useEffect(() => {
    setActiveImage(product.image);
  }, [product]);

  // Combine main image and thumbnails to form the gallery
  const galleryImages = [product.image, ...product.thumbnails];

  const handleBuyNow = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className="product-detail-container">
      {/* Breadcrumb Path */}
      <div className="breadcrumb">
        <Link to="/">Home</Link>
        <span>&gt;</span>
        <Link to="/gallery">Birthday Collections</Link>
        <span>&gt;</span>
        <span style={{ color: '#565959', fontWeight: 600 }}>{product.title}</span>
      </div>

      {/* Main Detail Grid Layout */}
      <div className="product-grid-detail">
        
        {/* Column 1: Interactive Image Gallery */}
        <div className="image-viewer">
          <div className="thumbnail-list">
            {galleryImages.map((img, index) => (
              <button
                key={index}
                className={`thumbnail-item ${activeImage === img ? 'active' : ''}`}
                onMouseEnter={() => setActiveImage(img)}
                onClick={() => setActiveImage(img)}
                aria-label={`View thumbnail ${index + 1}`}
              >
                <img src={img} alt={`${product.title} view ${index + 1}`} />
              </button>
            ))}
          </div>
          <div className="main-image-container">
            <img src={activeImage} alt={product.title} />
          </div>
        </div>

        {/* Column 2: Specifications & Descriptions */}
        <div className="info-section">
          <div className="info-header">
            <Link to="/gallery" className="info-brand">
              Visit the Yashu Birthday Store
            </Link>
            <h1 className="info-title">{product.title}</h1>
            <div className="rating-line">
              <span className="rating-stars">⭐⭐⭐⭐⭐</span>
              <a href="#reviews" style={{ fontSize: '13px' }}>
                {150 + product.id * 18} ratings
              </a>
              <span style={{ color: '#ccc' }}>|</span>
              <a href="#qna" style={{ fontSize: '13px' }}>
                45 answered questions
              </a>
            </div>
          </div>

          {/* Pricing Panel */}
          <div className="pricing-panel">
            <div style={{ display: 'flex', alignItems: 'baseline' }}>
              <span className="discount-badge">Priceless</span>
              <span className="price-main" style={{ color: 'var(--amz-price)' }}>
                Unlimited
              </span>
            </div>
            <span className="original-price-strike">
              M.R.P.: <span style={{ color: 'var(--amz-text)', fontWeight: 600 }}>Precious & Priceless</span>
            </span>
            <div className="returns-tag">
              Inclusive of all birthday joy • <span className="prime-badge" aria-label="Amazon Prime" style={{ verticalAlign: 'middle', margin: 0 }} /> eligible
            </div>
            <div className="returns-tag">
              🛡️ <a href="#">FREE Returns</a>
            </div>
          </div>

          {/* Bulleted Specifications */}
          <div className="about-bullets">
            <h3>About this item</h3>
            <ul>
              {product.bullets && product.bullets.map((bullet, index) => (
                <li key={index}>
                  <strong>{bullet.label}:</strong> {bullet.value}
                </li>
              ))}
              <li>
                <strong>MEMORIAL DESCRIPTION:</strong> {product.desc}
              </li>
            </ul>
          </div>
        </div>

        {/* Column 3: The Buy Box Widget */}
        <aside className="buybox-container">
          <div className="buybox-price" style={{ color: 'var(--amz-price)' }}>Unlimited</div>
          
          <div className="buybox-delivery">
            <a href="#">FREE delivery</a> <strong>Wednesday, June 3</strong> on your first order.
            <br />
            Or fastest delivery <strong>Tomorrow, June 1</strong>. Order within <span style={{ color: '#b12704' }}>5 hrs 23 mins</span>.
          </div>

          <div className="stock-status">In Stock.</div>

          {/* Quantity selector */}
          <div className="quantity-row">
            <label htmlFor="qty-select">Quantity:</label>
            <select
              id="qty-select"
              value={quantity}
              onChange={(e) => setQuantity(Number(e.target.value))}
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </div>

          {/* Core Actions buttons */}
          <div className="buybox-actions">
            <button
              onClick={() => addToCart({ ...product, qty: quantity })}
              className="button button-primary"
            >
              Add to Cart
            </button>
            <button
              onClick={handleBuyNow}
              className="button button-secondary"
              style={{ marginTop: '5px' }}
            >
              Buy Now
            </button>
          </div>

          {/* Additional details */}
          <div className="transaction-sub">
            <div className="transaction-row">
              <span className="label-col">Ships from</span>
              <span className="val-col" style={{ color: 'var(--amz-link)' }}>Yashu's Heart</span>
            </div>
            <div className="transaction-row">
              <span className="label-col">Sold by</span>
              <span className="val-col" style={{ color: 'var(--amz-link)' }}>YourBigGroupofSisters</span>
            </div>
            <div className="transaction-row" style={{ marginTop: '8px', borderTop: '1px solid #eee', paddingTop: '8px' }}>
              <span className="label-col">Transaction</span>
              <span className="val-col">🔒 Secure</span>
            </div>
          </div>
        </aside>
      </div>

      {/* Checkout Confirmed Success Modal */}
      {showModal && (
        <div className="checkout-modal-backdrop" onClick={handleCloseModal}>
          <div className="checkout-modal" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h3>🎉 Order Confirmed!</h3>
              <button className="close-modal-btn" onClick={handleCloseModal} aria-label="Close modal">
                ×
              </button>
            </div>
            <div className="modal-body">
              <div className="modal-icon">🎂</div>
              <h4>Happy Birthday, Yashu!</h4>
              <p>
                Your order for this wonderful memory has been placed successfully for free! 
                We have dispatched endless bundles of smiles, joy, and success to your address.
              </p>
              
              {/* Product preview inside the modal */}
              <div className="modal-card-preview">
                <img src={product.image} alt={product.title} />
                <div className="modal-card-info">
                  <h5>{product.title}</h5>
                  <p>Quantity: {quantity} • Price: Unlimited (Priceless)</p>
                  <p style={{ color: 'var(--amz-green)', fontWeight: 600 }}>Shipped with love</p>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button
                onClick={handleCloseModal}
                className="button button-primary"
                style={{ width: 'auto', borderRadius: '8px', padding: '6px 20px' }}
              >
                Done
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
