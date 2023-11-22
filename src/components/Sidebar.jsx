import React from 'react';
import {
    FaTh,
    FaBars,
    FaUsers,
    FaBus,
    FaClock,
    FaBriefcase,
    FaUserTie,
    FaBell,
    FaUser,
    FaSignOutAlt,
    FaInfoCircle, 
    FaQuestionCircle,
} from "react-icons/fa";
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import profileImage from './assets/profile-image.png';

const Sidebar = ({ children }) => {
    const isOpen = true; // Always open

    const menuItem = [
        {
            path: "/dashboard",
            name: "Dashboard",
            icon: <FaTh />
        },
        {
            path: "/People",
            name: "Manage People",
            icon: <FaUsers />
        },
        {
            path: "/Bus",
            name: "Manage Bus",
            icon: <FaBus />
        },
        {
            path: "/BusSchedule",
            name: "Bus Schedule",
            icon: <FaClock />
        },
        {
            path: "/Job",
            name: "Manage Job",
            icon: <FaBriefcase />
        },
        {
            path: "/Applicant",
            name: "Applicant",
            icon: <FaUserTie />
        },
        {
            path: "/Notification",
            name: "Notification",
            icon: <FaBell />
        },
        {
            path: "/Profile",
            name: "Profile",
            icon: <FaUser />
        },
        {
            path: "/AboutUs",
            name: "About Us",
            icon: <FaInfoCircle />
        },
        {
            path: "/HelpCenter",
            name: "Help Center",
            icon: <FaQuestionCircle />
        },
    ];

    return (
        <div className="container">
            <div style={{ width: isOpen ? "200px" : "50px" }} className="sidebar">
                <div className="top_section">
                    <div className="profile-section">
                        {isOpen && (
                            <>
                                <div style={{ width: isOpen ? "100px" : "0px" }} className="profile-image">
                                    <img src={profileImage} alt="Profile" />
                                </div>
                            </>
                        )}
                    </div>
                    <div className="logo-bars">
                        <h1 style={{ display: isOpen ? "block" : "none" }} className="logo">
                            BusYan
                        </h1>
                        <div style={{ marginLeft: isOpen ? "20px" : "0px" }} className="bars">
                            <FaBars onClick={() => {}} />
                        </div>
                    </div>
                </div>
                <div style={{ width: isOpen ? "150px" : "50px" }} className="profile-name">Monkey D. Luffy</div>
                <div className="menu-items">
                    {menuItem.map((item, index) => (
                        <NavLink to={item.path} key={index} className="link" activeClassName="active">
                            <div className="icon">{item.icon}</div>
                            <div style={{ display: isOpen ? "block" : "none" }} className="link_text">
                                {item.name}
                            </div>
                        </NavLink>
                    ))}
                    <div style={{ marginTop: "13px" }} /> {/* Add margin after Profile */}
                    {/* Log Out Button */}
                    <NavLink to="/LogOut" className="link" activeClassName="active">
                        <div className="menu-item">
                            <div className="icon">
                                <FaSignOutAlt />
                            </div>
                            <div style={{ display: isOpen ? "flex" : "none" }} className="logout_link_text">
                                <span className="logout-text">Log Out</span>
                            </div>
                        </div>
                    </NavLink>
                </div>
            </div>
            <main>{children}</main>
        </div>
    );
};
Sidebar.propTypes = {
    children: PropTypes.node,
    userName: PropTypes.string,
};

export default Sidebar;
