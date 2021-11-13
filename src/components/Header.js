import React from "react";

const Header = ({ score }) => {
  return (
    <div className="header">
      
      <div className="text">
        <span>Rock</span>
        <span>Paper</span>
        <span>Scissors</span>
      </div>
      <div className="text-kelompok">
        <h3>Tugas Multimedia</h3>
        <span>Kelompok 5</span>
        <span>Anugrah Akbar P (10118969)</span>
        <span>Giwang Dwi Kintan (12118954)</span>
        <span>Octavianasya Hakim (15118493)</span>
      </div>
      <div className="score-box">
        <span>Score</span>
        <div className="score-box__score">{score}</div>
      </div>
    </div>
  );
};

export default Header;
