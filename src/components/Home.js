import React from "react";
const imagePath = "/images/a.jpg";

export default function Home() {
  return (
    <div className="h-fit">
      <h1>👋 WELCOME TO MANAGE WISE!</h1>
      <div>
        <h1>
          Empower your business with
          <span>Strategic </span> insights
        </h1>
        <p>
          Powerful management platform designed to streamline your business
          operations, boost productivity, and drive success
        </p>
      </div>
      <div>
        <button>Get Started</button>
        <button>Watch Demo</button>
      </div>
      <div>
        <img src={process.env.PUBLIC_URL + imagePath} alt="d-img" />
      </div>
    </div>
  );
}
