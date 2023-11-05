import React from "react";
// import BannerBackground from "./assets/Blob.png";
// import BannerImage from "./assets/tour-3.jpeg";
// import Navbar from "./Navbar";
import { FiArrowRight } from "react-icons/fi";
import About from "./about";
import Work from "./Work";
import Contact from "./contact";
import { Link } from "react-router-dom";
// import Testimonial from "./Testimonial";
import Footer from "./Footer";

import "./homepage.css"

const Home = () => {
  return (
    <div className="home-container" >
      {/* <Navbar /> */}
      <div style={{marginLeft:"40px"}} className="home-banner-container">
        {/* <div className="home-bannerImage-container">
          <img style={{borderRadius:"5px"}} src={BannerBackground} alt="" />
        </div> */}
        <div className="home-text-section">
          <h1 className="primary-heading">
          Your Personal Menstrual Hygiene Companion

          </h1>
          <p className="primary-text">
          Maintain your menstrual hygiene with our app. We offer valuable insights and tools to ensure you stay clean, comfortable, and confident during your period.
          </p>
          <button className="secondary-button"><Link style={{color:"white" ,textDecoration:"none"}} to="/consultation">See More </Link>
            <FiArrowRight />
          </button>
        </div>
        <div className="home-image-section">
<<<<<<< HEAD
          <img  style={{borderRadius:"5px" ,marginLeft:"-200px",width:"800px", height:"600px"}} src="/public/images/undraw_happy_women_day_fbjt.png.jpeg" alt="" />
=======
          <img  style={{borderRadius:"5px" ,marginLeft:"-200px",width:"800px", height:"600px"}} src="public\images\undraw_happy_women_day_fbjt.png" alt="" />
>>>>>>> 6edb6dc807f9f7bf3c35853d3536c5d3a897305f
        </div>
      </div>
        <Work/>
        <About/>
        {/* <Testimonial/> */}
        <Contact/>
        <Footer/>
    </div>
  );
};

export default Home;