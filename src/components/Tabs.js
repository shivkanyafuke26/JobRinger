import React from 'react';
import { Link } from 'react-router-dom';
import './Tabs.css';

const Tabs = () => {
  return (
    <div className="tabs-container">
        <div className="logo">
        <img src="logo.png" alt="Logo" />
      </div>
      <div className="tabs-right">
        <Link to="/Jobs" className="tab">Jobs</Link>
        <Link to="/ActiveEmployers" className="tab">Active Employers</Link>
        <Link to="/JobBlogs" className="tab">Job Blogs</Link>
        <Link to="/Pricing" className="tab">Pricing</Link>
        <Link to="/JobseekerLogin" className="tab">Jobseeker Login</Link>
        <Link to="/Employer" className="tab">Employer Login</Link>
      </div>
    </div>
  );
};

export default Tabs;
