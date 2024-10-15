import React from 'react';
import logo from './assets/logo.png'; // Correct import of the logo
import { Instagram, Facebook, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-gray-900 text-white py-12">
            <div className="container mx-auto px-4">
                <div className="flex flex-wrap -mx-4">
                    <div className="w-full md:w-1/3 px-4 mb-8 md:mb-0">
                        <img src={logo} alt="AlexaDevSRM Logo" className="mb-4" />
                        <p className="text-gray-400 mb-4">Empowering voice technology enthusiasts and innovators.</p>
                        <div className="flex space-x-4">
                            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                                <Instagram size={20} />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                                <Facebook size={20} />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                                <Linkedin size={20} />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                                <Twitter size={20} />
                            </a>
                        </div>
                    </div>
                    <div className="w-full md:w-1/3 px-4 mb-8 md:mb-0">
                        <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            <li><a href="#home" className="text-gray-400 hover:text-white transition-colors duration-300">Home</a></li>
                            <li><a href="#about" className="text-gray-400 hover:text-white transition-colors duration-300">About</a></li>
                            <li><a href="#events" className="text-gray-400 hover:text-white transition-colors duration-300">Events</a></li>
                            <li><a href="#team" className="text-gray-400 hover:text-white transition-colors duration-300">Team</a></li>
                            <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors duration-300">Contact</a></li>
                        </ul>
                    </div>
                    <div className="w-full md:w-1/3 px-4">
                        <h3 className="text-xl font-semibold mb-4">Newsletter</h3>
                        <p className="text-gray-400 mb-4">Stay updated with our latest news and events.</p>
                        <form className="flex">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="bg-gray-800 text-white px-4 py-2 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500 flex-grow"
                            />
                            <button
                                type="submit"
                                className="bg-blue-500 text-white px-4 py-2 rounded-r-lg hover:bg-blue-600 transition duration-300"
                            >
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>
                <div className="border-t border-gray-800 mt-12 pt-8 text-center">
                    <p className="text-gray-400">&copy; {currentYear} AlexaDevSRM. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
