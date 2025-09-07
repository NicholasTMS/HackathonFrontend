//import React from "react";

const roadmaps = [
    {
        title: "Frontend Developer",
        description: "Step-by-step guide to becoming a modern frontend developer.",
    },
    {
        title: "Backend Developer",
        description: "Everything you need to learn to become a backend developer.",
    },
    {
        title: "DevOps Engineer",
        description: "Learn the skills required to become a DevOps engineer.",
    },
    {
        title: "React Developer",
        description: "A focused roadmap for mastering React.",
    },
];

export default function Roadmaps() {
    return (
        <div className="p-6 max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold mb-4">Roadmaps</h1>
            <p className="mb-6 text-gray-700">
                Choose a roadmap to start your learning journey. Each roadmap provides a structured path with recommended topics and resources.
            </p>
            <div className="grid gap-6 md:grid-cols-2">
                {roadmaps.map((roadmap, idx) => (
                    <div key={idx} className="bg-white rounded shadow p-5 flex flex-col justify-between">
                        <div>
                            <h2 className="text-xl font-semibold mb-2">{roadmap.title}</h2>
                            <p className="text-gray-600 mb-4">{roadmap.description}</p>
                        </div>
                        <button
                            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 font-semibold transition self-start"
                        >
                            View Roadmap
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}