import React from 'react'
import projects from '../DbFile/ProjectDb';
import { Link } from 'react-router-dom';

const Projects = () => {
  return (
    <div className='mx-1 bg-gray-200'>
      <li className='text-lg capitalize mt-[1rem]'>project</li>

      <div>
        <h2 className='text-2xl capitalize mt-2 font-semibold'>my works</h2>
        <blockquote className='text-sm mt-2 text-gray-600 '>
            discover my projects that showcase my skills and creativity. Each project is a testament to my dedication to delivering high-quality work and my passion for coding.
        </blockquote>
      </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
        {projects.map((project) => {
            const { id, image, title, description, demo, source } = project;
            const ShortDescription = description.slice(0, 50) + '...';
            return (
                <div
                    className="bg-gradient-to-br from-slate-100 via-slate-200 to-slate-100 rounded-lg shadow-md p-4 flex flex-col"
                    key={id}
                >
                    <img
                        src={image}
                        alt={title}
                        className="w-full h-40 object-contain rounded-md mb-3 border border-slate-300"
                    />
                    <h2 className="text-base font-semibold text-slate-800 mb-1">{title}</h2>
                    <p className="text-xs text-slate-600 mb-3">{ShortDescription}</p>
                    <div className="mt-auto flex gap-2 flex-wrap">
                        <Link
                            to={demo}
                            target="_blank"
                            className="text-xs font-medium text-white bg-indigo-700 hover:bg-indigo-800 px-3 py-1 rounded transition"
                        >
                            View Demo
                        </Link>
                        <Link
                            to={source}
                            target="_blank"
                            className="text-xs font-medium text-indigo-700 border border-indigo-700 px-3 py-1 rounded hover:bg-indigo-50 transition"
                        >
                            Source Code
                        </Link>
                        <Link
                            to={`/project/${id}`}
                            className="text-xs font-medium text-white bg-green-600 hover:bg-green-700 px-3 py-1 rounded transition"
                        >
                            View Details
                        </Link>
                    </div>
                </div>
            );
        })}
    </div>

    </div>
  )
}

export default Projects
