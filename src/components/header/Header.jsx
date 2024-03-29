import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  
  return (
    <header className="p-4 border-b-2">
      <div className="container flex items-center justify-between mx-auto font-medium">
        {/* Logo */}
        <div>
          <Link
            to="/"
            className="text-2xl text-black "
          >
            MYSTIC<span className='text-blue-700'>WEB</span>CRAFT
          </Link>
        </div>

        {/* Navigation Links */}
        <nav className="flex-grow space-x-4 font-medium text-right ">
          <Link
            to="/"
            className="
            hover:text-blue-700 hover:font-semibold
            capitalize
            inline-block
            text-xl
            text-blue-700
            relative
            cursor-pointer
            transition-all
            duration-400
            before:content-['']
            before:absolute
            before:-bottom-2
            before:left-0
            before:w-0
            before:h-1.5
            before:rounded-full
            before:opacity-0
            before:transition-all
            before:duration-300
            before:bg-gradient-to-r
            before:from-blue-300
            before:via-blue-400
            before:to-blue-600
            hover:before:w-full
            hover:before:opacity-100
    "
          >
            Home
          </Link>
          <Link
            to="/questions"
            className="
            hover:text-blue-700 hover:font-semibold
            capitalize
            inline-block
            text-xl
            text-blue-700
            relative
            cursor-pointer
            transition-all
            duration-400
            before:content-['']
            before:absolute
            before:-bottom-2
            before:left-0
            before:w-0
            before:h-1.5
            before:rounded-full
            before:opacity-0
            before:transition-all
            before:duration-300
            before:bg-gradient-to-r
            before:from-blue-300
            before:via-blue-400
            before:to-blue-600
            hover:before:w-full
            hover:before:opacity-100
    "
          >
            Questions
          </Link>
          <Link
            to="/company/"
            className="
            hover:text-blue-700 hover:font-semibold
            capitalize
            inline-block
            text-xl
            text-blue-700
            relative
            cursor-pointer
            transition-all
            duration-400
            before:content-['']
            before:absolute
            before:-bottom-2
            before:left-0
            before:w-0
            before:h-1.5
            before:rounded-full
            before:opacity-0
            before:transition-all
            before:duration-300
            before:bg-gradient-to-r
            before:from-blue-300
            before:via-blue-400
            before:to-blue-600
            hover:before:w-full
            hover:before:opacity-100
    "
          >
            Intern Supporter 
          </Link>
          <Link
            to="/quizlist"
            className="
            hover:text-blue-700 hover:font-semibold
            capitalize
            inline-block
            text-xl
            text-blue-700
            relative
            cursor-pointer
            transition-all
            duration-400
            before:content-['']
            before:absolute
            before:-bottom-2
            before:left-0
            before:w-0
            before:h-1.5
            before:rounded-full
            before:opacity-0
            before:transition-all
            before:duration-300
            before:bg-gradient-to-r
            before:from-blue-300
            before:via-blue-400
            before:to-blue-600
            hover:before:w-full
            hover:before:opacity-100
    "
          >
            Quiz
          </Link>
          <Link
            to="/chat"
            className="
            hover:text-blue-700 hover:font-semibold
            capitalize
            inline-block
            text-xl
            text-blue-700
            relative
            cursor-pointer
            transition-all
            duration-400
            before:content-['']
            before:absolute
            before:-bottom-2
            before:left-0
            before:w-0
            before:h-1.5
            before:rounded-full
            before:opacity-0
            before:transition-all
            before:duration-300
            before:bg-gradient-to-r
            before:from-blue-300
            before:via-blue-400
            before:to-blue-600
            hover:before:w-full
            hover:before:opacity-100
    "
          >
            AI Bot
          </Link>

        </nav>
      </div>
    </header>
  );
}

export default Header;
