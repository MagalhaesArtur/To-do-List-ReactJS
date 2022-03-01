import React from "react";
import "./Header.css";
function Header(props) {
  return (
    <header>
      <h1 className="title">{props.nome}</h1>
    </header>
  );
}

export default Header;
