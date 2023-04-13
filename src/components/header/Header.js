import './Header.scss';
import PrimaryNavigation from './primaryNavigation/PrimaryNavigation';
import CtaContainer from './cta/CtaContainer';
import React from 'react';
import SecondaryNavigation from './secondaryNavigation/SecondaryNavigation';
function Header() {
  return (
    <header>
      <PrimaryNavigation />
      <CtaContainer />
      <SecondaryNavigation />
    </header>
  );
}

export default Header;
