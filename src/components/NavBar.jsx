import { NavLink, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function NavBar({ cartCount, onSearch, searchQuery }) {
  const [localQuery, setLocalQuery] = useState(searchQuery);
  const navigate = useNavigate();

  // Sync local input value with global search query if it changes from outside
  useEffect(() => {
    setLocalQuery(searchQuery);
  }, [searchQuery]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(localQuery);
    navigate('/gallery');
  };

  const handleInputChange = (e) => {
    const val = e.target.value;
    setLocalQuery(val);
    onSearch(val);
    
    // Auto-navigate to gallery if typing from home or product pages
    if (window.location.pathname !== '/gallery') {
      navigate('/gallery');
    }
  };

  return (
    <header className="store-header">
      {/* Top Main Navigation Bar */}
      <div className="store-top">
        {/* Logo Section */}
        <NavLink to="/" className="logo-container">
          <div className="logo-text">
            amazon<span>.yashu</span>
          </div>
          <div className="logo-arrow" />
        </NavLink>

        {/* Deliver-to Box */}
        <div className="delivery-box" onClick={() => navigate('/wish-wall')}>
          <span className="delivery-icon">📍</span>
          <div className="delivery-text">
            <span className="line-1">Deliver to Yashu</span>
            <span className="line-2">Gurugram, Haryana</span>
          </div>
        </div>

        {/* Search Bar Block */}
        <form className="search-form" onSubmit={handleSubmit}>
          <div className="search-dept-select">
            Moments ▼
          </div>
          <input
            type="text"
            aria-label="Search birthday products"
            value={localQuery}
            onChange={handleInputChange}
            placeholder="Search for rooftop, saree, balcony, evening portraits..."
          />
          <button type="submit" className="search-btn" aria-label="Submit search">
            🔍
          </button>
        </form>

        {/* Nav Action Items */}
        <div className="header-actions">
          {/* Account Dropdown Faux */}
          <NavLink to="/wish-wall" className="nav-action-item">
            <span className="line-1">Hello, Khushi</span>
            <span className="line-2">Birthday Reviews ▼</span>
          </NavLink>

          {/* Orders */}
          <div className="nav-action-item" onClick={() => navigate('/gallery')}>
            <span className="line-1">Returns</span>
            <span className="line-2">& Memories</span>
          </div>

          {/* Cart with dynamic badge */}
          <NavLink to="/gallery" className="cart-btn">
            <div className="cart-icon-container">
              <span className="cart-icon-img">🛒</span>
              <span className="cart-count-badge">{cartCount}</span>
            </div>
            <span className="cart-label">Cart</span>
          </NavLink>
        </div>
      </div>

      {/* Subnavigation Category Nav Bar */}
      <nav className="category-nav">
        <NavLink to="/" className={({ isActive }) => isActive ? 'cat-link active' : 'cat-link'}>
          ☰ All
        </NavLink>
        <NavLink to="/gallery" className={({ isActive }) => isActive ? 'cat-link active' : 'cat-link'}>
          Moments Gallery
        </NavLink>
        <NavLink to="/wish-wall" className={({ isActive }) => isActive ? 'cat-link active' : 'cat-link'}>
          Customer Wishes
        </NavLink>
        <span className="cat-link" onClick={() => navigate('/gallery')}>Today's Deals</span>
        <span className="cat-link" onClick={() => navigate('/wish-wall')}>Gift Ideas</span>
        <span className="cat-link" onClick={() => navigate('/')}>Registry</span>

        <div className="subnav-promo">
          Shop Yashu's Birthday Specials <span>🎂</span>
        </div>
      </nav>
    </header>
  );
}
