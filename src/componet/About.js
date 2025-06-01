import React from 'react'

const About = () => {
return (
    <div className="max-w-2xl mx-auto mt-5 bg-white rounded-xl shadow-lg p-8 capitalize md:max-w-[100%]">
        <h2 className="text-3xl font-semibold text-indigo-700 mb-4 border-b pb-2">About Me</h2>
        <div className="mb-6 flex items-center">
            <div className="bg-indigo-100 rounded-full p-4 mr-4">
                <span className="font-bold text-indigo-600 text-sm">ezeh Godwin</span>
            </div>
            <span className="text-gray-700 ml-4">front end Developer</span>
        </div>
        <p className="text-sm text-gray-600 leading-relaxed mb-8 text-justify">
            Welcome to my portfolio. As a dedicated front-end developer, I specialize in crafting visually appealing and user-friendly web applications that help businesses grow. My commitment to quality, attention to detail, and passion for technology ensure that every project I work on delivers real value to clients. Let's work together to bring your ideas to life!
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <div className="bg-indigo-50 rounded-lg p-4 shadow">
                <span className="font-medium text-gray-700">Experience:</span>
                <div className="ml-2 text-gray-600">1+ years in front end web development</div>
            </div>
            <div className="bg-indigo-50 rounded-lg p-4 shadow">
                <span className="font-medium text-gray-700">Skills:</span>
                <div className="ml-2 text-gray-600">html, css, javascript, React, tailwind</div>
            </div>
            <div className="bg-indigo-50 rounded-lg p-4 shadow">
                <span className="font-medium text-gray-700">Interests:</span>
                <div className="ml-2 text-gray-600">backend web developer</div>
            </div>
        </div>
        <p className="text-gray-500">
            I am always eager to learn new technologies and collaborate on meaningful projects. Let's connect and create something impactful together.
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
)
}

export default About
