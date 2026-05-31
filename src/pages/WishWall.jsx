import { useState } from 'react';

export default function WishWall({ wishes, setWishes }) {
  const [name, setName] = useState('');
  const [title, setTitle] = useState('');
  const [relation, setRelation] = useState('Friend');
  const [rating, setRating] = useState(5);
  const [text, setText] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [helpfulCounts, setHelpfulCounts] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim() || !text.trim() || !title.trim()) return;

    // Get today's date formatted nicely like Amazon
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const todayStr = new Date().toLocaleDateString('en-US', options);

    const newWish = {
      name: name.trim(),
      relation: relation,
      rating: Number(rating),
      title: title.trim(),
      text: text.trim(),
      date: todayStr,
    };

    setWishes([newWish, ...wishes]);
    
    // Clear inputs and show success message
    setName('');
    setTitle('');
    setText('');
    setSubmitted(true);

    // Hide success message after 5 seconds
    setTimeout(() => {
      setSubmitted(false);
    }, 5000);
  };

  const handleHelpful = (idx) => {
    setHelpfulCounts((prev) => ({
      ...prev,
      [idx]: (prev[idx] || 0) + 1,
    }));
  };

  return (
    <div className="reviews-page-grid">
      
      {/* Left Sidebar: Ratings Breakdown & Submit Review Form */}
      <aside className="reviews-sidebar-left">
        <h2>Customer Reviews</h2>
        
        {/* Faux Summary Rating block */}
        <div className="reviews-stars-breakdown">
          <span className="rating-stars" style={{ fontSize: '18px' }}>⭐⭐⭐⭐⭐</span>
          <span className="average-val">5 out of 5</span>
        </div>
        <p style={{ color: '#565959', fontSize: '13px', marginBottom: '20px' }}>
          Global ratings: 100% of reviews are 5-star!
        </p>

        {/* Dynamic percentage bars */}
        <div style={{ marginBottom: '25px' }}>
          <div className="bar-row">
            <span className="bar-label">5 star</span>
            <div className="bar-bg">
              <div className="bar-fill" style={{ width: '100%' }} />
            </div>
            <span className="bar-percent">100%</span>
          </div>
          <div className="bar-row" style={{ color: '#565959', textDecoration: 'none', cursor: 'default' }}>
            <span className="bar-label">4 star</span>
            <div className="bar-bg">
              <div className="bar-fill" style={{ width: '0%' }} />
            </div>
            <span className="bar-percent">0%</span>
          </div>
          <div className="bar-row" style={{ color: '#565959', textDecoration: 'none', cursor: 'default' }}>
            <span className="bar-label">3 star</span>
            <div className="bar-bg">
              <div className="bar-fill" style={{ width: '0%' }} />
            </div>
            <span className="bar-percent">0%</span>
          </div>
          <div className="bar-row" style={{ color: '#565959', textDecoration: 'none', cursor: 'default' }}>
            <span className="bar-label">2 star</span>
            <div className="bar-bg">
              <div className="bar-fill" style={{ width: '0%' }} />
            </div>
            <span className="bar-percent">0%</span>
          </div>
          <div className="bar-row" style={{ color: '#565959', textDecoration: 'none', cursor: 'default' }}>
            <span className="bar-label">1 star</span>
            <div className="bar-bg">
              <div className="bar-fill" style={{ width: '0%' }} />
            </div>
            <span className="bar-percent">0%</span>
          </div>
        </div>

        {/* Submit Birthday Review Form */}
        <div className="review-form-section">
          <h3>Review Yashu's Birthday</h3>
          <p>Share your warm wishes and thoughts for her special year ahead.</p>

          {submitted && (
            <div style={{
              backgroundColor: '#f3faf3',
              border: '1px solid #2e7d32',
              color: '#1b5e20',
              padding: '12px',
              borderRadius: '4px',
              fontSize: '13px',
              fontWeight: 600,
              marginBottom: '15px',
            }}>
              ✓ Review submitted successfully! Thank you for the birthday love! ❤️
            </div>
          )}

          <form className="review-amz-form" onSubmit={handleSubmit}>
            
            {/* Input Name */}
            <div className="form-group-amz">
              <label htmlFor="name-input">Your Name / Nickname</label>
              <input
                id="name-input"
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g. Khushi"
              />
            </div>

            {/* Input Title */}
            <div className="form-group-amz">
              <label htmlFor="title-input">Headline Title</label>
              <input
                id="title-input"
                type="text"
                required
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="e.g. Wishing you the absolute best year!"
              />
            </div>

            {/* Input Relation */}
            <div className="form-group-amz">
              <label htmlFor="relation-select">Your Relation</label>
              <select
                id="relation-select"
                value={relation}
                onChange={(e) => setRelation(e.target.value)}
                style={{
                  padding: '8px 12px',
                  borderRadius: '4px',
                  border: '1px solid var(--amz-border)',
                  backgroundColor: '#f0f2f2',
                  fontFamily: 'var(--font-family)',
                  fontSize: '13px',
                  outline: 'none',
                  cursor: 'pointer',
                }}
              >
                <option value="Best Friend">Best Friend</option>
                <option value="Friend">Friend</option>
                <option value="Sister">Sister</option>
                <option value="Brother">Brother</option>
                <option value="Classmate">Classmate</option>
                <option value="Well-wisher">Well-wisher</option>
              </select>
            </div>

            {/* Faux Star Rating select */}
            <div className="form-group-amz">
              <label htmlFor="stars-select">Overall Rating</label>
              <select
                id="stars-select"
                value={rating}
                onChange={(e) => setRating(Number(e.target.value))}
                style={{
                  padding: '8px 12px',
                  borderRadius: '4px',
                  border: '1px solid var(--amz-border)',
                  backgroundColor: '#f0f2f2',
                  fontFamily: 'var(--font-family)',
                  fontSize: '13px',
                  outline: 'none',
                  cursor: 'pointer',
                }}
              >
                <option value="5">5 out of 5 stars (Recommended)</option>
                <option value="4">4 out of 5 stars</option>
              </select>
            </div>

            {/* Text Message */}
            <div className="form-group-amz">
              <label htmlFor="text-input">Write your birthday review</label>
              <textarea
                id="text-input"
                rows="4"
                required
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="What is your sweet, funny, or heartfelt wish for Yashu's birthday?"
              />
            </div>

            <button type="submit" className="button button-primary" style={{ borderRadius: '8px' }}>
              Submit Birthday Review
            </button>
          </form>
        </div>
      </aside>

      {/* Right Column: Customer Reviews / Wishes List */}
      <main className="reviews-main-right">
        <h2>Top reviews from friends & guests</h2>
        
        {wishes.map((w, idx) => (
          <div key={idx} className="review-card-amz">
            {/* User row */}
            <div className="review-user-row">
              <div className="user-avatar-circle">
                {w.name.charAt(0).toUpperCase()}
              </div>
              <span className="user-name-label">{w.name}</span>
            </div>

            {/* Meta Row: Stars, title, date */}
            <div className="review-meta-row">
              <span className="rating-stars">
                {'★'.repeat(w.rating)}{'☆'.repeat(5 - w.rating)}
              </span>
              <span className="review-card-title">{w.title}</span>
            </div>

            {/* Location and Date details */}
            <div style={{ fontSize: '13px', color: '#565959', margin: '-2px 0 2px' }}>
              Reviewed in India on {w.date}
            </div>

            {/* Verified Relation Badge */}
            <div>
              <span className="verified-purchase">
                ✓ Verified {w.relation}
              </span>
            </div>

            {/* Review Wish Message */}
            <p className="review-body-text">{w.text}</p>

            {/* Micro-interaction: Helpful button */}
            <div className="helpful-row">
              <span>
                {helpfulCounts[idx] ? (
                  <>{helpfulCounts[idx]} people found this helpful</>
                ) : (
                  <>One person found this helpful</>
                )}
              </span>
              <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                <button
                  onClick={() => handleHelpful(idx)}
                  className="helpful-btn"
                >
                  Helpful
                </button>
                <span style={{ color: '#ccc' }}>|</span>
                <a href="#report" onClick={(e) => { e.preventDefault(); alert("Reported! Happy Birthday!"); }}>
                  Report review
                </a>
              </div>
            </div>
          </div>
        ))}
      </main>
    </div>
  );
}
