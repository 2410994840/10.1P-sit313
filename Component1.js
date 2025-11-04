import React from "react";
import { Input, Button } from "semantic-ui-react";
import "./style.css"; 

function Search() {
  return (
    <div className="search-bar">
      <p className="logo-text">DEV@Deakin</p>
      <Input placeholder="Search..." className="search-input" />
      <Button primary className="post-btn">POST</Button>
      <Button secondary className="login-btn">LOGIN</Button>
    </div>
  );
}

export default Search;
