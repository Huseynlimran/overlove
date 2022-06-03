import React from "react";
import design1 from "../img/design1.png";
import design2 from "../img/design2.png";
import design3 from "../img/design3.png";
import design4 from "../img/design4.png";
import design5 from "../img/design5.png";
import design6 from "../img/design6.png";
import arrowLeft from "../img/arrowLeft.png";
import arrowRight from "../img/ArrowRight.png";

const Design = () => {
  return (
    <div className="design">
      <div className="container">
        <div className="design_tittle">
          <h1>Speed up your design process</h1>
        </div>
        <div className="design_items">
          <div className="design_item">
            <img src={design1} alt="" />
            <div className="design_text">
              <h3>Auto Layout </h3>
              <p>
                Sed do eiusmod tempor incididunt ut consectetur adipisicing
                elit,do eiusmod tempor incididunt ut labore et dolore
              </p>
            </div>
          </div>
          <div className="design_item">
            <img src={design2} alt="" />
            <div className="design_text">
              <h3 style={{ color: "#FB6363" }}>Variants</h3>
              <p>
                Sed do eiusmod tempor incididunt ut consectetur adipisicing
                elit,do eiusmod tempor incididunt ut labore et dolore
              </p>
            </div>
          </div>
          <div className="design_item">
            <img src={design3} alt="" />
            <div className="design_text">
              <h3 style={{ color: "#A66DF5" }}>Components</h3>
              <p>
                Sed do eiusmod tempor incididunt ut consectetur adipisicing
                elit,do eiusmod tempor incididunt ut labore et dolore
              </p>
            </div>
          </div>
          <div className="design_item">
            <img src={design4} alt="" />
            <div className="design_text">
              <h3 style={{ color: "#6DD6B0" }}>Atomic Design</h3>
              <p>
                Sed do eiusmod tempor incididunt ut consectetur adipisicing
                elit,do eiusmod tempor incididunt ut labore et dolore
              </p>
            </div>
          </div>
          <div className="design_item">
            <img src={design5} alt="" />
            <div className="design_text">
              <h3 style={{ color: "#708CF0" }}>Animated</h3>
              <p>
                Sed do eiusmod tempor incididunt ut consectetur adipisicing
                elit,do eiusmod tempor incididunt ut labore et dolore
              </p>
            </div>
          </div>
          <div className="design_item">
            <img src={design6} alt="" />
            <div className="design_text">
              <h3 style={{ color: "#A02E8E" }}>Responsive</h3>
              <p>
                Sed do eiusmod tempor incididunt ut consectetur adipisicing
                elit,do eiusmod tempor incididunt ut labore et dolore
              </p>
            </div>
          </div>
        </div>

        <div className="design_product">
          <div className="product_box">
            <div className="product_title">Enjoy this product</div>
            <p>
              This project required a huge amount of hours but sit amet,
              consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliquat enim ad minim.
            </p>
            <div className="product_signup">
              <a href="!" className="singBTN">
                Sign Up
                <svg
                  width="14"
                  height="20"
                  viewBox="0 0 14 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13.09 8.22L6.09001 19.64C5.95265 19.8619 5.71101 19.9979 5.45001 20H5.25001C5.10994 19.9997 4.97614 19.9419 4.88001 19.84C4.78437 19.7377 4.73706 19.5994 4.75001 19.46L5.31001 13H1.74001C1.47142 12.9971 1.2243 12.8526 1.09001 12.62L0.900011 12.29C0.80457 12.1334 0.80457 11.9366 0.900011 11.78L7.90001 0.360002C8.0411 0.131972 8.29191 -0.00483306 8.56001 1.96758e-06H8.76001C8.90008 0.000261669 9.03388 0.058121 9.13001 0.160002C9.22565 0.262276 9.27296 0.400579 9.26001 0.540002L8.69001 7H12.26C12.5286 7.0029 12.7757 7.14737 12.91 7.38L13.1 7.71C13.1924 7.86847 13.1885 8.06528 13.09 8.22Z"
                    fill="#2C2C2C"
                  />
                </svg>
              </a>
              <div className="arrow">
                <a href="!">
                  <img src={arrowLeft} alt="" />
                </a>
                <a href="!">
                  <img src={arrowRight} alt="" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Design;
