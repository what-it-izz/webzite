// TwoColumnLayout.js
import React from 'react';
import './TwoColumnLayout.css'; // Import the CSS file

const TwoColumnLayout = ({ leftContent, rightContent }) => {
  return (
    <div className="two-column-layout">
      <div className="left-content">{leftContent}</div>
      <div className="right-content">{rightContent}</div>
    </div>
  );
};

export default TwoColumnLayout;
