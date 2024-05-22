import React from "react";
import "./Footer.css"
const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="row">
          <div className="col-3 about">
            <h4>ABOUT US</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
              facere laudantium magnam voluptatum autem. Amet aliquid nesciunt
              veritatis aliquam.
            </p>
          </div>
          <div className="col-3 quicks">
            <h4>QUICK LINKS</h4>
            <ul>
              <li>About us</li>
              <li>Services</li>
              <li>Testimonials</li>
              <li>Contact Us</li>
            </ul>
          </div>
          <div className="col-3 link">
            <h4>FOLLOW US</h4>
            <div className="footer_link">
              <i class="fa-brands fa-facebook-f"></i>
              <i class="fa-brands fa-twitter"></i>
              <i class="fa-brands fa-linkedin"></i>
              <i class="fa-brands fa-instagram"></i>
            </div>
          </div>
          <div className="col-3 image">
            <h4>FEATURED PRODUCT</h4>
            <img
              src="https://preview.colorlib.com/theme/selling/images/product_1_bg.jpg.webp"
              alt=""
            />
            <h3>Leather Brown Shoe</h3>
            <p>$60.00</p>
            <button>ADD TO CART</button>
          </div>
        </div>
        <div className="row">
          <div className="col-12 footer_end">
            <p>Copyright ©2024 All rights reserved | This template is made with  by Colorlib</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
