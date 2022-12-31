import React from "react";
import littlelemonlogo from "../assets/Little Lemon Logo/Logo4.png";

function Header() {
  return (
    <>
      <img src={littlelemonlogo} alt="lemon" width="150" height="50"></img>
      <h1>Little Lemon</h1>
    </>
  );
}

export default Header;
