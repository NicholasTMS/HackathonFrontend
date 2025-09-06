export default function Courses() {
    const categories = {
        Mathematics: [
            { title: "Algebra Basics", desc: "Learn equations & functions" },
            { title: "Calculus I", desc: "Limits, derivatives, integrals" },
            { title: "Geometry", desc: "Shapes, angles & theorems" },
        ],
        Chemistry: [
            { title: "Organic Chemistry", desc: "Study of carbon compounds" },
            { title: "Inorganic Chemistry", desc: "Elements and periodic table" },
            { title: "Physical Chemistry", desc: "Thermodynamics & kinetics" },
        ],
        Biology: [
            { title: "Cell Biology", desc: "Structure & function of cells" },
            { title: "Genetics", desc: "DNA, inheritance, evolution" },
            { title: "Ecology", desc: "Ecosystems & biodiversity" },
        ],
        Physics: [
            { title: "Mechanics", desc: "Forces & motion" },
            { title: "Electromagnetism", desc: "Electricity & magnetism" },
            { title: "Quantum Physics", desc: "Particles & probability" },
        ],
    };

    return (
        <div className="min-h-screen bg-gray-100">

            {/* Search + Categories */}
            <section className="bg-white p-6">
                <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-4">
                    <input
                        type="text"
                        placeholder="Search courses..."
                        className="flex-grow p-3 rounded-md border border-gray-300 focus:border-indigo-500 focus:outline-none"
                    />
                    <div className="flex flex-wrap gap-2">
                        {Object.keys(categories).map((cat) => (
                            <button
                                key={cat}
                                className="px-4 py-2 bg-indigo-100 hover:bg-indigo-200 text-indigo-800 rounded-full text-sm transition"
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Panels for each category */}
            <section className="p-6 space-y-10">
                {Object.entries(categories).map(([cat, courses]) => (
                    <div key={cat}>
                        <h2 className="mb-4 text-2xl font-semibold">{cat}</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {courses.map((course, idx) => (
                                <div
                                    key={idx}
                                    className="bg-white p-5 rounded-lg shadow hover:shadow-md transition"
                                >
                                    <div className="h-24 bg-gray-200 rounded mb-3" />
                                    <h3 className="font-semibold">{course.title}</h3>
                                    <p className="text-gray-500 text-sm">{course.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </section>

            {/* Footer */}
            {/* <Footer /> */}
        </div>
    );
}




