import { useNavigate } from "react-router-dom";

export default function Teach() {
    const navigate = useNavigate();

    const handleGetStarted = () => {
        navigate("/signup");
    };

    return (
        <div>
            {/* Hero Section */}
            <section className="bg-gray-100 py-12">
                <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center px-6">
                    <div className="flex-1 mb-8 md:mb-0">
                        <h1 className="text-4xl font-bold mb-4">Come teach with us</h1>
                        <p className="mb-6 text-gray-700">
                            Become an instructor and change lives — including your own.
                        </p>
                        <button
                            className="bg-blue-600 text-white px-6 py-2 rounded font-semibold hover:bg-blue-700 transition"
                            onClick={handleGetStarted}
                        >
                            Get started
                        </button>
                    </div>
                    <div className="flex-1 flex justify-center">
                        <img
                            src="/teach-hero.png"
                            alt="Teach with us"
                            className="w-64 h-64 object-cover rounded-lg shadow-lg bg-white"
                        />
                    </div>
                </div>
            </section>

            {/* Reasons Section */}
            <section className="py-12">
                <div className="max-w-4xl mx-auto px-6">
                    <h2 className="text-2xl font-bold text-center mb-10">So many reasons to start</h2>
                    <div className="grid md:grid-cols-3 gap-8 text-center">
                        <div>
                            <div className="mb-4 flex justify-center">
                                <span className="inline-block bg-blue-100 text-blue-600 rounded-full p-3">
                                    <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2"><path d="M8 24V8a4 4 0 014-4h8a4 4 0 014 4v16M4 24h24" /></svg>
                                </span>
                            </div>
                            <h3 className="font-semibold mb-2">Teach your way</h3>
                            <p className="text-gray-600 text-sm">
                                Publish the course you want, in the way you want, and always have control of your own content.
                            </p>
                        </div>
                        <div>
                            <div className="mb-4 flex justify-center">
                                <span className="inline-block bg-blue-100 text-blue-600 rounded-full p-3">
                                    <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="16" cy="16" r="12" /><path d="M12 16l4 4 4-4" /></svg>
                                </span>
                            </div>
                            <h3 className="font-semibold mb-2">Inspire learners</h3>
                            <p className="text-gray-600 text-sm">
                                Teach what you know and help learners explore their interests, gain new skills, and advance their careers.
                            </p>
                        </div>
                        <div>
                            <div className="mb-4 flex justify-center">
                                <span className="inline-block bg-blue-100 text-blue-600 rounded-full p-3">
                                    <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2"><path d="M16 4v24M4 16h24" /></svg>
                                </span>
                            </div>
                            <h3 className="font-semibold mb-2">Get rewarded</h3>
                            <p className="text-gray-600 text-sm">
                                Expand your professional network, build your expertise, and earn money on each paid enrollment.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* How to Start Section */}
            <section className="py-12 bg-gray-50">
                <div className="max-w-3xl mx-auto px-6">
                    <h2 className="text-2xl font-bold text-center mb-10">How to start</h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        {/* Plan your course structure */}
                        <div className="bg-white rounded-lg shadow p-6 flex flex-col items-center text-center">
                            <div className="mb-4 flex justify-center">
                                <span className="inline-block bg-blue-100 text-blue-600 rounded-full p-3">
                                    <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2">
                                        <rect x="6" y="8" width="20" height="16" rx="2" />
                                        <path d="M10 12h12M10 16h8" />
                                    </svg>
                                </span>
                            </div>
                            <h3 className="font-semibold mb-2">Plan your course structure</h3>
                            <p className="text-gray-600 text-sm">
                                Organize your topics, lessons, and objectives to create a clear and engaging learning path for your students.
                            </p>
                        </div>
                        {/* Upload your materials */}
                        <div className="bg-white rounded-lg shadow p-6 flex flex-col items-center text-center">
                            <div className="mb-4 flex justify-center">
                                <span className="inline-block bg-blue-100 text-blue-600 rounded-full p-3">
                                    <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M16 4v16m0 0l-6-6m6 6l6-6" />
                                        <rect x="4" y="20" width="24" height="6" rx="2" />
                                    </svg>
                                </span>
                            </div>
                            <h3 className="font-semibold mb-2">Upload your materials</h3>
                            <p className="text-gray-600 text-sm">
                                Add your videos, documents, and resources to make your course content accessible and valuable for learners.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 1-on-1 Tutoring Section */}
            <section className="py-12">
                <div className="max-w-2xl mx-auto px-6">
                    <h2 className="text-2xl font-bold text-center mb-6">Opt In for 1-on-1 Tutoring</h2>
                    <div className="bg-white rounded-lg shadow p-6 flex flex-col items-center text-center">
                        <div className="mb-4 flex justify-center">
                            <span className="inline-block bg-blue-100 text-blue-600 rounded-full p-3">
                                <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2">
                                    <circle cx="16" cy="12" r="6" />
                                    <path d="M4 26c0-4 5.333-6 12-6s12 2 12 6v2H4v-2z" />
                                    <path d="M20 24v-2a4 4 0 00-8 0v2" />
                                </svg>
                            </span>
                        </div>
                        <h3 className="font-semibold mb-2">Customisable rates</h3>
                        <p className="text-gray-600 text-sm mb-4">
                            Offer personalized 1-on-1 tutoring sessions and set your own rates to maximize your impact and earnings.
                        </p>
                        <button
                            className="bg-blue-600 text-white px-6 py-2 rounded font-semibold hover:bg-blue-700 transition"
                            onClick={handleGetStarted}
                        >
                            Get started
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
}