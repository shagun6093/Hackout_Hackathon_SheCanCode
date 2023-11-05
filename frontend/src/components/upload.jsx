import React, { useEffect, useRef } from 'react';
import "./upload.css";

function ImageReader() {
  const inputRef = useRef(null);

  useEffect(() => {
    const showResult = () => {
      const inputEl = inputRef.current;
      inputEl.addEventListener('change', () => {
        const file = inputEl.files[0];
        const fr = new FileReader();
        fr.readAsDataURL(file);
        fr.addEventListener('load', () => {
          const url = fr.result;
          const img = new Image();
          img.src = url;
          document.getElementById('output').appendChild(img);
        });
      });
    };

    showResult();
  }, []);

  return (
    <div>
      <p style={{color:"#933B73",fontFamily:"arial",fontWeight:"700",fontSize:"30px"}}>
         Save your report for future, Report hand-in-hand with you !!!
      </p>
      <input style={{
    backgroundColor: "#F7B8C5",
    borderRadius: "30px",
    width: "300px",
    height: "70px",
    border: "solid 1px pink",
    padding: "20px",
    marginBottom: "20px",
}} type="file" ref={inputRef} />
      <div style={{borderRadius:"5px",border:"pink"}} id="output"></div>
    </div>
  );
}

export default ImageReader;