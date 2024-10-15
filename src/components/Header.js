import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import logo from './assets/logo.png'; // Ensure the logo path is correct

const Header = () => {
    const [activeLink, setActiveLink] = useState('home');
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    const navItems = ['Home', 'About', 'Events', 'Team', 'Contact'];

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            const sections = navItems.map(item => item.toLowerCase());

            for (let i = sections.length - 1; i >= 0; i--) {
                const section = document.getElementById(sections[i]);
                if (section && section.offsetTop <= scrollPosition + 100) {
                    setActiveLink(sections[i]);
                    break;
                }
            }

            setIsScrolled(scrollPosition > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleNavClick = (e, target) => {
        e.preventDefault();
        const element = document.getElementById(target);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
        setActiveLink(target);
        setIsMobileMenuOpen(false);
    };

    return (
        <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-gray-900 shadow-lg' : 'bg-transparent'}`}>
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">

                <div className="flex items-center">
                    <img src={logo} alt="Logo" className="h-8" />
                </div>
                <nav className={`${isMobileMenuOpen ? 'fixed inset-0 bg-gray-900 bg-opacity-95 z-50' : 'hidden'} md:block`}>
                    <ul className="md:flex md:space-x-8 h-full flex flex-col md:flex-row items-center justify-center">
                        {navItems.map((item) => (
                            <li key={item} className="mb-6 md:mb-0">
                                <a
                                    href={`#${item.toLowerCase()}`}
                                    className={`text-white text-xl md:text-base hover:text-blue-400 transition-colors duration-300 ${
                                        activeLink === item.toLowerCase() ? 'border-b-2 border-blue-400' : ''
                                    }`}
                                    onClick={(e) => handleNavClick(e, item.toLowerCase())}
                                >
                                    {item}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
                <button
                    className="md:hidden text-white focus:outline-none z-50"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>
        </header>
    );
};

export default Header;
