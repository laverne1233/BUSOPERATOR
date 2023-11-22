import React from 'react';
import PropTypes from 'prop-types'; // Import PropTypes
import dashboardImage from './assets/dashboardImage.png';

const Dashboard = ({ isOpen }) => {
    const dashboardStyle = {
        width: isOpen ? "calc(100% - 200px)" : "calc(100% - 50px)",
        margin: "0", // Set margin to 0 on all sides
        height: "580px",
        transition: "width 0.5s",
    };

    return (
        <div className='dashboard-image'>
            <img src={dashboardImage} alt="Dashboard" style={dashboardStyle} />
        </div>
    );
};

// Add PropTypes validation
Dashboard.propTypes = {
    isOpen: PropTypes.bool.isRequired,
};

export default Dashboard;
