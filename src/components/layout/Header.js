import React from "react";

const Header = () => {
  return (
    <header style={headerstyle}>
      <h1>My TodoList</h1>
    </header>
  );
};

const headerstyle = {
  background: "#283794",
  color: "#F2F2F8",
  textAlign: "center",
  padding: "10px",
  fontStyle: "italic",
};

export default Header;
