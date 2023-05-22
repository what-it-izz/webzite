import React from 'react';

const TwoColumnLayout = ({ leftContent, rightContent }) => {
  return (
    <div style={{ display: 'flex' }}>
      <div style={{ flex: 1 }}>{leftContent}</div>
      <div style={{ flex: 1 }}>{rightContent}</div>
    </div>
  );
};

export default TwoColumnLayout;