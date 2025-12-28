import React, { useState } from 'react';
import { categories, listings } from './constants';
import PropertyCard from './components/propertyCard';
import Footer from './components/footer';

const App: React.FC = () => {
    const [activeCategory, setActiveCategory] = useState('Villa');
    const [activeFilter, setActiveFilter] = useState('All');

    const filters = ['All', 'Top Villa', 'Free Reschedule', 'Book Now, Pay later', 'Self Checkin', 'Instant Book'];

    return (
        <div className="min-h-screen flex flex-col font-sans">
            <header className="bg-white sticky top-0 z-20 shadow-sm">
                <div className="bg-[#2d9d92] text-white text-sm text-center py-2 px-4">
                    <p>
                        <span className="font-semibold">Overseas trip?</span> Get the latest information on travel guides.{' '}
                        <a href="#" className="bg-black bg-opacity-30 px-3 py-1 rounded-full text-xs font-semibold hover:bg-opacity-50 transition">More info</a>
                    </p>
                </div>
                <div className="container mx-auto px-4 md:px-8">
                    <div className="flex justify-between items-center py-4">
                        <div className="text-3xl font-bold text-teal-600">alx</div>
                        <div className="hidden md:flex items-center border rounded-full shadow-md py-2 px-4">
                            <div className="px-4 border-r">
                                <p className="font-semibold text-sm">Location</p>
                                <p className="text-xs text-gray-500">Search for destination</p>
                            </div>
                            <div className="px-4 border-r">
                                <p className="font-semibold text-sm">Check in</p>
                                <p className="text-xs text-gray-500">Add date</p>
                            </div>
                            <div className="px-4 border-r">
                                <p className="font-semibold text-sm">Check out</p>
                                <p className="text-xs text-gray-500">Add date</p>
                            </div>
                            <div className="px-4 flex items-center">
                                <div>
                                    <p className="font-semibold text-sm">People</p>
                                    <p className="text-xs text-gray-500">Add guest</p>
                                </div>
                                <button className="ml-4 bg-yellow-500 text-white p-2 rounded-full">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                                </button>
                            </div>
                        </div>
                        <div className="flex items-center space-x-2">
                            <button className="bg-[#2d9d92] text-white font-semibold px-6 py-2 rounded-full hover:bg-teal-700 transition">Sign in</button>
                            <button className="font-semibold px-6 py-2 rounded-full hover:bg-gray-100 transition">Sign up</button>
                        </div>
                    </div>
                </div>
                <div className="border-t">
                    <div className="container mx-auto px-4 md:px-8 flex justify-center space-x-6 overflow-x-auto py-3">
                        {categories.map((category) => (
                            <button 
                                key={category.name}
                                onClick={() => setActiveCategory(category.name)}
                                className={`flex flex-col items-center space-y-2 flex-shrink-0 group ${activeCategory === category.name ? 'text-teal-600' : 'text-gray-500 hover:text-gray-800'}`}
                            >
                                <category.icon className="w-6 h-6"/>
                                <span className={`text-xs font-semibold transition-colors ${activeCategory === category.name ? 'border-b-2 border-teal-600' : ''}`}>{category.name}</span>
                            </button>
                        ))}
                    </div>
                </div>
            </header>

            <main className="flex-grow">
                <div className="relative h-96 md:h-[500px] flex items-center justify-center text-white">
                    <img src="https://picsum.photos/seed/hero/1600/600" alt="Mountain landscape" className="absolute inset-0 w-full h-full object-cover"/>
                    <div className="absolute inset-0 bg-black bg-opacity-30"></div>
                    <div className="relative text-center px-4">
                        <h1 className="text-4xl md:text-6xl font-bold">Find your favorite</h1>
                        <h1 className="text-4xl md:text-6xl font-bold mt-2">place here!</h1>
                        <p className="mt-4 text-lg">The best prices for over 2 million properties worldwide</p>
                    </div>
                </div>

                <div className="container mx-auto px-4 md:px-8 py-6">
                     <div className="flex flex-wrap items-center gap-2 md:gap-4 my-4">
                        {filters.map(filter => (
                            <button 
                                key={filter}
                                onClick={() => setActiveFilter(filter)}
                                className={`px-4 py-2 text-sm font-medium border rounded-full transition-colors ${activeFilter === filter ? 'bg-teal-600 text-white border-teal-600' : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-100'}`}
                            >
                                {filter}
                            </button>
                        ))}
                        <div className="flex-grow"></div>
                        <div className="flex items-center space-x-4">
                            <button className="px-4 py-2 text-sm font-medium border rounded-full flex items-center space-x-2">
                                <span>Filter</span>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 4h18M7 12h10M10 20h4" /></svg>
                            </button>
                             <button className="px-4 py-2 text-sm font-medium border rounded-full">
                                Sort by: <span className="font-semibold">Highest Price</span>
                            </button>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-4">
                        {listings.map(listing => (
                            <PropertyCard key={listing.id} listing={listing} />
                        ))}
                    </div>

                    <div className="text-center my-10">
                        <button className="bg-black text-white font-semibold px-6 py-3 rounded-full hover:bg-gray-800 transition">
                            Show more
                        </button>
                        <p className="text-sm text-gray-500 mt-2">Click to see more listings</p>
                    </div>
                </div>
            </main>
            
            <Footer />
        </div>
    );
};

export default App;