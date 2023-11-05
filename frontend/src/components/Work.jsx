import React from "react";
import "./homepage.css"
// import PickMeals from ".../public/images/undraw_farm_girl_dnpe.png";
// import ChooseMeals from "./assets/main.jpeg";
// import DeliveryMeals from "./assets/main.jpeg";

const Work = () => {
  const workInfoData = [
    {

      image: "/public/images/undraw_farm_girl_dnpe.png.jpeg",
      title: "Proper Menstrual Product Usage",
      text: "It's important to choose products that provide adequate absorption for your flow and change them regularly to prevent leaks and discomfort.",
    },
  
    {
      image: "/public/images/undraw_Meditation_re_gll0.png.jpeg",

      title: "Hygienic Handling and Disposal",
      text: "Menstrual products should be handled and disposed of hygienically to avoid contamination and the spread of infections. Hands should be washed before and after changing products.",
    },
    {

      image: "/public/images/undraw_Personal_website_re_c8dv.png.jpeg",

      

      title: "Maintaining Personal Cleanliness",
      text: "Keeping the genital area clean during menstruation is crucial. Regularly washing the vulva with mild, unscented soap and water helps prevent odor and infections",
    },
  ];
  return (
    <div className="work-section-wrapper">
      <div style={{display:"flex",alignItems:"center",flexDirection:"row",justifyContent:"center"}} className="work-section-top">
        <div style={{textAlign:"start"}}>
        <p className="primary-subheading">Must know</p>
        <h1 className="primary-heading">Is Private Hygine even Essential ?</h1></div>
        <div>
        <p  style={{textAlign:"start"}} className="primary-text">
        Personal hygiene is a critical aspect of maintaining overall health and well-being. It involves daily practices and habits aimed at keeping the body clean and free from harmful germs and bacteria. Proper hygiene prevents the spread of infections and diseases, while also promoting healthy skin, oral health, and mental well-being. Regular practices like handwashing, bathing, and oral care not only boost physical health but also contribute to higher self-esteem and improved quality of life.
        </p></div>
      </div>
      <div  className="work-section-bottom">
        {workInfoData.map((data) => (
          <div style={{background:"#f7e5e6"}} className="work-section-info" key={data.title}>
            <div className="info-boxes-img-container">
              <img src={data.image} alt="" />
            </div>
            <h2 style={{textAlign:"start" ,color:"black"}}>{data.title}</h2>
            <p style={{textAlign:"start",fontWeight:"400"}}>{data.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;