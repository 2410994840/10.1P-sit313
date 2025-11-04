import React from "react";
import { Icon } from "semantic-ui-react";
import "./6.css";   
function Footer() {
  return (
    <div className="footer">
      <div className="footer-sections">
        <div className="footer-column">
          <h3>Explore</h3>
          <p>Home</p>
          <p>Questions</p>
          <p>Articles</p>
          <p>Tutorials</p>
        </div>
        <div className="footer-column">
          <h3>Support</h3>
          <p>FAQs</p>
          <p>Help</p>
          <p>Contact Us</p>
        </div>
        <div className="footer-column">
          <h3>Stay connected</h3>
          <div className="social-icons">
            <Icon name="facebook f" link size="big" />
            <Icon name="twitter" link  size="big"/>
            <Icon name="instagram" link size="big"/>
          </div>
        </div>
      </div>
      <div className="footer-center">DEV@Deakin 2022</div>
      <div className="footer-links">
        <p>Privacy Policy</p>
        <p>Terms</p>
        <p>Code of Conduct</p>
      </div>
    </div>
  );
}
export default Footer;