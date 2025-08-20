import React from "react";
import Navbar from "./Navbar";
import ProfileImage from "../assets/uJP6yFzNROmCq9_SbR6R_Q.png";
import ProfileJsonData from "../Component/profilejsonData/ptofiledata.json";
import GetResumeForView from "../assets/RIYA-PANDEY-RESUME (2)-1 (3).pdf";

const HomePage = () => {
  return (
    <div className="bg-black text-white min-h-screen flex flex-col">
      <Navbar />  {/* ✅ Navbar always here */}

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center flex-1 text-center px-4">
        <img
          src={ProfileImage}
          alt="Profile"
          className="w-40 h-40 rounded-full border-4 border-purple-500 shadow-lg mb-6 transform transition-transform duration-300 hover:scale-110"
        />
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          I&apos;m{" "}
          <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400 bg-clip-text text-transparent">
            {ProfileJsonData.LogoName}
          </span>
          , frontend developer{" "}
        </h2>
        <p className="text-gray-400 max-w-2xl mb-6">
          {ProfileJsonData.Subtitle}
        </p>
        <div className="flex gap-4">
          <button className="bg-gradient-to-r from-purple-500 to-orange-400 px-6 py-2 rounded-full font-semibold">
            Connect with me
          </button>
          <button className="border border-gray-400 px-6 py-2 rounded-full font-semibold hover:bg-gray-800">
            <a
              href={GetResumeForView}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 text-white rounded-lg shadow-md hover:opacity-90 transition"
            >
              View Resume
            </a>
          </button>
        </div>
      </section>
    </div>
  );
};

export default HomePage;

