import React from "react";
// import AboutBackground from "./assets/about.jpeg";
import AboutBackgroundImage from "./assets/about.jpeg";
import { BsFillPlayCircleFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div style={{margin:"20px"}} className="about-section-container">
      {/* <div className="about-background-image-container">
        <img src={AboutBackground} alt="" />
      </div> */}
      <div style={{gap:"20px",display:"flex",alignItems:"center",justifyContent:'center'}} className="about-section-image-container">
<<<<<<< HEAD
        <img style={{width:"600px",height:"600px",borderRadius:"5px"}}src="\public\images\undraw_Personal_website_re_c8dv.png.jpeg" alt="" />
=======
        <img style={{width:"600px",height:"600px",borderRadius:"5px"}}src="\public\images\undraw_Personal_website_re_c8dv.png" alt="" />
>>>>>>> 6edb6dc807f9f7bf3c35853d3536c5d3a897305f
      </div>
      <div style={{width:"100%"}} className="about-section-text-container">
        <p className="primary-subheading">About</p>
        <h5 style={{fontSize:"30px"}} className="primary-heading">
        MenstruEase: Empowering Menstrual Well-being, Hygiene, and Awareness
        </h5>
        <p className="primary-text">
        "MenstruEase" is a dedicated platform designed to address the multifaceted aspects of menstrual hygiene, offering a comprehensive solution for individuals who menstruate.
        </p>
        <p className="primary-text">
        Additionally, MenstruEase is more than just a digital platform; it's a community of support. Users can connect, share experiences, and find solidarity with others who understand the unique challenges of menstruation. 
        </p>
        <div className="about-buttons-container">
          <button className="secondary-button">Learn More</button>
          <button className="watch-video-button">
<<<<<<< HEAD
            <BsFillPlayCircleFill /><Link style={{textDecoration:"none"}} to="https://youtu.be/UBhiwkM8MIY?si=tW1EL_FYA8z9NC3S">Watch Video</Link>
=======
            <BsFillPlayCircleFill /><Link style={{textDecoration:"none"}} to="https://youtu.be/UBhiwkM8MIY?si=tW1EL_FYA8z9NC3S">Watch Video</Link> 
>>>>>>> 6edb6dc807f9f7bf3c35853d3536c5d3a897305f
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;