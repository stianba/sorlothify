import React from 'react';
import './chip.css';

const Chip = ({ icon, line, sub }) => (
  <div className="chip">
    <div className="gfx" style={{ backgroundImage: `url(${icon})` }} />
    <div className="text">
      <div className="line">{line}</div>
      <div className="line -sub">{sub}</div>
    </div>
  </div>
);

export default Chip;
