import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <nav>
      <Link className="button" to="/">Home</Link>
      <Link className="button" to="/blog">Blog</Link>
      </nav>
    </header>
  );
};

export default Header;
