import { Link } from 'react-router-dom'
import { FaCss3Alt, FaGitAlt, FaHtml5, FaJs, FaReact } from 'react-icons/fa'
import { useProjectActions } from './functions/functions'

const HomePage = () => {
    const { projects, success,message,handleEmailCopy,handleResumeDownload} = useProjectActions();


return (
    <div>
        {success && (
            <div className="fixed top-0 left-0 right-0 z-50 flex items-center justify-center bg-green-500 text-white p-4">
                <p>{message}</p>
            </div>
        )}
        
        <div className='mt-3 bg-white rounded-lg shadow-lg p-2'>
            <div className='flex items-center justify-between gap-2'>
                <h1 className='text-sm font-bold capitalize text-portfolio md:text-2xl '>front end web developer</h1>
                <Link to="/contact" className='text-xs font-bold capitalize flex items-center gap-1 text-white bg-gradient-to-r from-slate-700 via-indigo-800 to-slate-900 px-2 py-1 rounded-lg md:text-lg'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z" />
                    </svg>
                    available for work
                </Link>
            </div>

            <div className='flex items-center justify-between gap-2 mt-4'>
                <div className='mt-3'>
                    <h1 className='text-xl font-semibold capitalize md:text-3xl'> ezeh godwin |</h1>
                    <p className='text-xs text-gray-500 capitalize w-[200px] md:w-[600px] md:text-lg '>a front end web developer with a passion for creating beautiful and functional websites.</p>
                    <div className='mt-3 flex items-center gap-2'>
                        <Link to="/contact" className="text-xs font-bold text-center text-gray-100 capitalize flex items-center gap-1 border-2 border-indigo-400 w-fit px-2 py-1 rounded-lg bg-indigo-700 hover:bg-indigo-600 transition md:text-sm"> 
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                            </svg>
                            <span className="text-gray-100">hire me</span>
                        </Link>
                    <button
                        type="button"
                        className="text-xs font-bold text-center text-gray-100 capitalize flex items-center gap-1 border-2 text-black border-black px-2 py-1 rounded-lg md:text-sm"
                        onClick={handleEmailCopy}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-4 text-black">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 7.5V6.108c0-1.135.845-2.098 1.976-2.192.373-.03.748-.057 1.123-.08M15.75 18H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08M15.75 18.75v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5A3.375 3.375 0 0 0 6.375 7.5H5.25m11.9-3.664A2.251 2.251 0 0 0 15 2.25h-1.5a2.251 2.251 0 0 0-2.15 1.586m5.8 0c.065.21.1.433.1.664v.75h-6V4.5c0-.231.035-.454.1-.664M6.75 7.5H4.875c-.621 0-1.125.504-1.125 1.125v12c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V16.5a9 9 0 0 0-9-9Z" />
                        </svg>
                        <span className="text-black">copy email</span>
                    </button>
                    </div>
                </div>
                <div>
                    <img src="/image/clear-Ezeh-godwin.jpg" alt='my image' className="mt-2 object-cover w-[180px]
                    h-[130px] rounded-2xl md:rounded-full md:w-[300px] md:h-[270px]" />
                </div>
            </div>
        </div>

        {/* Skills / Tech Stack and Resume */}
        <div className="mt-3 bg-white rounded-lg shadow-lg p-4">
            <h2 className="text-lg font-bold text-slate-800 mb-2">Tech Stack</h2>
            <div className="flex items-center justify-between text-2xl text-indigo-700 mb-2 justify-start">
                <div className="flex flex-col items-center">
                    <FaReact title="React" className="hover:text-blue-500 transition" />
                    <span className="text-xs text-slate-700 mt-1">React</span>
                </div>
                <div className="flex flex-col items-center">
                    <FaJs title="JavaScript" className="hover:text-yellow-400 transition" />
                    <span className="text-xs text-slate-700 mt-1">JavaScript</span>
                </div>
                <div className="flex flex-col items-center">
                    <FaHtml5 title="HTML5" className="hover:text-orange-600 transition" />
                    <span className="text-xs text-slate-700 mt-1">HTML5</span>
                </div>
                <div className="flex flex-col items-center">
                    <FaCss3Alt title="CSS3" className="hover:text-blue-400 transition" />
                    <span className="text-xs text-slate-700 mt-1">CSS3</span>
                </div>
                <div className="flex flex-col items-center">
                    <FaGitAlt title="Git" className="hover:text-red-500 transition" />
                    <span className="text-xs text-slate-700 mt-1">Git</span>
                </div>
                <div className="flex flex-col items-center">
                    {/* Tailwind CSS Icon */}
                    <svg
                        viewBox="0 0 48 48"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-7 h-7 text-teal-400 hover:text-teal-500 transition"
                        title="Tailwind CSS"
                    >
                        <path
                            d="M24 14c-5.333 0-8.667 2.667-10 8 2-2.667 4.333-3.667 7-3 1.522.381 2.6 1.459 3.781 2.641C26.963 23.822 28.041 24.9 29.563 25.281c2.667.667 5-0.333 7-3-1.333-5.333-4.667-8-10-8zm-10 12c-5.333 0-8.667 2.667-10 8 2-2.667 4.333-3.667 7-3 1.522.381 2.6 1.459 3.781 2.641C16.963 37.822 18.041 38.9 19.563 39.281c2.667.667 5-0.333 7-3-1.333-5.333-4.667-8-10-8z"
                            fill="currentColor"
                        />
                    </svg>
                    <span className="text-xs text-slate-700 mt-1">Tailwind</span>
                </div>
            </div>
            <div className="mt-4">
                <button
                type='button'
                    onClick={handleResumeDownload}
                    className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg font-semibold text-xs hover:bg-indigo-700 transition"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                    Download CV
                </button>
            </div>
        </div>

        <div>
            <div className='flex items-center justify-between mt-4'>
                <h1 className='text-md font-bold capitalize'>projects</h1>
                <Link className='text-xs flex items-center gap-1 border-2 px-2 py-1 bg-white rounded-lg' to="/">
                    <Link to="/project" className='text-sm capitalize'>view all</Link>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5" />
                    </svg>

                </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-3">
                {/* Project Card */}
                
                {projects.slice(0, 4).map((project) => {
                    
                    // Destructure project properties
                    const {id, image, title, description, demo, source } = project;
                    // Shorten description if it's too long
                    const ShortDescription = description.slice(0, 50) + '...';
                    return (
                        <div className="bg-gradient-to-br from-slate-100 via-slate-200 to-slate-100 rounded-lg shadow-md p-4 flex flex-col" key={id}>
                    <img src={image} alt={title}
                    className="w-full h-40 object-cover rounded-md mb-3 border border-slate-300"
                    />
                    <h2 className="text-base font-semibold text-slate-800 mb-1">{title}</h2>
                    <p className="text-xs text-slate-600 mb-3">{ShortDescription}</p>
                    <div className="mt-auto flex gap-2">
                    <Link
                        to={demo}
                        target="_blank"
                        className="text-xs font-medium text-white bg-indigo-700 hover:bg-indigo-800 px-3 py-1 rounded transition"
                    >
                        View live
                    </Link>
                    <Link
                        to={source}
                        target="_blank"
                        className="text-xs font-medium text-indigo-700 border border-indigo-700 px-3 py-1 rounded hover:bg-indigo-50 transition"
                    >
                        Source Code
                    </Link>
                    </div>
                        </div>
                    )
                })}
            </div>
        </div>

        {/* testimonies  */}
        <div className="mt-6 bg-white rounded-lg shadow-lg p-4">
            <h2 className="text-lg font-bold text-slate-800 mb-3 border-b pb-2 capitalize">testimonies </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                <div className="bg-slate-50 rounded-lg shadow p-4 flex flex-col items-start">
                    <span className="font-medium text-indigo-700 mb-1">Lisa B., CTO at a HealthTech startup</span>
                    <span className="text-slate-700 text-sm">Hey Godwin, just wanted to say thank you again. The dashboard UI looks amazing — much better than what we had before. Our team loved how you integrated the components using React and styled everything so smoothly with Tailwind. You’ll be our go-to dev from now on. Great job!</span>
                </div>
                <div className="bg-slate-50 rounded-lg shadow p-4 flex flex-col items-start">
                    <span className="font-medium text-indigo-700 mb-1">@visualthinker | Fiverr Buyer</span>
                    <span className="text-slate-700 text-sm">Absolutely incredible experience! I needed a responsive landing page built with HTML, CSS, and Tailwind. Godwin not only delivered it ahead of time but also optimized it for performance and mobile. He even helped fix a few React bugs for free. Highly recommend — will definitely order again!.</span>
                </div>
                <div className="bg-slate-50 rounded-lg shadow p-4 flex flex-col items-start">
                    <span className="font-medium text-indigo-700 mb-1"> Danielle M., Product Manager at SaaS Startup</span>
                    <span className="text-slate-700 text-sm capitalize">⭐️⭐️⭐️⭐️⭐️
"Working with godwin was a game-changer for our frontend development. He rebuilt our dashboard using React and Tailwind CSS, resulting in a cleaner UI and better performance. Communication was smooth, deadlines were met, and the code quality was exceptional. Already rehiring for our next sprint!</span>
                </div>
                
            </div>
        </div>

        {/* Fun Facts / Hobbies Section */}
        <div className="mt-6 bg-white rounded-lg shadow-lg p-4">
            <h2 className="text-lg font-bold text-slate-800 mb-3 border-b pb-2">Fun Facts &amp; Hobbies</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                <div className="bg-slate-50 rounded-lg shadow p-4 flex flex-col items-start">
                    <span className="font-medium text-indigo-700 mb-1">Coding Puzzles:</span>
                    <span className="text-slate-700 text-sm">I enjoy solving coding puzzles and participating in hackathons.</span>
                </div>
                <div className="bg-slate-50 rounded-lg shadow p-4 flex flex-col items-start">
                    <span className="font-medium text-indigo-700 mb-1">Games:</span>
                    <span className="text-slate-700 text-sm">I love playing Games in my free time mostly strategic games.</span>
                </div>
                <div className="bg-slate-50 rounded-lg shadow p-4 flex flex-col items-start">
                    <span className="font-medium text-indigo-700 mb-1">Media:</span>
                    <span className="text-slate-700 text-sm">Big fan of sci-fi movies and tech podcasts.</span>
                </div>
                <div className="bg-slate-50 rounded-lg shadow p-4 flex flex-col items-start">
                    <span className="font-medium text-indigo-700 mb-1">Outdoors:</span>
                    <span className="text-slate-700 text-sm">On weekends, you’ll find me hiking or exploring new coffee shops.</span>
                </div>
            </div>
        </div>
    </div>

)
}

export default HomePage
