import React from 'react';

function SecondaryNavigation() {
  return (
    <div className='background-color-black'>
      <div className='container secondary-navigation-container'>
        <div className='secondary-navigation'>
          <nav className='secondary-navigation-list'>
            <a href='' className='secondary-navigation-list-anchors'>
              Men
            </a>
            <a href='' className='secondary-navigation-list-anchors'>
              Women
            </a>
            <a href='' className='secondary-navigation-list-anchors'>
              Unisex
            </a>
            <a href='' className='secondary-navigation-list-anchors'>
              Best seller
            </a>
            <a href='' className='secondary-navigation-list-anchors'>
              New Arrival
            </a>
            <a href='' className='secondary-navigation-list-anchors red-helper'>
              Offers
            </a>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default SecondaryNavigation;
