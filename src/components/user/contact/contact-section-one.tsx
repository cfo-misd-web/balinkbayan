"use client";

import React, { useState } from 'react';

const ContactSectionOne: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log('Form submitted:', formData);
    };

    return (
        <div className="flex justify-center w-full py-16 bg-inherit">
            <div className="w-full justify-center flex flex-row max-lg:flex-col     gap-12 max-lg:px-4">
                {/* Form Section */}
                <div className="w-2/3 lg:min-w-[600px] flex flex-col max-lg:w-full max-lg:px-[20px]">
                    <div className="flex items-center gap-3 mb-2">
                        <h2 className="text-3xl font-bold text-gray-800">Contact Us</h2>
                        <div className="h-1 w-24 bg-orange-400"></div>
                    </div>

                    <h3 className="text-2xl font-semibold text-teal-700 mb-8">Send us a message</h3>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                                Your name
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                                Your email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div>
                            <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                                Subject
                            </label>
                            <input
                                type="text"
                                id="subject"
                                name="subject"
                                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                                value={formData.subject}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                                Your message (optional)
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                                rows={6}
                                value={formData.message}
                                onChange={handleChange}
                            />
                        </div>

                        <div>
                            <button
                                type="submit"
                                className="px-8 py-3 bg-[#F5A623] text-white font-semibold rounded hover:bg-[#e09010] transition-colors uppercase text-sm tracking-wide"
                            >
                                SUBMIT
                            </button>
                        </div>
                    </form>
                </div>

                {/* Social Section */}
                <div className="w-1/3 max-lg:w-full mt-8 lg:mt-0">
                    <h3 className="text-xl font-semibold text-teal-700 mb-6">Like us on Facebook</h3>

                    <div className="flex w-full border border-gray-300 bg-white p-1.5 rounded-md shadow-sm h-fit">
                        <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fweb.facebook.com%2FCFOGovPH&tabs=timeline&width=500&height=100&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId" width="500" height="100" style={{ "border": "none", "overflow": "hidden" }} scrolling="no" frameBorder="0" allowFullScreen={true} allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactSectionOne;