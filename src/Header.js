import React from 'react';
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";

function Header() {
  return (
    <div className="header">
        <img 
            className='header__logo'
            src="https://www.doorwaysva.org/wp-content/uploads/2019/06/amazon-logo.png"
        />

        <div className="header__search">
                <input
                className="header__searchInput"
                type="text" />

                <SearchIcon
                className="header__searchIcon" />
                {/* Logo */}
            
        </div>

            <div className="header__nav">
                <div className="header__option">
                    <span className="header__optionLineOne">
                        Hello Fellow  
                    </span>

                    <span className="header__optionLineTwo">
                        Sign In/Up
                    </span>

                    <span className="header__optionLineThree">
                        Your Orders
                    </span>
                </div>
            </div>



    </div>
  )
}

export default Header
