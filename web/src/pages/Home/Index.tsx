import React, { useEffect, useState } from 'react';
import './styles.css';

import api from '../services/api';

interface Item {
  id: number;
  features: string;
  description: string;
}

const Home = () => {
  const [items, setItems] = useState<Item[]>([]);

  useEffect(() => {
    api.get('plans').then(response => {
      setItems(response.data);
    });
  }, []);

  return (
    <div id="page-home">
      <header className="header">
        Finacial Market
        <div className="bar">
          <button type="button">Home</button>
          <button type="button">Services</button>
          <button type="button">About us</button>
          <button type="button">Contact</button>
        </div>
      </header>
      <div className="main">
        <ul className="items-grid">
          {items.map(item => (
            <li key={item.id}>
              <span>{item.description}</span>
              <span>{item.features}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="aside">
        Breaking News
      </div>
      <div className="footer">
        Footer
      </div>
    </div>
  );
}

export default Home;