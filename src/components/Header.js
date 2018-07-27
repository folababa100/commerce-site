import React from 'react';
import HeaderDesign from './HeaderDesign';
import HeaderFilterDesign from './HeaderFIlterDesign';
import HeaderFilterSearch from './HeaderFilterSearch';

const Header = () => {
  return (
    <div className="header">
      <HeaderDesign/>
      <HeaderFilterDesign/>
      <HeaderFilterSearch/>
    </div>
  )
}

export default Header;
