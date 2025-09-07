// Home.tsx

interface NewsItem {
    title: string;
    description: string;
}

interface Course {
    title: string;
    description: string;
}

interface Instructor {
    name: string;
    bio: string;
}

const news: NewsItem[] = [
    { title: "Tulearn Launches New AI Course", description: "Learn AI from scratch in this comprehensive course." },
    { title: "Scholarship Programs Available", description: "Check out our scholarship opportunities for students." },
    { title: "New Features Added", description: "Explore our updated course tracking and progress tools." },
];

const popularCourses: Course[] = [
    { title: "Calculus I", description: "Understand limits, derivatives, and integrals." },
    { title: "Organic Chemistry", description: "Dive into the study of carbon compounds." },
    { title: "Cell Biology", description: "Explore the structure and function of cells." },
];

const instructors: Instructor[] = [
    { name: "Dr. Smith", bio: "Expert in Mathematics and Physics." },
    { name: "Prof. Davis", bio: "Specialist in Chemistry and Biochemistry." },
    { name: "Prof. Taylor", bio: "Biology researcher and educator." },
];

export default function Home() {
    return (
        <div className="p-6 space-y-12">
            {/* Welcome Section */}
            <section>
                <h1 className="text-4xl font-bold">Welcome to Tulearn</h1>
                <p className="mt-2 text-gray-600">Explore courses, learn from experts, and advance your career.</p>
            </section>

            {/* Latest News */}
            <section>
                <h2 className="text-2xl font-semibold mb-4">Latest News</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {news.map((item, index) => (
                        <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition">
                            <div className="h-48 bg-gray-200 animate-pulse" />
                            <div className="p-4">
                                <h3 className="text-xl font-semibold">{item.title}</h3>
                                <p className="mt-2 text-gray-600">{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Most Popular Courses */}
            <section>
                <h2 className="text-2xl font-semibold mb-4">Most Popular Courses</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {popularCourses.map((course, index) => (
                        <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition">
                            <div className="h-48 bg-gray-200 animate-pulse" />
                            <div className="p-4">
                                <h3 className="text-xl font-semibold">{course.title}</h3>
                                <p className="mt-2 text-gray-600">{course.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Featured Instructors */}
            <section>
                <h2 className="text-2xl font-semibold mb-4">Featured Instructors</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {instructors.map((instructor, index) => (
                        <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition">
                            <div className="h-48 bg-gray-400" />
                            <div className="p-4">
                                <h3 className="text-xl font-semibold">{instructor.name}</h3>
                                <p className="mt-2 text-gray-600">{instructor.bio}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}






