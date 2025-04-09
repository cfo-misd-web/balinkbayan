export default function Footer() {
    return (
        <footer className="relative w-full bg-teal-800 text-white">
            {/* Overlay with semi-transparent background */}
            <div className="absolute inset-0 bg-teal-900/80 z-0"></div>

            <div className="w-full relative z-10 container mx-auto px-4 py-16">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {/* Mailing List Section */}
                    <div className="space-y-6">
                        <h2 className="text-2xl font-bold">Join our Mailing List</h2>
                        <p className="text-gray-200">Get the latest news and trends delivered to your inbox.</p>
                        <div className="space-y-3">
                            <input
                                type="email"
                                placeholder="Enter your email..."
                                className="flex px-4 py-3 bg-white text-gray-800 border border-gray-300 rounded-none"
                            />
                            <button className="w-32 h-10 bg-amber-400 hover:bg-amber-500 text-white uppercase font-medium">
                                SUBSCRIBE
                            </button>
                        </div>
                    </div>

                    {/* Our Services Section */}
                    <div className="space-y-6">
                        <h2 className="text-xl font-bold">Our Services</h2>
                        <ul className="space-y-4">
                            <li className="flex items-center">
                                <span className="mr-2 text-gray-300">—</span>
                                <a href="#" className="hover:underline">
                                    Start a Business
                                </a>
                            </li>
                            <li className="flex items-center">
                                <span className="mr-2 text-gray-300">—</span>
                                <a href="#" className="hover:underline">
                                    Donate and Volunteer
                                </a>
                            </li>
                            <li className="flex items-center">
                                <span className="mr-2 text-gray-300">—</span>
                                <a href="#" className="hover:underline">
                                    Access Government Services
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Get in Touch Section */}
                    <div className="space-y-6">
                        <h2 className="text-xl font-bold">Get in touch</h2>
                        <ul className="space-y-4">
                            <li className="flex items-center">
                                <svg
                                    className="mr-3 h-5 w-5"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                                </svg>
                                <a href="#" className="hover:underline">
                                    Facebook
                                </a>
                            </li>
                            <li className="flex items-center">
                                <svg
                                    className="mr-3 h-5 w-5"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                                </svg>
                                <a href="#" className="hover:underline">
                                    YouTube
                                </a>
                            </li>
                            <li className="flex items-center">
                                <svg
                                    className="mr-3 h-5 w-5"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                    />
                                </svg>
                                <a href="#" className="hover:underline">
                                    pmd@cfo.gov.ph
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="relative z-10 border-t border-teal-700">
                <div className="container w-full mx-auto px-4 py-4 flex flex-col sm:flex-row justify-between items-center">
                    <div className="text-xs text-gray-300 uppercase tracking-wider">COPYRIGHT © 2023 BALIKBAYAN</div>
                    <div className="text-xs text-gray-300 uppercase tracking-wider mt-2 sm:mt-0">POWERED BY BALIKBAYAN</div>
                </div>
            </div>
        </footer>
    )
}

