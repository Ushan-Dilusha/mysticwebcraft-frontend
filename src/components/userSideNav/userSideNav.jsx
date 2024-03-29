import React from 'react';
import { Link } from 'react-router-dom';

function SideNav({ selectedNavItem, onNavItemClick }) {
    return (
        <nav className="w-64 px-6 py-8 bg-gray-800">
            <div>
                {/* Your logo or brand name */}
                <h2 className="text-2xl font-semibold text-white">My Dashboard</h2>
            </div>
            <div className="mt-8">
                {/* Navigation items */}
                <ul>
                    <li className={selectedNavItem === 'dashboard' ? 'bg-gray-900 text-white' : 'text-white hover:bg-gray-700 hover:text-white'} onClick={() => onNavItemClick('dashboard')}>
                        <Link to="/dashboard">Dashboard</Link>
                    </li>
                    <li className={selectedNavItem === 'profile' ? 'bg-gray-900 text-white' : 'text-white hover:bg-gray-700 hover:text-white'} onClick={() => onNavItemClick('profile')}>
                        <Link to="/profile">Profile</Link>
                    </li>
                    {/* Add navigation link for communities */}
                    <li className={selectedNavItem === 'community' ? 'bg-gray-900 text-white' : 'text-white hover:bg-gray-700 hover:text-white'} onClick={() => onNavItemClick('community')}>
                        <Link to="/community-management">Community</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default SideNav;
