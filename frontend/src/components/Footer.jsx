import React from "react";
import Logo from "./assets/logo.png";
// import { BsTwitter } from "react-icons/bs";
// import { SiLinkedin } from "react-icons/si";
// import { BsYoutube } from "react-icons/bs";
// import { FaFacebookF } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div style={{color:"#933B73"}} className="footer-wrapper">
      <div className="footer-section-one">
        <div className="footer-logo-container">
          <img style={{width:"600px",borderRadius:"5px"}} src={Logo} alt="" />
        </div>
        {/* <div className="footer-icons">
          <BsTwitter />
          <SiLinkedin />
          <BsYoutube />
          <FaFacebookF />
        </div> */}
      </div>
      <div style={{color:"#933B73"}} className="footer-section-two">
        <div style={{color:"#933B73"}} className="footer-section-columns">
          <span style={{color:"#933B73"}}>Quality Menstrual Product</span>
          <span style={{color:"#933B73"}}>Help and Support</span>
          <span style={{color:"#933B73"}}>Share Awareness</span>
          <span style={{color:"#933B73"}}>Awareness Initiatives</span>
          <span style={{color:"#933B73"}}>Support</span>
          <span style={{color:"#933B73"}}>Supportive Work Environments</span>
        </div>
        <div className="footer-section-columns">
          <span style={{color:"#933B73"}}>244-5333-7783</span>
          <span style={{color:"#933B73"}}>hello@menstuease.com</span>
          <span style={{color:"#933B73"}}>press@support.com</span>
          <span style={{color:"#933B73"}}>contact@menstru.com</span>
        </div>
        <div  style={{color:"#EC628B",marginLeft:"30px"}} className="footer-section-columns">
          <span style={{color:"#EC628B"}}>By</span>
          <span style={{color:"#EC628B"}}><Link style={{color:"#EC628B",textDecoration:"underline"}} to="https://github.com/MAMTA137/">Mamta Gupta</Link></span>
          <span style={{color:"#EC628B"}}><Link style={{color:"#EC628B",textDecoration:"underline"}} to="https://github.com/Archiesachin/">Archie shah</Link></span>
          <span style={{color:"#EC628B"}}><Link style={{color:"#EC628B",textDecoration:"underline"}} to="https://github.com/shagun6093/">Shagun Gupta</Link></span>
        </div>
        <div style={{marginLeft:"-30px"}} className="footer-section-columns">
          <span style={{color:"#933B73"}}>Terms & Conditions</span>
          <span style={{color:"#933B73"}}>Privacy Policy</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;