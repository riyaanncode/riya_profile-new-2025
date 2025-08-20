import React from "react";
import FirstImage from "../assets/Frame 117.png";
import SecondImage from "../assets/Frame 118.png";
import ThirdImage from "../assets/Frame 119.png";
import FourthImage from "../assets/Frame 119 (1).png";
import FifthImage from "../assets/Frame 119 (2).png";
import LastImage from "../assets/Frame 117 (1).png";
import Navbar from "./Navbar";

const AboutPage = () => {
  return (
    <div className="about-page w-full min-h-screen bg-black text-white">
      <Navbar />
      {/* Hero Section */}
      <section className="text-center py-16 px-6">
        <h1 className="text-4xl font-bold mb-4">
          <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-orange-400 bg-clip-text text-transparent">
            About Me
          </span>
        </h1>
        <p className="text-lg max-w-3xl mx-auto text-white">
          Hi, I’m{" "}
          <span className="font-semibold bg-gradient-to-r from-pink-500 via-purple-500 to-orange-400 bg-clip-text text-transparent">
            Riya Pandey
          </span>
          , a passionate{" "}
          <span className="font-semibold text-purple-400">
            Frontend Developer
          </span>{" "}
          who loves turning ideas into beautiful, responsive, and functional web
          experiences. I specialize in modern web technologies like
          <span className="font-medium text-orange-400">
            React.js, JavaScript, HTML, CSS, and Shopify
          </span>
          . This portfolio project showcases my skills and dedication to clean,
          professional UI/UX design.
        </p>
      </section>

      {/* Work / Skills Section */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 px-6 md:px-16 py-12">
        <a
          href="https://anncode.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={FirstImage}
            alt="Frontend Development"
            className="w-full h-64 object-cover rounded-xl shadow-lg hover:scale-105 transition-transform border border-purple-500"
          />
          <h3 className="mt-4 text-xl font-semibold text-center text-orange-400">
            Anncode Site
          </h3>
          <p className="text-sm text-white text-center">
            This is the first project in my development journey. I built this
            website using only HTML, CSS, and JavaScript.
          </p>
        </a>

        <a
          href="https://discountly.anncode.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={SecondImage}
            alt="UI/UX Design"
            className="w-full h-64 object-cover rounded-xl shadow-lg hover:scale-105 transition-transform border border-pink-500"
          />
          <h3 className="mt-4 text-xl font-semibold text-center  text-orange-400">
            Discountly POS & Tier Discount app
          </h3>
          <p className="text-sm text-white  text-center">
            Discountly – POS & Tier Discount App is a discount-based application
            built on the Shopify platform. This is the banner section, created
            using HTML, CSS, and JavaScript.
          </p>
        </a>

        <a
          href="https://appcraftly.anncode.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={ThirdImage}
            alt="Projects"
            className="w-full h-64 object-cover rounded-xl shadow-lg hover:scale-105 transition-transform border border-orange-400"
          />
          <h3 className="mt-4 text-xl font-semibold text-center  text-orange-400">
            App Craftly
          </h3>
          <p className="text-sm text-white  text-center">
            Craftly App is a mobile application app in shopify platform for
            which I developed in this site for App Craftly App the frontend
            using React.js and Material UI.
          </p>
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer">
          <img
            src={FourthImage}
            alt="Projects"
            className="w-full h-64 object-cover rounded-xl shadow-lg hover:scale-105 transition-transform border border-orange-400"
          />
          <h3 className="mt-4 text-xl font-semibold text-center  text-orange-400">
            Smartly AI Product Recommendation
          </h3>
          <p className="text-sm text-white  text-center">
            Smartly AI – Product Recommendation App is a Shopify-based
            application. In this project, I worked on the storefront using HTML,
            CSS, JavaScript, and Liquid. I also contributed to the demo store,
            work on theme customization and frontend development with HTML, CSS,
            JavaScript, and Liquid.
          </p>
        </a>

        <a href="#" target="_blank" rel="noopener noreferrer">
          <img
            src={FifthImage}
            alt="Projects"
            className="w-full h-64 object-cover rounded-xl shadow-lg hover:scale-105 transition-transform border border-orange-400"
          />
          <h3 className="mt-4 text-xl font-semibold text-center  text-orange-400">
            Checkout Customization Pro
          </h3>
          <p className="text-sm text-white  text-center">
            Checkout Customization Pro App is a Shopify-based application. I
            worked on the frontend of this app using React.js and Shopify
            Polaris
          </p>
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer">
          <img
            src={LastImage}
            alt="Projects"
            className="w-full h-64 object-cover rounded-xl shadow-lg hover:scale-105 transition-transform border border-orange-400"
          />
          <h3 className="mt-4 text-xl font-semibold text-center  text-orange-400">
            Discountly Demo Store
          </h3>
          <p className="text-sm text-white text-center">
            This is Discountly demo store. I created the theme using Liquid,
            HTML, CSS and JavaScript. I used Canva and Figma to create banners
            and product images.
          </p>
        </a>
      </section>

      {/* Footer Section */}
      <section className="bg-gradient-to-r from-purple-900 via-black to-black py-12 text-center">
        <h2 className="text-2xl font-bold mb-2  text-orange-400">
          Let’s Build Something Great
        </h2>
        <p className="text-gray-300 max-w-xl mx-auto">
          As a developer, I’m always eager to learn, grow, and collaborate on
          exciting projects. If you’re looking for a dedicated frontend
          developer to bring your ideas to life — let’s connect!
        </p>
        <a
          href="/contact"
          className="inline-block mt-6 px-6 py-3 bg-gradient-to-r from-pink-500 via-purple-500 to-orange-400 text-white rounded-lg shadow-md hover:opacity-90 transition"
        >
          Contact Me
        </a>
      </section>
    </div>
  );
};

export default AboutPage;
