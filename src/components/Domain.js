import React from 'react';
import { Code, Server, Cloud, Shield } from 'lucide-react';
import { FaEthereum, FaLaptopCode } from 'react-icons/fa';

const domains = [
    {
        id: 1,
        name: "Web Development",
        description: "Building responsive and high-performance web applications.",
        icon: FaLaptopCode
    },
    {
        id: 2,
        name: "AI/ML",
        description: "Designing intelligent systems and models for automation.",
        icon: Code
    },
    {
        id: 3,
        name: "Blockchain",
        description: "Developing decentralized applications using blockchain technology.",
        icon: FaEthereum
    },
    {
        id: 4,
        name: "Cloud Computing",
        description: "Leveraging cloud infrastructure for scalable applications.",
        icon: Cloud
    },
    {
        id: 5,
        name: "Cybersecurity",
        description: "Ensuring the security and privacy of digital assets.",
        icon: Shield
    }
    // Add more domains if necessary...
];

const DomainCard = ({ name, description, icon: Icon }) => (
    <div className="bg-white rounded-lg shadow-lg p-6 transition-transform duration-300 hover:scale-105 text-center">
        <Icon size={48} className="text-blue-500 mb-4 mx-auto" /> {/* Display relevant domain icon */}
        <h3 className="text-xl font-semibold mb-2">{name}</h3>
        <p className="text-gray-600">{description}</p>
    </div>
);

const Domains = () => {
    return (
        <section id="domains" className="py-20 bg-gray-100">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold text-center mb-12">Our Domains</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {domains.map((domain) => (
                        <DomainCard key={domain.id} {...domain} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Domains;
