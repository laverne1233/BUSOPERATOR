import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import GoogleMapReact from 'google-map-react';
import busImage from './assets/manageBusImage.png';

const Bus = () => {
  const [showAccountVerification, setShowAccountVerification] = useState(true);
  const [showManageStaff, setShowManageStaff] = useState(false);

  const toggleAccountVerification = () => {
    setShowAccountVerification(true);
    setShowManageStaff(false);
  };

  const toggleManageStaff = () => {
    setShowAccountVerification(false);
    setShowManageStaff(true);
  };

  const BusMap = () => {
    // Set the initial location to Cebu City, Philippines
    const defaultCenter = {
      lat: 10.3157, // Latitude of Cebu City
      lng: 123.8854, // Longitude of Cebu City
    };

    return (
      <div style={{ height: '63vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyA4wFjIUSKy2YpdMOQuu9X5STbMkncFNqo' }}
          defaultCenter={defaultCenter}
          defaultZoom={15} // Adjust the zoom level as needed
        >
          {/* You can add Markers for bus locations here */}
        </GoogleMapReact>
      </div>
    );
  };

  return (
    <div>
      <p className="bus-heading">Manage Bus</p>
      <p className="bus-heading2">Add bus and their routes</p>

      <div className="search-bar">
        <input type="text" placeholder="Search" />
        <div className="search-icon">
          <FaSearch />
        </div>
      </div>
      <div className="button-container">
        <button
          className={showAccountVerification ? 'active-button' : 'inactive-button'}
          onClick={toggleAccountVerification}
        >
          Bus
        </button>
        <button
          className={showManageStaff ? 'active-button' : 'inactive-button'}
          onClick={toggleManageStaff}
        >
          Bus Tracking
        </button>
      </div>
      <div className="image-container">
        {showAccountVerification && (
          <div className="image-button-container">
            <button className="add-new-bus-button">Add new bus +</button>
            <img src={busImage} alt="bus-manage" className="image" />
          </div>
        )}
        {showManageStaff && <BusMap />}
      </div>
    </div>
  );
};

export default Bus;

