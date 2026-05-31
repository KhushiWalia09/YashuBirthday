import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useState } from 'react';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import Gallery from './pages/Gallery';
import Product from './pages/Product';
import WishWall from './pages/WishWall';
import './styles.css';

const initialWishes = [
  { name: 'Khushi', relation: 'Friend', rating: 5, title: 'Amazing person!', text: 'May your day be filled with endless smiles!', date: 'May 31, 2026' },
  { name: 'Yogyta', relation: 'Brother', rating: 5, title: 'Super helpful', text: 'I hope that you see yourself too, the way we see you - a wonderful person.', date: 'May 30, 2026' },
  { name: 'Manyata', relation: 'Best Friend', rating: 5, title: 'Always smiling', text: 'May you achieve all your dreams and find happiness in every moment.', date: 'May 30, 2026' },
  { name: 'Jagriti', relation: 'Classmate', rating: 5, title: 'Heartwarming vibe', text: 'I wish you get everything you wish for, and more.', date: 'May 29, 2026' },
  { name: 'Ved', relation: 'Friend', rating: 5, title: 'Kind soul', text: 'Thank you for being this helpful, kind and wonderful person.', date: 'May 28, 2026' },
  // Comment from Dev: Wishing you a wonderful birthday ahead! Let this year bring endless happiness and success!
];

function App() {
  const [cart, setCart] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [wishes, setWishes] = useState(initialWishes);

  const addToCart = (product) => {
    setCart((prev) => {
      const exists = prev.find((item) => item.id === product.id);
      if (exists) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item
        );
      }
      return [...prev, { ...product, qty: 1 }];
    });
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  return (
    <div className="app-shell">
      <BrowserRouter>
        <NavBar cartCount={cart.reduce((sum, item) => sum + item.qty, 0)} onSearch={handleSearch} searchQuery={searchQuery} />
        <main className="page-shell">
          <Routes>
            <Route path="/" element={<Home addToCart={addToCart} wishes={wishes} />} />
            <Route path="/gallery" element={<Gallery searchQuery={searchQuery} addToCart={addToCart} />} />
            <Route path="/product/:id" element={<Product addToCart={addToCart} />} />
            <Route path="/wish-wall" element={<WishWall wishes={wishes} setWishes={setWishes} />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;

