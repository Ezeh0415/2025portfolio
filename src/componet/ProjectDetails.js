import { Link, useParams } from 'react-router-dom';
import projects from '../DbFile/ProjectDb';
import { useEffect, useState } from 'react';

const ProjectDetails = () => {
    const [title, setTitle] = useState("");
    const [Image, setImage] = useState("");
    const [description, setDescription] = useState("");
    const [demo, setDemo] = useState("");
    const [source, setSource] = useState("");

    const { id } = useParams();

    useEffect(() => {
            const project = projects.find(project => project.id === parseInt(id));
            if (project) {
                setTitle(project.title);
                setImage(project.image);
                setDescription(project.description);
                setDemo(project.demo);
                setSource(project.source);
            }
        }, [id]);
  return (
    <div>
        <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-lg p-10 mt-12 border border-indigo-100">
            <img
                src={Image}
                alt={title}
                className="w-full h-72  rounded-xl mb-8 border-4 border-indigo-100 shadow-sm md:object-contain"
            />
            <h2 className="text-4xl font-extrabold text-indigo-800 mb-5 tracking-tight">{title}</h2>
            <p className="text-gray-700 text-lg mb-8 leading-relaxed">{description}</p>
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <a
                    href={demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-indigo-700 hover:bg-indigo-800 text-white font-semibold py-2.5 px-6 rounded-lg shadow transition duration-150"
                >
                    Live Demo
                </a>
               
                <a
                    href={source}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white border-2 border-indigo-700 text-indigo-700 hover:bg-indigo-50 font-semibold py-2.5 px-6 rounded-lg shadow transition duration-150"
                >
                    Source Code
                </a>
            </div>
            <div className="mt-6">
                <Link
                    to="/project"
                    className="inline-flex items-center text-indigo-600 hover:underline font-medium transition"
                >
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                    </svg>
                    Back to Projects
                </Link>
            </div>
        </div>
    </div>
  )
}

export default ProjectDetails
