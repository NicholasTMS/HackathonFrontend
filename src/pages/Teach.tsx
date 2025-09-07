export default function Teach() {
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
                        <button className="bg-blue-600 text-white px-6 py-2 rounded font-semibold hover:bg-blue-700 transition">
                            Get started
                        </button>
                    </div>
                    <div className="flex-1 flex justify-center">
                        {/* Replace src with your own image if available */}
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
                                {/* Icon placeholder */}
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

            {/* Stats Section */}
            <section className="bg-blue-700 py-10">
                <div className="max-w-5xl mx-auto px-6 grid grid-cols-2 md:grid-cols-5 gap-6 text-center text-white font-semibold">

                </div>
            </section>
        </div>
    );
}