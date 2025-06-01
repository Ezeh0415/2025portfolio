import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className="mt-5 bg-slate-900 text-slate-200 rounded-lg shadow-inner px-6 py-8">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                <div>
                    <h3 className="text-lg font-bold mb-2 text-indigo-300">Ezeh Godwin</h3>
                    <p className="text-sm text-slate-400 mb-2">
                        &copy; {new Date().getFullYear()} All rights reserved.
                    </p>
                    <p className="text-xs text-slate-500">
                        Built with <span className="text-indigo-400 font-semibold">React</span> &amp; <span className="text-teal-400 font-semibold">Tailwind CSS</span>
                    </p>
                </div>
                <div className="flex flex-col md:items-end gap-2">
                    <div className="flex items-center gap-4 mb-1">
                        <a href="mailto:ezeanwechigozie@gmail.com" className="hover:text-indigo-400 transition text-sm flex items-center gap-1">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                            ezeanwechigozie@gmail.com
                        </a>
                        <a href="https://github.com/Ezeh0415" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-400 transition">
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.53-1.34-1.3-1.7-1.3-1.7-1.06-.72.08-.71.08-.71 1.17.08 1.79 1.2 1.79 1.2 1.04 1.78 2.73 1.27 3.4.97.11-.75.41-1.27.74-1.56-2.55-.29-5.23-1.28-5.23-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.1 11.1 0 012.9-.39c.98.01 1.97.13 2.9.39 2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.84 1.19 3.1 0 4.43-2.69 5.41-5.25 5.7.42.36.79 1.09.79 2.2 0 1.59-.01 2.87-.01 3.26 0 .31.21.68.8.56C20.71 21.39 24 17.08 24 12c0-6.27-5.23-11.5-12-11.5z"/>
                            </svg>
                        </a>
                        <a href="https://www.linkedin.com/in/ezeanwe-chigozie-49b78a260?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-400 transition">
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.28c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm13.5 10.28h-3v-4.5c0-1.08-.02-2.47-1.5-2.47-1.5 0-1.73 1.17-1.73 2.39v4.58h-3v-9h2.89v1.23h.04c.4-.75 1.38-1.54 2.85-1.54 3.05 0 3.61 2.01 3.61 4.62v4.69z"/>
                            </svg>
                        </a>
                        <a
                            href="https://wa.me/qr/V6LCKUXK6UX6O1"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-green-400 transition"
                        >
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 32 32">
                                <path d="M16 3C9.373 3 4 8.373 4 15c0 2.637.86 5.08 2.48 7.14L4 29l7.13-2.46A12.93 12.93 0 0 0 16 27c6.627 0 12-5.373 12-12S22.627 3 16 3zm0 22.5c-2.07 0-4.09-.54-5.85-1.56l-.42-.25-4.23 1.46 1.44-4.13-.27-.43A9.96 9.96 0 0 1 6 15c0-5.52 4.48-10 10-10s10 4.48 10 10-4.48 10-10 10zm5.13-7.47c-.28-.14-1.65-.81-1.9-.9-.25-.09-.43-.14-.61.14-.18.28-.7.9-.86 1.08-.16.18-.32.2-.6.07-.28-.14-1.18-.44-2.25-1.41-.83-.74-1.39-1.65-1.55-1.93-.16-.28-.02-.43.12-.57.12-.12.28-.32.42-.48.14-.16.18-.28.28-.46.09-.18.05-.34-.02-.48-.07-.14-.61-1.47-.84-2.01-.22-.53-.45-.46-.61-.47-.16-.01-.34-.01-.52-.01-.18 0-.48.07-.73.34-.25.27-.97.95-.97 2.31 0 1.36.99 2.68 1.13 2.87.14.18 1.95 2.98 4.73 4.06.66.28 1.18.45 1.58.58.66.21 1.26.18 1.73.11.53-.08 1.65-.67 1.89-1.32.23-.65.23-1.2.16-1.32-.07-.12-.25-.18-.53-.32z"/>
                            </svg>
                        </a>

                        <a
                            href="https://x.com/Ezeh0415?t=In-SYA001yf5Scb2S4P69Q&s=09"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-blue-400 transition"
                        >
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M22.46 5.924c-.793.352-1.646.59-2.542.698a4.48 4.48 0 0 0 1.965-2.475 8.94 8.94 0 0 1-2.828 1.082 4.48 4.48 0 0 0-7.635 4.085A12.72 12.72 0 0 1 3.11 4.86a4.48 4.48 0 0 0 1.388 5.976 4.44 4.44 0 0 1-2.03-.561v.057a4.48 4.48 0 0 0 3.594 4.393 4.48 4.48 0 0 1-2.025.077 4.48 4.48 0 0 0 4.184 3.11A8.98 8.98 0 0 1 2 19.54a12.68 12.68 0 0 0 6.88 2.017c8.26 0 12.78-6.84 12.78-12.78 0-.195-.004-.39-.013-.583A9.14 9.14 0 0 0 24 4.59a8.93 8.93 0 0 1-2.54.697z"/>
                            </svg>
                        </a>
                        
                    </div>
                    <Link to="" className="text-sm text-slate-500 hover:text-indigo-400 transition">
                        Let's connect!
                    </Link>
                </div>
            </div>
        </div>
  )
}

export default Footer
