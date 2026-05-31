import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { products } from '../data/products';

export default function Home({ addToCart, wishes }) {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-advance slides every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % products.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  // Highlight Product 1 as the Faux "Deal of the Day"
  const dealOfTheDay = products[0];

  // Get a random wish to display on the wishes teaser card
  const latestWish = wishes[0] || {
    name: 'Khushi',
    text: 'May your day be filled with endless smiles!',
    rating: 5,
  };

  return (
    <div className="home-container">
      {/* Giant Sliding Hero Banner */}
      <section className="hero-slider">
        {products.map((p, idx) => (
          <div
            key={p.id}
            className={`hero-slide ${idx === currentSlide ? 'active' : ''}`}
          >
            <img src={p.image} alt={p.title} />
          </div>
        ))}
        {/* Subtle Dark Text Overlay */}
        <div className="hero-text-overlay">
          <h1>Happy Birthday, Yashu!</h1>
          <p>Explore the curated catalog of her golden celebration photos, captured as special keepsake memories. Add your favorites to the cart or write a loving guestbook review.</p>
          <div style={{ display: 'flex', gap: '10px', maxWidth: '280px' }}>
            <button
              onClick={() => navigate('/gallery')}
              className="button button-primary"
            >
              Shop Gallery
            </button>
            <button
              onClick={() => navigate('/wish-wall')}
              className="button button-secondary"
            >
              Post Wishes
            </button>
          </div>
        </div>
        {/* Amazon hero gradient fade to cover the bottom */}
        <div className="hero-gradient" />
      </section>

      {/* Overlapping Deck of 4 Cards */}
      <section className="overlapping-grid">
        {/* Card 1: Happy Birthday Welcome */}
        <div className="amz-card">
          <h2>Special Birthday Guest</h2>
          <div className="amz-card-image">
            <img src={products[1].image} alt="Yashu Birthday Portrait" />
          </div>
          <Link to="/gallery" className="amz-card-link">
            Explore all 5 memories →
          </Link>
        </div>

        {/* Card 2: Faux Deal of the Day */}
        <div className="amz-card">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
            <h2>Deal of the Day</h2>
            <span style={{ fontSize: '11px', color: '#b12704', fontWeight: 700 }}>Ends in 05 hrs</span>
          </div>
          <div className="amz-card-image" style={{ cursor: 'pointer' }} onClick={() => navigate(`/product/${dealOfTheDay.id}`)}>
            <img src={dealOfTheDay.image} alt={dealOfTheDay.title} />
          </div>
          <div style={{ marginBottom: '10px' }}>
            <span style={{ backgroundColor: '#cc0c39', color: '#fff', padding: '3px 6px', fontWeight: 700, borderRadius: '2px', fontSize: '12px', marginRight: '6px' }}>
              100% OFF
            </span>
            <span style={{ color: '#cc0c39', fontWeight: 700, fontSize: '13px' }}>Deal</span>
            <div style={{ fontSize: '18px', fontWeight: 700, color: 'var(--amz-price)', marginTop: '4px' }}>
              Unlimited <span style={{ color: '#565959', fontSize: '13px', fontWeight: 'normal' }}>(Priceless)</span>
            </div>
            <div style={{ fontSize: '13px', color: '#111', fontWeight: 600, marginTop: '2px' }}>
              {dealOfTheDay.title}
            </div>
          </div>
          <Link to={`/product/${dealOfTheDay.id}`} className="amz-card-link">
            Shop this special deal →
          </Link>
        </div>

        {/* Card 3: Birthday Reviews (Wishes) Guestbook Teaser */}
        <div className="amz-card">
          <h2>Top Customer Wish</h2>
          <div className="wish-teaser-box">
            <div style={{ color: '#ff9900', fontSize: '12px', marginBottom: '4px' }}>⭐⭐⭐⭐⭐</div>
            <strong>"{latestWish.title || 'Love it!'}"</strong>
            <p style={{ marginTop: '4px' }}>{latestWish.text}</p>
            <div style={{ textAlign: 'right', fontSize: '11px', color: '#777', marginTop: '6px', fontWeight: 600 }}>
              — By {latestWish.name}
            </div>
          </div>
          <div style={{ textAlign: 'center', marginBottom: '15px' }}>
            <p style={{ fontSize: '12px', color: '#565959', marginBottom: '8px' }}>Have a sweet message or wish for her special day?</p>
            <button
              onClick={() => navigate('/wish-wall')}
              className="button button-primary"
              style={{ padding: '6px 12px', borderRadius: '8px' }}
            >
              Write Birthday Review
            </button>
          </div>
          <Link to="/wish-wall" className="amz-card-link">
            View all {wishes.length} reviews →
          </Link>
        </div>

        {/* Card 4: Bestsellers 2x2 Grid */}
        <div className="amz-card">
          <h2>Bestsellers in Memories</h2>
          <div className="amz-card-grid">
            {products.slice(0, 4).map((p) => (
              <Link key={p.id} to={`/product/${p.id}`} className="grid-item">
                <div className="grid-item-thumb">
                  <img src={p.image} alt={p.title} />
                </div>
                <div className="grid-item-title">{p.title}</div>
              </Link>
            ))}
          </div>
          <Link to="/gallery" className="amz-card-link">
            See all portrait collections →
          </Link>
        </div>
      </section>

      {/* Horizontal Scroller: "Inspired by your browsing history" */}
      <section className="horizontal-shelf">
        <h2>Inspired by your browsing history</h2>
        <div className="shelf-scroll">
          {products.map((p) => (
            <div key={p.id} className="shelf-item">
              <div
                className="shelf-item-image"
                style={{ cursor: 'pointer' }}
                onClick={() => navigate(`/product/${p.id}`)}
              >
                <img src={p.image} alt={p.title} />
              </div>
              <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                <Link to={`/product/${p.id}`} className="shelf-item-title">
                  {p.title}
                </Link>
                <div style={{ color: '#ff9900', fontSize: '13px', margin: '4px 0' }}>
                  ⭐⭐⭐⭐⭐ <span style={{ color: '#007185', fontSize: '12px' }}>{100 + p.id * 12}</span>
                </div>
                <div className="shelf-item-price" style={{ color: 'var(--amz-price)' }}>Unlimited</div>
                <div style={{ fontSize: '11px', color: '#007600', fontWeight: 600, margin: '4px 0 8px' }}>
                  Eligible for FREE Shipping
                </div>
                <button
                  onClick={() => addToCart(p)}
                  className="button button-primary"
                  style={{
                    padding: '4px 8px',
                    borderRadius: '8px',
                    fontSize: '11px',
                    fontWeight: 500,
                  }}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
