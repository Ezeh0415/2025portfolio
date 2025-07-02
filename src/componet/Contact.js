import { useProjectActions } from './functions/functions'


const Contact = () => {
    const {handleChange , handleSubmit , formSuccess, error , randomMessage, errorMessage, formData } = useProjectActions();

return (
    <div>
        {formSuccess && (
            <div className="fixed top-0 left-0 right-0 z-50 flex items-center justify-center bg-green-500 text-white p-4 capitalize">
                <p>{randomMessage}</p>
            </div>
        )}

        {error && (
            <div className="fixed top-0 left-0 right-0 z-50 flex items-center justify-center bg-red-500 text-white p-4 capitalize">
                <p>{errorMessage}</p>
            </div>
        )}

        {/* Contact Section */}
        <div className="mt-8 bg-white rounded-lg shadow-lg p-6 capitalize">
            <h2 className="text-lg font-bold text-slate-800 mb-4 border-b pb-2">Contact</h2>
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                <div className="flex-1">
                    <p className="text-slate-700 mb-2">
                        Interested in working together or have a question? Feel free to reach out!
                    </p>
                    <div className="flex items-center gap-3 mb-2">
                        <div className="bg-indigo-100 rounded-full p-2 flex items-center justify-center shadow">
                            <svg className="w-5 h-5 text-indigo-700" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M16 12H8m8 0a8 8 0 11-16 0 8 8 0 0116 0z" />
                            </svg>
                        </div>
                        <span className="text-slate-800 font-medium select-all">ezeanwechigozie@gmail.com</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <div className="bg-indigo-100 rounded-full p-2 flex items-center justify-center shadow">
                            <svg className="w-5 h-5 text-indigo-700" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                        </div>
                        <span className="text-slate-800 font-medium">+234 906 381 0310</span>
                    </div>
                </div>
                <form onSubmit={handleSubmit} className="flex-1 flex flex-col gap-3">
                    <input
                        type="text"
                        placeholder="Your Name"
                        className="border border-slate-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                        name='name'
                        onChange={handleChange}
                        value={formData.name}
                    />
                    <input
                        type="email"
                        placeholder="Your Email"
                        className="border border-slate-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                        name='email'
                        onChange={handleChange}
                        value={formData.email}
                    />
                    <textarea
                        placeholder="Your Message"
                        rows={3}
                        className="border border-slate-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400 resize-none"
                        name='message'
                        onChange={handleChange}
                        value={formData.message}
                    />
                    <button
                        type="submit"
                        className="bg-indigo-700 text-white font-semibold rounded px-4 py-2 hover:bg-indigo-800 transition"
                        onClick={handleSubmit}
                    >
                        Send Message
                    </button>
                </form>
            </div>
        </div>

        <div className="flex justify-center mt-6">
            <div className="flex gap-6">
                <a href="https://github.com/Ezeh0415" target="_blank" rel="noopener noreferrer" className="group">
                    <div className="bg-slate-100 hover:bg-indigo-100 rounded-full p-3 flex items-center justify-center shadow transition">
                        <svg className="w-7 h-7 text-slate-700 group-hover:text-indigo-700 transition" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.53-1.34-1.29-1.7-1.29-1.7-1.06-.72.08-.71.08-.71 1.17.08 1.78 1.2 1.78 1.2 1.04 1.78 2.73 1.27 3.4.97.11-.75.41-1.27.74-1.56-2.56-.29-5.26-1.28-5.26-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.04 0 0 .97-.31 3.18 1.18a11.1 11.1 0 012.9-.39c.99.01 1.99.13 2.92.39 2.2-1.49 3.17-1.18 3.17-1.18.63 1.58.23 2.75.11 3.04.74.81 1.19 1.84 1.19 3.1 0 4.43-2.7 5.41-5.27 5.7.42.36.79 1.08.79 2.18 0 1.57-.01 2.84-.01 3.23 0 .31.21.67.8.56C20.71 21.39 24 17.08 24 12c0-6.27-5.23-11.5-12-11.5z"/>
                        </svg>
                    </div>
                </a>
                <a href="https://www.linkedin.com/in/ezeanwe-chigozie-49b78a260?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" className="group">
                    <div className="bg-slate-100 hover:bg-indigo-100 rounded-full p-3 flex items-center justify-center shadow transition">
                        <svg className="w-7 h-7 text-slate-700 group-hover:text-indigo-700 transition" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.27c-.97 0-1.75-.79-1.75-1.76s.78-1.76 1.75-1.76 1.75.79 1.75 1.76-.78 1.76-1.75 1.76zm15.5 11.27h-3v-5.6c0-1.34-.03-3.07-1.87-3.07-1.87 0-2.16 1.46-2.16 2.97v5.7h-3v-10h2.88v1.36h.04c.4-.76 1.38-1.56 2.84-1.56 3.04 0 3.6 2 3.6 4.59v5.61z"/>
                        </svg>
                    </div>
                </a>
                <a href="https://x.com/Ezeh0415?t=In-SYA001yf5Scb2S4P69Q&s=09" target="_blank" rel="noopener noreferrer" className="group">
                    <div className="bg-slate-100 hover:bg-indigo-100 rounded-full p-3 flex items-center justify-center shadow transition">
                        <svg className="w-7 h-7 text-slate-700 group-hover:text-indigo-700 transition" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M24 4.56c-.89.39-1.84.65-2.84.77a4.93 4.93 0 002.16-2.72c-.95.56-2 .97-3.13 1.19a4.92 4.92 0 00-8.39 4.48c-4.09-.2-7.72-2.17-10.15-5.15a4.93 4.93 0 001.52 6.57c-.8-.02-1.56-.25-2.23-.62v.06a4.93 4.93 0 003.95 4.83c-.39.11-.8.17-1.22.17-.3 0-.59-.03-.87-.08a4.93 4.93 0 004.6 3.42A9.87 9.87 0 010 21.54a13.94 13.94 0 007.55 2.21c9.05 0 14-7.5 14-14v-.64c.96-.7 1.8-1.56 2.46-2.54z"/>
                        </svg>
                    </div>
                </a>
                <a
                    href="https://wa.me/qr/V6LCKUXK6UX6O1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group"
                    title="WhatsApp"
                >
                    <div className="bg-green-500 hover:bg-green-600 rounded-full p-3 flex items-center justify-center shadow-lg transition">
                        <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 32 32">
                            <path d="M16.001 3.2c-7.06 0-12.8 5.74-12.8 12.8 0 2.26.6 4.47 1.74 6.41l-1.84 6.73a1.07 1.07 0 001.31 1.31l6.73-1.84a12.77 12.77 0 006.41 1.74c7.06 0 12.8-5.74 12.8-12.8s-5.74-12.8-12.8-12.8zm0 23.04c-2.01 0-3.99-.53-5.71-1.53l-.41-.24-4.01 1.1 1.1-4.01-.24-.41a10.7 10.7 0 01-1.53-5.71c0-5.91 4.81-10.72 10.72-10.72s10.72 4.81 10.72 10.72-4.81 10.72-10.72 10.72zm5.87-8.09c-.32-.16-1.89-.93-2.18-1.04-.29-.11-.5-.16-.71.16-.21.32-.82 1.04-1.01 1.25-.18.21-.37.24-.69.08-.32-.16-1.35-.5-2.57-1.6-.95-.85-1.59-1.89-1.78-2.21-.19-.32-.02-.49.14-.65.14-.14.32-.37.48-.56.16-.19.21-.32.32-.53.11-.21.05-.4-.03-.56-.08-.16-.71-1.71-.97-2.34-.26-.62-.53-.54-.71-.55-.18-.01-.4-.01-.62-.01-.21 0-.56.08-.85.4-.29.32-1.12 1.09-1.12 2.66 0 1.57 1.14 3.09 1.3 3.3.16.21 2.24 3.42 5.43 4.66.76.33 1.35.53 1.81.68.76.24 1.45.21 2 .13.61-.09 1.89-.77 2.16-1.52.27-.75.27-1.39.19-1.52-.08-.13-.29-.21-.61-.37z"/>
                        </svg>
                    </div>
                </a>
            </div>
        </div>
    </div>
)
}

export default Contact
