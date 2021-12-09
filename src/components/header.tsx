import React from "react";
import { Typography } from "antd";
const {Title} = Typography
const Header = () => {
  return (
    <nav className="navbar navbar-light bg-light px-4">
      <Title level={3}>Food Concepts</Title>
      <form >
        <input
          className="form-control mr-sm-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
      </form>
    </nav>
  );
};

export default Header;
