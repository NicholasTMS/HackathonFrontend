import React, { useState } from 'react';
import PriceBadge from '../components/PriceBadge';
import type { Category } from '../components/courseTypes';

const categories: Category = {
    Popular: [
        { title: 'Algebra Basics', author: 'Dr. Smith', price: 'Free' },
        { title: 'Organic Chemistry', author: 'Prof. Davis', price: 'Free' },
        { title: 'Cell Biology', author: 'Prof. Clark', price: 'Free' },
        { title: 'Mechanics', author: 'Dr. Wilson', price: 'Free' },
        { title: 'Calculus I', author: 'Prof. Johnson', price: '$49.99' },
        { title: 'Inorganic Chemistry', author: 'Dr. Patel', price: '$59.99' },
        { title: 'Genetics', author: 'Dr. Martinez', price: '$69.99' },
        { title: 'Electromagnetism', author: 'Prof. Harris', price: '$79.99' },
    ],
    Mathematics: [
        { title: 'Algebra Basics', author: 'Dr. Smith', price: 'Free' },
        { title: 'Calculus I', author: 'Prof. Johnson', price: '$49.99' },
        { title: 'Geometry', author: 'Dr. Lee', price: '$39.99' },
        { title: 'Linear Algebra', author: 'Dr. White', price: '$59.99' },
        { title: 'Differential Equations', author: 'Prof. Brown', price: '$69.99' },
        { title: 'Statistics', author: 'Dr. Green', price: '$79.99' },
        { title: 'Number Theory', author: 'Prof. Black', price: '$89.99' },
        { title: 'Topology', author: 'Dr. Blue', price: '$99.99' },
    ],
    Chemistry: [
        { title: 'Organic Chemistry', author: 'Prof. Davis', price: 'Free' },
        { title: 'Inorganic Chemistry', author: 'Dr. Patel', price: '$59.99' },
        { title: 'Physical Chemistry', author: 'Dr. Kim', price: '$49.99' },
        { title: 'Analytical Chemistry', author: 'Prof. White', price: '$69.99' },
        { title: 'Biochemistry', author: 'Dr. Green', price: '$79.99' },
        { title: 'Environmental Chemistry', author: 'Prof. Black', price: '$89.99' },
        { title: 'Medicinal Chemistry', author: 'Dr. Blue', price: '$99.99' },
        { title: 'Polymer Chemistry', author: 'Prof. Brown', price: '$109.99' },
    ],
    Biology: [
        { title: 'Cell Biology', author: 'Prof. Clark', price: 'Free' },
        { title: 'Genetics', author: 'Dr. Martinez', price: '$69.99' },
        { title: 'Ecology', author: 'Prof. Taylor', price: '$59.99' },
        { title: 'Evolutionary Biology', author: 'Dr. White', price: '$79.99' },
        { title: 'Microbiology', author: 'Prof. Brown', price: '$89.99' },
        { title: 'Immunology', author: 'Dr. Green', price: '$99.99' },
        { title: 'Neurobiology', author: 'Prof. Black', price: '$109.99' },
        { title: 'Marine Biology', author: 'Dr. Blue', price: '$119.99' },
    ],
    Physics: [
        { title: 'Mechanics', author: 'Dr. Wilson', price: 'Free' },
        { title: 'Electromagnetism', author: 'Prof. Harris', price: '$79.99' },
        { title: 'Quantum Physics', author: 'Dr. Lewis', price: '$89.99' },
        { title: 'Thermodynamics', author: 'Prof. White', price: '$99.99' },
        { title: 'Optics', author: 'Dr. Green', price: '$109.99' },
        { title: 'Astrophysics', author: 'Prof. Black', price: '$119.99' },
        { title: 'Particle Physics', author: 'Dr. Blue', price: '$129.99' },
        { title: 'Nuclear Physics', author: 'Prof. Brown', price: '$139.99' },
    ],
};

const Courses: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const filteredCategories = Object.entries(categories).map(([category, courses]) => {
        const filteredCourses = courses.filter(course =>
            course.title.toLowerCase().includes(searchTerm.toLowerCase())
        );
        return { category, courses: filteredCourses };
    });

    const scroll = (containerId: string, direction: 'left' | 'right') => {
        const container = document.getElementById(containerId);
        if (container) {
            const scrollAmount = direction === 'left' ? -300 : 300;
            container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
    };

    return (
        <div className="min-h-screen bg-gray-100">
            {/* Search Bar */}
            <section className="p-6">
                <div className="max-w-6xl mx-auto">
                    <input
                        type="text"
                        placeholder="Search courses..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full p-3 rounded-md border border-gray-300 focus:border-indigo-500 focus:outline-none"
                    />
                </div>
            </section>

            {/* Course Categories */}
            <section className="p-6 space-y-10">
                {filteredCategories.map(({ category, courses }) => (
                    <div key={category}>
                        <h2 className="mb-4 text-2xl font-semibold">{category}</h2>
                        <div className="relative">
                            <div
                                id={`${category}-scroll-container`}
                                className="scroll-container overflow-x-auto flex space-x-6 pb-4"
                            >
                                {courses.map((course, idx) => (
                                    <div
                                        key={idx}
                                        className="w-72 flex-none bg-white p-5 rounded-lg shadow hover:shadow-md transition"
                                    >
                                        <div className="h-40 bg-gray-200 rounded mb-3" />
                                        <h3 className="font-semibold">{course.title}</h3>
                                        <p className="text-gray-500 text-sm">by {course.author}</p>
                                        <div className="mt-2">
                                            <PriceBadge price={course.price} />
                                        </div>
                                    </div>
                                ))}
                            </div>
                            {/* Navigation Buttons */}
                            <button
                                onClick={() => scroll(`${category}-scroll-container`, 'left')}
                                className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-800 text-white p-3 rounded-full shadow-lg hover:bg-gray-700 transition"
                            >
                                &lt;
                            </button>
                            <button
                                onClick={() => scroll(`${category}-scroll-container`, 'right')}
                                className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-800 text-white p-3 rounded-full shadow-lg hover:bg-gray-700 transition"
                            >
                                &gt;
                            </button>
                        </div>
                    </div>
                ))}
            </section>
        </div>
    );
};

export default Courses;










