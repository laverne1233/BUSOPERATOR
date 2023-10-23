import React, { useState } from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa';


const Form = () => {
    const [showJobDescriptionForm, setShowJobDescriptionForm] = useState(true); // Set to true
    const [showAboutCompanyForm, setShowAboutCompanyForm] = useState(false); // Set to false

    const toggleJobDescriptionForm = () => {
        setShowJobDescriptionForm(true);
        setShowAboutCompanyForm(false);
    };

    const toggleAboutCompanyForm = () => {
        setShowJobDescriptionForm(false);
        setShowAboutCompanyForm(true);
    };

    return (
        <div>
            <div className="bus-heading-container">
                <p className="bus-heading">Manage Job</p>
                <p className="bus-heading2">Post your job openings</p>
            </div>

            <div className="form-container">
                <div className="form-left">
                    <form>
                        <div className="form-row">
                            <label htmlFor="title">Title:</label>
                            <input type="text" id="title" />
                        </div>
                        <div className="form-row">
                            <label htmlFor="company">Company:</label>
                            <input type="text" id="company" />
                        </div>
                        <div className="form-row">
                            <label htmlFor="company-address">
                                <FaMapMarkerAlt />
                                Company Address:
                            </label>
                            <input type="text" id="company-address" />
                        </div>
                        <div className="form-row">
                            <label htmlFor="salary">Salary:</label>
                            <input type="text" id="salary" />
                        </div>
                    </form>
                </div>
                <div className="form-right">
                    <div className="image-box">
                        <p>Insert image</p>
                    </div>
                </div>
            </div>
            <div className="job-button">
                        <button className={showJobDescriptionForm ? 'active-button' : 'inactive-button'} onClick={toggleJobDescriptionForm}>Job Description</button>
                        <button className={showAboutCompanyForm ? 'active-button' : 'inactive-button'} onClick={toggleAboutCompanyForm}>About the Company</button>
             </div>

            {showJobDescriptionForm && (
                <div className="job-form-container" style={{ marginTop: '30px' }}>
                    <div className="form-left">
                        <form>
                            <div className="form-row2">
                                <label htmlFor="job-highlights">Job Highlights:</label>
                                <input type="text" id="job-highlights" />
                            </div>
                            <div className="form-row2">
                                <label htmlFor="qualification">Qualification:</label>
                                <input type="text" id="qualification" />
                            </div>
                            <div className="form-row2">
                                <label htmlFor="how-to-apply">How to Apply:</label>
                                <input type="text" id="how-to-apply" />
                            </div>
                        </form>
                    </div>
                </div>
            )}

            {showAboutCompanyForm && (
                <div className="form-container">
                    <div className="form-left">
                        <form>
                            <div className="form-row2">
                                <label htmlFor="about-company">Add Information of Your Company:</label>
                                <input type="text" id="about-company" />
                            </div>
                        </form>
                    </div>
                </div>
            )}
            <div className="share-now-container">
                <button className="share-now-button">Share Now</button>
            </div>
        </div>
    );
};

export default Form;


