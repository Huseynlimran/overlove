import React from "react";
import vector1 from "../img/Work1.png";
import vector2 from "../img/work2.png";
import vector3 from "../img/work3.png";

const Works = () => {
  return (
    <section className="work">
      <div className="container">
        <div className="work_tittle">
          <h1>How it works</h1>
        </div>
        <div className="work_items">
          <div className="work_item">
            <img src={vector1} alt="" />
            <div className="item_title">Read it</div>
            <div className="item_subtext">
              Ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna.
            </div>
          </div>
          <div className="work_item">
            <img src={vector2} alt="" />
            <div className="item_title">Apply</div>
            <div className="item_subtext">
              Ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna.
            </div>
          </div>
          <div className="work_item">
            <img src={vector3} alt="" />
            <div className="item_title">Multiply</div>
            <div className="item_subtext">
              Ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Works;
