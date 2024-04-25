// GameCard.js
import React from 'react';
import './game-card.css'; // 确保引入CSS文件

const GameCard = ({ game, onSelect }) => {
  const { thumb, external, cheapest } = game;

  return (
    <div className="game-card" onClick={() => onSelect(game.gameID)}>
      <div className="game-card-action-area">
        <img
          src={thumb}
          alt={external}
          className="game-card-media"
          height="140"
        />
        <div className="game-card-content">
          <h5 className="game-card-title">{external}</h5>
          <p className="game-card-price">Best Price: ${cheapest}</p>
        </div>
      </div>
    </div>
  );
};

export default GameCard;
