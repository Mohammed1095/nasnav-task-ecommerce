import React from 'react';

function PrimaryNavigationAnchor({ icon, children }) {
  return (
    <a href='#' className='primary-navigation-anchors-list-btn flex-center'>
      {icon}
      <p>{children}</p>
    </a>
  );
}

export default PrimaryNavigationAnchor;
