import React from 'react';
import { Link } from 'react-router-dom';
import './headerStyle.css';

function Header() {
  return (
    <header className="p-4 border-b-2">
      <div className="container flex items-center justify-between mx-auto font-medium">
        {/* Logo */}
        <div>
          <Link to="/" className="text-2xl text-black">
            MYSTIC<span className="text-blue-700">WEB</span>CRAFT
          </Link>
        </div>

        {/* Navigation Links */}
        <nav className="flex-grow space-x-4 font-medium text-right">
          <Link to="#" className="header-link">
            Home
          </Link>
          <Link to="#" className="header-link">
            Questions
          </Link>
          <Link to="/all-courses" className="header-link">
            Courses
          </Link>
          <Link to="/community-home" className="header-link">
            Community
          </Link>
          <Link to="/img" className="header-link">
            Image To Code
          </Link>
          <Link to="/code-complexity" className="header-link">
            Code Complexity Analyzer
          </Link>
          <Link to="/admin" className="header-link">
            Admin
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
