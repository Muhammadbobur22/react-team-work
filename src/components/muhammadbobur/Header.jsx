import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import { FiSearch, FiSettings } from "react-icons/fi";
import { IoNotificationsOutline } from "react-icons/io5";
import "./Header.css";

const Header = () => {
  return (
    <div className="container">
    <div className="header">

      <div className="header-left">
        <IoIosArrowBack className="back-icon" />

        <div>
          <h2 className="title">Student Details</h2>
          <p className="breadcrumb">
            Dashboard <span>›</span> Students <span>›</span> Student Details
          </p>
        </div>
      </div>

      <div className="header-right">
        <div className="search-box">
          <FiSearch className="search-icon" />
          <input type="text" placeholder="Search anything" />
        </div>

        <FiSettings className="icon" />
        <IoNotificationsOutline className="icon" />

        <div className="profile">
          <div className="avatar">O</div>
          <div>
            <h4>Oscar Hansen</h4>
            <p>Admin</p>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Header;