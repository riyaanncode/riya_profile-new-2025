import React from 'react';
import Navbar from './Navbar';

const skills = [
  { name: "HTML 5", icon: "ri-html5-fill", color: "text-orange-500" },
  { name: "CSS 3", icon: "ri-css3-fill", color: "text-blue-500" },
  { name: "JavaScript", icon: "ri-javascript-fill", color: "text-yellow-400" },
  { name: "Sass", icon: "ri-brush-fill", color: "text-pink-400" },
  { name: "Tailwind CSS", icon: "ri-windy-fill", color: "text-cyan-400" },
  { name: "Bootstrap", icon: "ri-bootstrap-fill", color: "text-purple-600" },
  { name: "React JS", icon: "ri-reactjs-fill", color: "text-blue-300" },
  { name: "Shopify", icon: "ri-shopping-bag-3-fill", color: "text-green-500" },
  { name: "Shopify Polaris", icon: "ri-star-s-fill", color: "text-yellow-300" },
  { name: "Theme Customization", icon: "ri-tools-fill", color: "text-gray-300" },
  { name: "Liquid", icon: "ri-drop-fill", color: "text-indigo-400" },
  { name: "Canva", icon: "ri-palette-fill", color: "text-blue-400" },
  { name: "Figma", icon: "ri-figma-line", color: "text-pink-300" },
];

const SkillsPage = () => {
  return (
       <div className="about-page w-full min-h-screen bg-black text-white">
         <Navbar />
    <div className="bg-black text-white min-h-screen px-6 py-16">
       
      {/* Title with gradient */}
      <h2 className="text-4xl font-bold text-center mb-12">
        <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-orange-400 bg-clip-text text-transparent">
          My Skills
        </span>
      </h2>

      {/* Grid layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="bg-[#111111] p-6 rounded-lg shadow-md hover:shadow-pink-400/50 transition-all duration-300"
          >
            <i className={`${skill.icon} ${skill.color} text-4xl mb-4`}></i>
            <h3 className="text-xl font-semibold mb-2 text-white">{skill.name}</h3>
            <p className="text-sm text-gray-400">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </p>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default SkillsPage;
