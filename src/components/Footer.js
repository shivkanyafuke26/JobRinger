import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-section">
        <h3>Jobs in India</h3>
        <ul>
          <li>#Mumbai</li>
          <li>#Delhi</li>
          <li>#Ajmer</li>
          <li>#Pune</li>
          <li>#Hyderabad</li>
          <li>#Agra</li>
          <li>#Chennai</li>
          <li>#Kolkata</li>
          <li>#Indore</li>
          <li>#Gurugram</li>
          <li>#Jaipur</li>
          <li>#Ahmedabad</li>
        </ul>
      </div>

      <div className="footer-section">
        <h3>International Jobs</h3>
        <ul>
          <li>#Africa</li>
          <li>#USA</li>
          <li>#UK</li>
          <li>#Australia</li>
          <li>#Canada</li>
          <li>#Singapore</li>
          <li>#Dubai</li>
          <li>#Saudi Arabia</li>
          <li>#New Zealand</li>
        </ul>
      </div>

      <div className="footer-section">
        <h3>Jobs Posted</h3>
        <p>32,703</p>
        <h3>Jobs Filled</h3>
        <p>15,153</p>
        <h3>Employers</h3>
        <p>20,709</p>
        <h3>Active Users</h3>
        <p>1,305,077</p>
      </div>

      <div className="footer-section">
        <h3>Follow us on</h3>
        <ul className="social-icons">
          <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a></li>
          <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a></li>
          <li><a href="https://whatsapp.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-whatsapp"></i></a></li>
          <li><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in"></i></a></li>
          <li><a href="https://telegram.org" target="_blank" rel="noopener noreferrer"><i className="fab fa-telegram-plane"></i></a></li>
          <li><a href="https://youtube.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-youtube"></i></a></li>
          <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a></li>
        </ul>
      </div>

      <div className="footer-section">
        <h3>Links</h3>
        <ul>
          <li>Terms and Conditions</li>
          <li>Privacy Policy</li>
          <li>Refund / Cancellation Policy</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>FAQ</li>
          <li>Blogs</li>
        </ul>
      </div>
      <div className="footer-sectionn">
        <h3>Disclaimer</h3>
        <p>All Trademarks and Logos are the property of their respective owners, depicted here purely for representation purposes. Jobringer.com has taken all reasonable steps to ensure that information on this site is genuine. Job Applicants are advised to evaluate independently. Jobringer.com shall not have any responsibility in this regard. All Jobseeker services are strictly designed & meant only for job search assistance and to maximize the chances for the jobseekers to get their dream job. All Job Seeker Credentials and Employment Opportunities are subject to individual merit & evaluation. We do not guarantee any job to any jobseeker.</p>
        <div>
        <p>Recognized By</p>
        </div>
        <div className="logo">
        <img src="startuplogo.png" alt="Logo" />
        </div>
      </div>
    </div>
  );
}

export default Footer;
