import React from 'react';
import './game-detail.css';

const formatDate = (timestamp) => {
  const date = new Date(timestamp * 1000);
  return date.toLocaleDateString("en-US");
};

const GameDetail = ({ detail }) => {
  if (!detail) return null;

  return (
    <div className="game-detail-card">
      <img
        className="game-detail-media"
        alt={`Cover for ${detail.info.title}`}
        src={detail.info.thumb}
      />
      <div className="game-detail-content">
        <h5 className="game-detail-title">{detail.info.title}</h5>
        <p className="game-detail-price">
          Cheapest Price Ever: ${detail.cheapestPriceEver.price} on {formatDate(detail.cheapestPriceEver.date)}
        </p>
        <p className="game-detail-current-deals">Current Deals:</p>
        <ul className="game-detail-deals-list">
          {detail.deals.map((deal) => (
            <li key={deal.dealID} className="game-detail-list-item">
              Store ID: {deal.storeID}, Price: ${deal.price}
              <br />
              Savings: {parseFloat(deal.savings).toFixed(2)}%, Retail Price: ${deal.retailPrice}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default GameDetail;
