import React from 'react';
import { Users, Code, Lightbulb } from 'lucide-react';
import logo from './assets/hero-img.png';

const AboutCard = ({ icon: Icon, title, description }) => (
    <div className="bg-white p-6 rounded-lg shadow-lg">
        <Icon size={48} className="text-blue-500 mb-4" />
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
    </div>
);

const About = () => {
    const features = [
        {
            icon: Users,
            title: "Community",
            description: "Join a thriving network of tech enthusiasts and innovators."
        },
        {
            icon: Code,
            title: "Skill Development",
            description: "Master Alexa skill development through hands-on workshops and projects."
        },
        {
            icon: Lightbulb,
            title: "Innovation",
            description: "Explore cutting-edge voice technology and push the boundaries of what's possible."
        }
    ];

    return (
        <section id="about" className="py-20 bg-gray-100">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold text-center mb-12">About Us</h2>
                <div className="flex flex-col md:flex-row items-center mb-16">
                    <div className="md:w-1/2 mb-8 md:mb-0">

                        <img
                            src={logo}
                            alt="About Us Hero"
                            className="rounded-lg shadow-lg"
                        />
                    </div>
                    <div className="md:w-1/2 md:pl-12">
                        <p className="text-lg mb-6">
                            Welcome to Alexa Developers SRM, a thriving, student-run
                            technical organization at SRMIST that brings technology and
                            community together. We create an open atmosphere for tech
                            enthusiasts to explore, learn, and grow, with a focus on
                            voice-controlled technologies, application development, and
                            UI/UX design via hands-on events and workshops.
                        </p>
                        <p className="text-lg">
                            Our club is a hotbed of collaboration and innovation, where
                            members can experiment, share expertise, and make a real
                            difference. Whether you're a newcomer to technology or a seasoned
                            professional, our wide range of workshops, hackathons, and
                            contests provide ongoing learning and practical skills development.
                        </p>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <AboutCard key={index} {...feature} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default About;
