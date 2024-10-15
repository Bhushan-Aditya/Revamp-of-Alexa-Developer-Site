import React, { useState, useEffect } from 'react';
import { Calendar, Clock, MapPin, Mic, Code, Briefcase } from 'lucide-react';

const getEventIcon = (title) => {
    if (title.toLowerCase().includes("workshop")) {
        return <Mic size={48} className="text-blue-500 mb-4" />;
    } else if (title.toLowerCase().includes("hackathon")) {
        return <Code size={48} className="text-green-500 mb-4" />;
    } else if (title.toLowerCase().includes("seminar")) {
        return <Briefcase size={48} className="text-purple-500 mb-4" />;
    }
    return <Mic size={48} className="text-blue-500 mb-4" />;
};

const EventCard = ({ title, date, description, location }) => (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105">
        <div className="p-6 text-center">

            {getEventIcon(title)}
            <h3 className="text-xl font-semibold mb-2">{title}</h3>
            <div className="flex items-center justify-center text-gray-600 mb-2">
                <Calendar size={16} className="mr-2" />
                <span>{date}</span>
            </div>
            <div className="flex items-center justify-center text-gray-600 mb-4">
                <MapPin size={16} className="mr-2" />
                <span>{location}</span>
            </div>
            <p className="text-gray-700 mb-4">{description}</p>
            <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300">
                Learn More
            </button>
        </div>
    </div>
);

const Events = () => {
    const [events, setEvents] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Simulating an API call
        const fetchEvents = () => {
            setTimeout(() => {
                setEvents([
                    {
                        id: 1,
                        title: "Alexa Skill Workshop",
                        date: "May 15, 2024",
                        description: "An interactive workshop to build Alexa skills from scratch.",
                        location: "SRM IST, Chennai"
                    },
                    {
                        id: 2,
                        title: "Voice UI Hackathon",
                        date: "June 22-23, 2024",
                        description: "A 48-hour hackathon to create innovative Voice UIs.",
                        location: "Online"
                    },
                    {
                        id: 3,
                        title: "Alexa for Business Seminar",
                        date: "July 10, 2024",
                        description: "A seminar exploring how Alexa can transform businesses.",
                        location: "SRM IST, Chennai"
                    }
                ]);
                setLoading(false);
            }, 1500);
        };

        fetchEvents();
    }, []);

    return (
        <section id="events" className="py-20 bg-gray-100">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold text-center mb-12">Upcoming Events</h2>
                {loading ? (
                    <div className="flex justify-center items-center h-64">
                        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-500"></div>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {events.map((event) => (
                            <EventCard key={event.id} {...event} />
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
};

export default Events;
