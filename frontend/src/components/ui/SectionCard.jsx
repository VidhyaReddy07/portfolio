import React from 'react';

const SectionCard = ({ children, className = '', title }) => {
  return (
    <div className={`card-3d bg-white dark:bg-slate-900 rounded-xl p-6 shadow-lg-3d ${className}`}>
      {title && <div className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">{title}</div>}
      <div className="text-gray-700 dark:text-gray-300">{children}</div>
    </div>
  );
};

export default SectionCard;
