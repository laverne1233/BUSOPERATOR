import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import accountVerificationImage from './assets/accountVerificationImage.png';
import managePeopleImage from './assets/managePeopleImage.png';
import staffStatus from './assets/staffStatus.png';

const People = () => {
    const [showStaffStatus, setShowStaffStatus] = useState(true); // Set to true
    const [showAccountVerification, setShowAccountVerification] = useState(false); // Set to false
    const [showManageStaff, setShowManageStaff] = useState(false); // Set to false

    const toggleStaffStatus = () => {
        setShowStaffStatus(true);
        setShowAccountVerification(false);
        setShowManageStaff(false);
    };

    const toggleAccountVerification = () => {
        setShowStaffStatus(false);
        setShowAccountVerification(true);
        setShowManageStaff(false);
    };

    const toggleManageStaff = () => {
        setShowStaffStatus(false);
        setShowAccountVerification(false);
        setShowManageStaff(true);
    };

    return (
        <div>
            <p className="bus-heading">Manage People</p>
            <p className="bus-heading2">Verify bus driver&apos;s accounts and manage their data</p>

            <div className="search-bar">
                <input type="text" placeholder="Search" />
                <div className="search-icon">
                    <FaSearch />
                </div>
            </div>
            <div className="button-container">
                <button
                    className={showStaffStatus ? 'active-button' : 'inactive-button'}
                    onClick={toggleStaffStatus}
                >
                    Staff&apos;s Status
                </button>
                <button
                    className={showManageStaff ? 'active-button' : 'inactive-button'}
                    onClick={toggleManageStaff}
                >
                    Staff
                </button>
                <button
                    className={showAccountVerification ? 'active-button' : 'inactive-button'}
                    onClick={toggleAccountVerification}
                >
                    Account Verification
                </button>
            </div>
            <div className="image-container">
                {showStaffStatus && <img src={staffStatus} alt="Staff&apos;s Status" className="image" />}
                {showAccountVerification && (
                    <img src={accountVerificationImage} alt="Account Verification" className="image" />
                )}
                {showManageStaff && (
                    <div className="image-button-container">
                        <button className="add-new-bus-button">Add new staff +</button>
                        <img src={managePeopleImage} alt="Manage Staff" className="image" />
                    </div>
                )}
            </div>
        </div>
    );
};

export default People;
