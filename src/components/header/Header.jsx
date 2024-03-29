import React from 'react';
import { Link } from 'react-router-dom';
import './headerStyle.css'; // Import the CSS file

function Header() {

  return (
    <header className="p-4 border-b-2">
      <div className="container flex items-center justify-between mx-auto font-medium">
        {/* Logo */}
        <div>
          <Link
            to="/"
            className="text-2xl text-black"
          >
            MYSTIC<span className='text-blue-700'>WEB</span>CRAFT
          </Link>
        </div>

        {/* Navigation Links */}
        <nav className="flex-grow space-x-4 font-medium text-right ">
          <Link
            to="/"
            className="header-link"
          >
            Home
          </Link>
          <Link
            to="/questions"
            className="header-link"
          >
            Questions
          </Link>
          <Link
            to="/company/"
            className="header-link"
          >
            Intern Supporter
          </Link>
          <Link
            to="/quizlist"
            className="header-link"
          >
            Quiz
          </Link>
          <Link
            to="/chat"
            className="header-link"
          >
            AI Bot
          </Link>

        </nav>
      </div>
    </header>
  );
}

export default Header;
