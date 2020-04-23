import React from "react";

import "./_header.scss";

const Header = () => {
  return (
    <div className="header">
      <div className="header__content">
        <h1 className="header__title">Where is the World?</h1>
        <button className="header__button">Dark Mode</button>
      </div>
    </div>
  );
};

export default Header;
