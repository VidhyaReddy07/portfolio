import React from 'react';
import './Loading.css';

const Loading = () => {
  return (
    <div className="loading-container-3d">
      <div className="loading-content-3d">
        <div className="loading-spinner-3d">
          <div className="spinner-ring-3d ring-1"></div>
          <div className="spinner-ring-3d ring-2"></div>
          <div className="spinner-ring-3d ring-3"></div>
        </div>
        <p className="loading-text-3d">Loading portfolio...</p>
      </div>
    </div>
  );
};

export default Loading;