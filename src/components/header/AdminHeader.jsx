import React from "react";
import { Link } from "react-router-dom";
import { Menu, Dropdown, Avatar } from "antd";
import { UserOutlined, SettingOutlined, LogoutOutlined, BellOutlined } from "@ant-design/icons";

function AdminHeader() {
  // Menu for user profile dropdown
  const profileMenu = (
    <Menu>
      <Menu.Item key="profile" icon={<UserOutlined />}>
        Profile
      </Menu.Item>
      <Menu.Item key="setting" icon={<SettingOutlined />}>
        Settings
      </Menu.Item>
      <Menu.Item key="logout" icon={<LogoutOutlined />}>
        Logout
      </Menu.Item>
    </Menu>
  );

  // Menu for notification dropdown
  const notificationMenu = (
    <Menu>
      <Menu.Item key="notification1">
        Notification 1
      </Menu.Item>
      <Menu.Item key="notification2">
        Notification 2
      </Menu.Item>
      <Menu.Item key="notification3">
        Notification 3
      </Menu.Item>
    </Menu>
  );

  return (
    <header className="flex items-center justify-between p-4 border-b-2">
      <div>
        <Link to="/admin" className="text-2xl font-semibold text-black ">
          MYSTIC<span className='text-blue-700'>WEB</span>CRAFT
        </Link>
      </div>
      <div className="flex items-center">
        <Dropdown overlay={notificationMenu} trigger={["click"]}>
          <BellOutlined className="text-xl cursor-pointer mr-4" />
        </Dropdown>
        <Dropdown overlay={profileMenu} trigger={["click"]}>
          <Avatar icon={<UserOutlined />} className="cursor-pointer" />
        </Dropdown>
      </div>
    </header>
  );
}

export default AdminHeader;
