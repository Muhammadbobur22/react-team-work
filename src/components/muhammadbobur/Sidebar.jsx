import { Link, useLocation } from "react-router-dom"
import { useState } from "react"

import logo from "../../assets/logo.png"
import dashboard from "../../assets/dashboard.png"
import inbox from "../../assets/inbox.png"
import atterdance from "../../assets/atterdance.png"
import board from "../../assets/board.png"
import calendar from "../../assets/calendar.png"
import finance from "../../assets/finance.png"
import students from "../../assets/students.png"

import "./Sidebar.css"

const Sidebar = () => {
  const [open, setOpen] = useState(true)
  const location = useLocation()

  const isActive = (path) => location.pathname === path

  return (
   <div className="container">
     <div className= { open ? "sidebar open" : "sidebar"}>

      <div className="top">
        {open && <Link to="/  "><img src={logo} alt="logo" className="logo" /></Link>}
        <button className="toggle" onClick={() => setOpen(!open)}>
          ☰
        </button>
      </div>

      <nav className="menu">

        <Link to="/" className={isActive("/") ? "menuItem active" : "menuItem"}>
          <img src={dashboard} alt="" />
          {open && <span>Dashboardd</span>}
        </Link>
    <Link to="/inbox" className={isActive("/inbox") ? "menuItem active" : "menuItem"}>
          <img src={inbox} alt="" />
          {open && <span>Inboxx</span>}
        </Link>

        <Link to="/calendar" className={isActive("/calendar") ? "menuItem active" : "menuItem"}>
          <img src={calendar} alt="" />
    {open && <span>Calendar</span>}
        </Link>

        <Link to="/teachers" className={isActive("/teachers") ? "menuItem active" : "menuItem"}>
    <img src={students} alt="" />
          {open && <span>Teacherr</span>}
        </Link>

        <Link to="/students" className={isActive("/students") ? "menuItem active" : "menuItem"}>
          <img src={students} alt="" />
          {open && <span>Students</span>}
        </Link>

        <Link to="/attendance" className={isActive("/attendance") ? "menuItem active" : "menuItem"}>
          <img src={atterdance} alt="" />
          {open && <span>Attendance</span>}
        </Link>

        <Link to="/finance" className={isActive("/finance") ? "menuItem active" : "menuItem"}>
          <img src={finance} alt="" />
          {open && <span>Finance</span>}
        </Link>

        <Link to="/notice" className={isActive("/notice") ? "menuItem active" : "menuItem"}>
          <img src={board} alt="" />
          {open && <span>Notice Board</span>}
        </Link>

      </nav>
    </div>
   </div>
  )
}

export default Sidebar