import React from "react";
import { FaUserGraduate } from "react-icons/fa";
import { FaChalkboardTeacher } from "react-icons/fa";
import { FaUserFriends } from "react-icons/fa";
import { FaTrophy } from "react-icons/fa";
import ppp from "../../assets/ppp.png"
import ear from "../../assets/ear.png"
import "./Dashboard.css";

const Dashboard = () => {
  return (
    <div className="dashboard">
     <div className="cards">
        
      <div className="card">
        <div>
          <p className="card-title">Enrolled Students</p>
          <h2 className="card-number">1,245</h2>
        </div>
        <div className="icon blue">
          <FaUserGraduate />
        </div>
      </div>

      <div className="card">
        <div>
          <p className="card-title">Active Teachers</p>
          <h2 className="card-number">86</h2>
        </div>
        <div className="icon pink">
          <FaChalkboardTeacher />
        </div>
      </div>

      <div className="card">
        <div>
          <p className="card-title">Support Staff</p>
          <h2 className="card-number">34</h2>
        </div>
        <div className="icon dark">
          <FaUserFriends />
        </div>
      </div>

      <div className="card">
        <div>
          <p className="card-title">Total Awards</p>
          <h2 className="card-number">152</h2>
        </div>
        <div className="icon purple">
          <FaTrophy />
        </div>
      </div>

     </div>

     <div className="ss" style={{
        display: "flex"
        
     }}>
        <img src={ppp} alt="" />
        <img src={ear} alt="" />
     </div>
    </div>
    
  );
};

export default Dashboard;