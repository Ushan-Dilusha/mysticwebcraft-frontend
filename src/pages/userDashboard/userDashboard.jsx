import React, { useState } from 'react';
import SideNav from '../../components/userSideNav/userSideNav';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';

function UserDashboard() {
  const [selectedNavItem, setSelectedNavItem] = useState('dashboard');

  const handleNavItemClick = (item) => {
    setSelectedNavItem(item);
  };

  return (
    <>
      <Header />
      <div className="flex h-screen">
        <SideNav selectedNavItem={selectedNavItem} onNavItemClick={handleNavItemClick} />
        <div className="flex-grow p-5">
          <h1 className="text-3xl font-bold">User Dashboard</h1>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default UserDashboard;
