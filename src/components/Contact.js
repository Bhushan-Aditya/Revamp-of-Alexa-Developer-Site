import React, { useState } from 'react';
import { Send, MapPin, Phone, Mail } from 'lucide-react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const validateForm = () => {
        let tempErrors = {};
        if (!formData.name.trim()) tempErrors.name = "Name is required";
        if (!formData.email.trim()) {
            tempErrors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            tempErrors.email = "Email is invalid";
        }
        if (!formData.message.trim()) tempErrors.message = "Message is required";
        setErrors(tempErrors);
        return Object.keys(tempErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            console.log('Form submitted:', formData);
            setFormData({ name: '', email: '', message: '' });
            alert('Thank you for your message! We will get back to you soon.');
        }
    };

    return (
        <section id="contact" className="py-20 bg-gray-100">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold text-center mb-12">Contact Us</h2>
                <div className="flex flex-wrap -mx-4">
                    <div className="w-full lg:w-1/2 px-4 mb-8 lg:mb-0">
                        <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-lg p-8">
                            <div className="mb-6">
                                <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 ${errors.name ? 'border-red-500' : 'focus:ring-blue-500'}`}
                                />
                                {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                            </div>
                            <div className="mb-6">
                                <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 ${errors.email ? 'border-red-500' : 'focus:ring-blue-500'}`}
                                />
                                {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                            </div>
                            <div className="mb-6">
                                <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows="5"
                                    className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 ${errors.message ? 'border-red-500' : 'focus:ring-blue-500'}`}
                                ></textarea>
                                {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
                            </div>
                            <button type="submit" className="w-full bg-blue-500 text-white py-3 px-4 rounded-lg hover:bg-blue-600 transition duration-300 flex items-center justify-center">
                                <Send size={20} className="mr-2" />
                                Send Message
                            </button>
                        </form>
                    </div>
                    <div className="w-full lg:w-1/2 px-4">
                        <div className="bg-white rounded-lg shadow-lg p-8 h-full">
                            <h3 className="text-2xl font-semibold mb-6">Get in Touch</h3>
                            <div className="space-y-6">
                                <div className="flex items-start">
                                    <MapPin size={24} className="text-blue-500 mr-4" />
                                    <div>
                                        <h4 className="font-semibold">Address</h4>
                                        <p>SRM Institute of Science and Technology, Kattankulathur, Chennai - 603203</p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <Phone size={24} className="text-blue-500 mr-4" />
                                    <div>
                                        <h4 className="font-semibold">Phone</h4>
                                        <p>+91 1234567890</p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <Mail size={24} className="text-blue-500 mr-4" />
                                    <div>
                                        <h4 className="font-semibold">Email</h4>
                                        <p>contact@alexadevsrm.com</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;