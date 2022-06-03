import React from "react";

const Download = () => {
  return (
    <section className="download">
      <div className="box">
        <h1>Download the future</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliquat enim ad
          minim.
        </p>
        <div className="input">
          <input type="text" placeholder="Enter email..."/>
          <button>
            Sign Up
            <svg
              width="13"
              height="21"
              viewBox="0 0 13 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.59 8.65299L5.59 20.073C5.45263 20.2949 5.21099 20.4308 4.95 20.433H4.75C4.60992 20.4327 4.47612 20.3749 4.38 20.273C4.28436 20.1707 4.23704 20.0324 4.25 19.893L4.81 13.433H1.24C0.9714 13.4301 0.724285 13.2856 0.589995 13.053L0.399995 12.723C0.304555 12.5664 0.304555 12.3696 0.399995 12.213L7.4 0.792985C7.54108 0.564956 7.79189 0.42815 8.06 0.432985H8.26C8.40007 0.433245 8.53387 0.491104 8.63 0.592985C8.72563 0.695259 8.77295 0.833562 8.76 0.972985L8.19 7.43299H11.76C12.0286 7.43589 12.2757 7.58035 12.41 7.81299L12.6 8.14299C12.6924 8.30146 12.6885 8.49826 12.59 8.65299Z"
                fill="#2C2C2C"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Download;
