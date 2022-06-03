import React from "react";
import avatar from "../img/Avatar.png";
import avatar1 from "../img/Avatar2.png";
import avatar2 from "../img/Avatar3.png";

const Ceo = () => {
  return (
    <section className="ceo">
      <div className="container">
        <div className="ceo_tittle">
          <h1>Why you'll love it</h1>
        </div>
        <div className="ceo_boxs">
          <div className="ceo_box">
            <div className="ceo_flex">
              <div className="ceo_img">
                <img src={avatar} alt="" />
              </div>
              <div className="ceo_text">
                <h4>Sean Farmer</h4>
                <p>CEO</p>
              </div>
            </div>

            <div className="ceo_subtext">
              Sit amet, consectetur adipisicing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliquat enim ad minim veniam
              lorem ipsum dolor.
            </div>
          </div>
          <div className="ceo_box">
            <div className="ceo_flex">
              <div className="ceo_img">
                <img src={avatar1} alt="" />
              </div>
              <div className="ceo_text">
                <h4>Sean Farmer</h4>
                <p>CEO</p>
              </div>
            </div>

            <div className="ceo_subtext">
              Sit amet, consectetur adipisicing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliquat enim ad minim veniam
              lorem ipsum dolor.
            </div>
          </div>
          <div className="ceo_box">
            <div className="ceo_flex">
              <div className="ceo_img">
                <img src={avatar2} alt="" />
              </div>
              <div className="ceo_text">
                <h4>Sean Farmer</h4>
                <p>CEO</p>
              </div>
            </div>
            <div className="ceo_subtext">
              Sit amet, consectetur adipisicing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliquat enim ad minim veniam
              lorem ipsum dolor.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Ceo;
