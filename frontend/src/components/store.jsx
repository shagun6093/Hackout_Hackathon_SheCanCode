import React, { useState } from 'react';
import Productdetail from "./productdetail";
import { AiOutlineHeart } from 'react-icons/ai';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { BsEye } from 'react-icons/bs';
import './store.css';

export default function Store() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  return (
    <>
      <div className="products">
        <div className="nav">
          <ul>
            <li onClick={() => handleCategoryClick(null)}>All</li>
            <li onClick={() => handleCategoryClick("Pads")}>Pads</li>
            <li onClick={() => handleCategoryClick("Tampoons")}>Tampoons</li>
            <li onClick={() => handleCategoryClick("Menstrual Cups")}>Menstrual Cups</li>
            <li onClick={() => handleCategoryClick("Liners")}>Liners</li>
          </ul>
          <div className="cart">
            <ul>
              <li>
                <AiOutlineShoppingCart />
              </li>
            </ul>
          </div>
        </div>
        <p>Home . Products</p>
        <div className="product-container">
          <div className="productbox">
            <div className="content">
              {Productdetail.filter(product => !selectedCategory || product.Cat === selectedCategory).map((curElm) => {
                return (
                  <div className="box" key={curElm.id}>
                    <div className="img_box">
                      <img src={curElm.Img} alt={curElm.Title} />
                      <div className="icon">
                        <li><AiOutlineShoppingCart /></li>
                        <li><BsEye /></li>
                        <li><AiOutlineHeart/></li>
                      </div>
                    </div>
                    <div className="detail">
                      <p>{curElm.Cat}</p>
                      <h3>{curElm.Title}</h3>
                      <h4>{curElm.Price}</h4>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
