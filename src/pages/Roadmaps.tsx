const subjects = [
    {
        title: "Mathematics",
        description: "A step-by-step guide to mastering key math concepts and problem-solving skills.",
    },
    {
        title: "Chemistry",
        description: "Explore the foundations of chemistry, from atoms to reactions and lab work.",
    },
    {
        title: "Biology",
        description: "Understand the science of life, from cells to ecosystems.",
    },
    {
        title: "Physics",
        description: "Learn the principles of matter, motion, and energy through structured topics.",
    },
];

export default function Roadmaps() {
    return (
        <div className="p-6 max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold mb-4">Subjects</h1>
            <p className="mb-6 text-gray-700">
                Choose a subject to begin your learning journey. Each subject provides a structured path with recommended topics and resources.
            </p>
            <div className="grid gap-6 md:grid-cols-2">
                {subjects.map((subject, idx) => (
                    <div key={idx} className="bg-white rounded shadow p-5 flex flex-col justify-between">
                        <div>
                            <h2 className="text-xl font-semibold mb-2">{subject.title}</h2>
                            <p className="text-gray-600 mb-4">{subject.description}</p>
                        </div>
                        <button
                            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 font-semibold transition self-start"
                        >
                            View Subject
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}
