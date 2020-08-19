import React from 'react';
import './styles.css';

const Home = () => {
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
        Content
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