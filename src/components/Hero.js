import React from 'react';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
    const scrollToAbout = () => {
        const aboutSection = document.getElementById('about');
        if (aboutSection) {
            aboutSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section id="home" className="relative h-screen flex items-center justify-center bg-gradient-to-r from-blue-600 to-purple-600 text-white overflow-hidden">
            <div className="container mx-auto px-4 text-center z-10">
                <h1 className="text-5xl md:text-6xl font-bold mb-6">Welcome to Alexa Developers SRM</h1>
                <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">Your gateway to mastering Alexa skill development and becoming part of a vibrant tech community.</p>
                <p className="text-lg md:text-xl italic mb-12">"Voices United, Tech Amplified"</p>
                <button
                    onClick={scrollToAbout}
                    className="bg-white text-blue-600 font-bold py-3 px-8 rounded-full hover:bg-blue-100 transition duration-300"
                >
                    Discover More
                </button>
            </div>
            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
                <ChevronDown size={36} color="white" />
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-30"></div>
            {[...Array(5)].map((_, index) => (
                <div
                    key={index}
                    className="absolute bg-white opacity-10 rounded-full"
                    style={{
                        top: `${Math.random() * 100}%`,
                        left: `${Math.random() * 100}%`,
                        width: `${Math.random() * 300 + 50}px`,
                        height: `${Math.random() * 300 + 50}px`,
                        animation: `float ${Math.random() * 10 + 5}s infinite ease-in-out`
                    }}
                ></div>
            ))}
        </section>
    );
};

export default Hero;