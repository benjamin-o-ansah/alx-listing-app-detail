import React from 'react';

const Footer: React.FC = () => {
    const footerLinks = {
        Explore: ['Apartments in Dubai', 'Hotels in New York', 'Villa in Spain', 'Mansion in Indonesia'],
        Company: ['About us', 'Blog', 'Career', 'Customers', 'Brand'],
        Help: ['Support', 'Cancel booking', 'Refunds Process'],
    };

    return (
        <footer className="bg-[#222222] text-white pt-16 pb-8">
            <div className="container mx-auto px-4 md:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="md:col-span-1 pr-8">
                        <h2 className="text-3xl font-bold mb-4">alx</h2>
                        <p className="text-gray-400 text-sm">
                            ALX is a platform where travelers can discover and book unique, comfortable, and affordable lodging options worldwide. From cozy city apartments and tranquil countryside retreats to exotic beachside villas, ALX connects you with the perfect place to stay for any trip.
                        </p>
                    </div>
                    
                    <div className="md:col-span-3 grid grid-cols-2 md:grid-cols-3 gap-8">
                        {Object.entries(footerLinks).map(([title, links]) => (
                            <div key={title}>
                                <h3 className="font-bold text-lg mb-4">{title}</h3>
                                <ul className="space-y-2">
                                    {links.map(link => (
                                        <li key={link}>
                                            <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">{link}</a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="border-t border-gray-700 mt-12 pt-8">
                     <p className="text-gray-400 text-sm mb-6">Some hotel requires you to cancel more than 24 hours before check-in. Details <a href="#" className="text-teal-400 hover:underline">here</a>.</p>
                    <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
                        <p>&copy; {new Date().getFullYear()} ALX, Inc. All rights reserved.</p>
                        <div className="flex space-x-4 mt-4 md:mt-0">
                            <a href="#" className="hover:text-white">Terms of Service</a>
                            <a href="#" className="hover:text-white">Policy service</a>
                            <a href="#" className="hover:text-white">Cookies Policy</a>
                            <a href="#" className="hover:text-white">Partners</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;