import React from "react";

const About = () => {
  return (
    <div className="max-w-2xl mx-auto mt-5 bg-white rounded-xl shadow-lg p-8 capitalize md:max-w-[100%]">
      <h2 className="text-3xl font-semibold text-indigo-700 mb-4 border-b pb-2">
        About Me
      </h2>
      <div className="mb-6 flex items-center">
        <div className=" rounded-full p-3 mr-4">
          <span className="font-bold text-indigo-600 text-sm md:text-3xl">
            ezeh Godwin
          </span>
        </div>
        <span className="text-gray-700 text-xs md:text-2xl">
          Full stack Developer (mern stack)
        </span>
      </div>
      <p className="text-sm text-gray-600 leading-relaxed mb-8 text-justify">
        Welcome to my portfolio. I am a committed front-end developer
        specializing in the creation of visually compelling and user-centric web
        applications that support business objectives. With a strong dedication
        to quality, precision, and a profound passion for technology, I
        consistently deliver projects that add significant value to clients. I
        look forward to the opportunity to collaborate and bring your ideas to
        fruition.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <div className="bg-indigo-50 rounded-lg p-4 shadow">
          <span className="font-medium text-gray-700">Experience:</span>
          <div className="ml-2 text-gray-600">
            3+ years in front end web development
          </div>
        </div>
        <div className="bg-indigo-50 rounded-lg p-4 shadow">
          <span className="font-medium text-gray-700">Skills:</span>
          <div className="ml-2 text-gray-600">
            html, css, javascript, React, tailwind node.js express.js mongodb
          </div>
        </div>
        <div className="bg-indigo-50 rounded-lg p-4 shadow">
          <span className="font-medium text-gray-700">Interests:</span>
          <div className="ml-2 text-gray-600">Full stack developer</div>
        </div>
      </div>
      <p className="text-gray-500">
        I am always eager to learn new technologies and collaborate on
        meaningful projects. Let's connect and create something impactful
        together.
      </p>
      <div className="mt-8 text-center">
        <a
          href="mailto:ezehgodwin@example.com"
          className="inline-block bg-indigo-600 text-white px-6 py-2 rounded-full shadow hover:bg-indigo-700 transition-colors duration-200"
        >
          Contact Me
        </a>
      </div>
    </div>
  );
};

export default About;
