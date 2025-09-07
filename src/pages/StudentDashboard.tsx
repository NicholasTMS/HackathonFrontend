// src/pages/StudentDashboard.tsx
import type { Course } from "../components/courseTypes";
import ProgressBar from "../components/ProgressBar";
import { Link } from "react-router-dom";
import type {JSX} from "react";

interface RegisteredCourse extends Course {
    progressWeeks: number;
    totalWeeks: number;
    enrolledAt?: string;
}

const registeredCourses: RegisteredCourse[] = [
    {
        title: "Calculus I",
        author: "Prof. Johnson",
        price: "$49.99",
        progressWeeks: 2,
        totalWeeks: 8,
        enrolledAt: "2025-09-01",
    },
    {
        title: "Organic Chemistry",
        author: "Prof. Davis",
        price: "Free",
        progressWeeks: 5,
        totalWeeks: 12,
        enrolledAt: "2025-08-10",
    },
    {
        title: "Cell Biology",
        author: "Prof. Clark",
        price: "$59.99",
        progressWeeks: 1,
        totalWeeks: 6,
        enrolledAt: "2025-09-03",
    },
];

const similarCourses: Course[] = [
    { title: "Calculus II", author: "Prof. Johnson", price: "$59.99" },
    { title: "Physical Chemistry", author: "Dr. Kim", price: "$49.99" },
    { title: "Genetics", author: "Dr. Martinez", price: "$69.99" },
];

const platformCredits = 42.75; // sample credits

export default function StudentDashboard(): JSX.Element {
    return (
        <div className="p-6 max-w-6xl mx-auto space-y-10">
            {/* Credits bubble */}
            <div className="mb-2">
                <div className="w-max bg-indigo-600 text-white px-4 py-2 rounded-full font-semibold shadow-md">
                    Credits: {platformCredits.toFixed(2)}
                </div>
            </div>

            <header className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold">Your Learning</h1>
                    <p className="text-sm text-gray-600">Courses you're currently enrolled in.</p>
                </div>
                <div className="hidden md:flex items-center gap-3">
                    <Link
                        to="/courses"
                        className="px-4 py-2 border rounded hover:bg-gray-50 transition"
                    >
                        Browse courses
                    </Link>
                </div>
            </header>

            {/* Registered courses */}
            <section>
                <h2 className="text-2xl font-semibold mb-4">My Courses</h2>

                <div className="grid gap-6 md:grid-cols-2">
                    {registeredCourses.map((c, i) => (
                        <article key={`${c.title}-${i}`} className="bg-white rounded-lg shadow p-4 flex flex-col md:flex-row gap-4">
                            {/* Thumbnail placeholder */}
                            <div className="h-36 w-full md:w-40 bg-gray-200 rounded flex-shrink-0" />

                            <div className="flex-1 flex flex-col justify-between">
                                <div>
                                    <h3 className="text-lg font-semibold">{c.title}</h3>
                                    <p className="text-sm text-gray-600">by {c.author}</p>
                                    <p className="mt-2 text-sm text-gray-700 font-medium">{c.price}</p>
                                </div>

                                <div className="mt-4">
                                    <div className="mb-2 text-sm text-gray-600">
                                        Progress — {c.progressWeeks} / {c.totalWeeks} weeks
                                    </div>
                                    <ProgressBar progress={c.progressWeeks} totalWeeks={c.totalWeeks} />
                                </div>

                                <div className="mt-4 flex items-center gap-3">
                                    <Link
                                        to={`/course/${encodeURIComponent(c.title)}`}
                                        className="px-3 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition text-sm"
                                    >
                                        Continue
                                    </Link>
                                    <button
                                        type="button"
                                        className="px-3 py-2 border rounded text-sm hover:bg-gray-50 transition"
                                        onClick={() => {
                                            // TODO: Add real unenroll logic here
                                            // For now, just a friendly placeholder
                                            // eslint-disable-next-line no-alert
                                            alert(`You clicked Unenroll for "${c.title}". Implement action.`);
                                        }}
                                    >
                                        Unenroll
                                    </button>

                                    <div className="ml-auto text-xs text-gray-500">
                                        Enrolled: {c.enrolledAt ?? "—"}
                                    </div>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </section>

            {/* Similar courses */}
            <section>
                <div className="flex items-center justify-between">
                    <h2 className="text-2xl font-semibold">Similar courses</h2>
                    <Link to="/courses" className="text-sm text-indigo-600 hover:underline">
                        Browse all
                    </Link>
                </div>

                <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {similarCourses.map((s, idx) => (
                        <div key={`${s.title}-${idx}`} className="bg-white rounded-lg shadow p-4 flex flex-col">
                            <div className="h-32 bg-gray-200 rounded mb-3" />
                            <h3 className="font-semibold">{s.title}</h3>
                            <p className="text-sm text-gray-600">by {s.author}</p>
                            <div className="mt-3 flex items-center justify-between">
                                <div className="text-sm font-medium">{s.price}</div>
                                <div className="flex gap-2">
                                    <Link
                                        to={`/course/${encodeURIComponent(s.title)}`}
                                        className="px-3 py-1 bg-indigo-600 text-white rounded text-sm hover:bg-indigo-700 transition"
                                    >
                                        View
                                    </Link>
                                    <button
                                        onClick={() => {
                                            // TODO: enroll logic
                                            // eslint-disable-next-line no-alert
                                            alert(`Enroll to "${s.title}" - implement real enrollment`);
                                        }}
                                        className="px-3 py-1 border rounded text-sm hover:bg-gray-50 transition"
                                    >
                                        Enroll
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Quick stats / tips */}
            <section className="bg-white rounded shadow p-4">
                <div className="flex flex-col md:flex-row gap-4 items-start md:items-center">
                    <div className="flex-1">
                        <h3 className="font-semibold">Keep going — small steps count</h3>
                        <p className="text-sm text-gray-600">Try to complete at least one week's material per week to stay consistent.</p>
                    </div>
                </div>
            </section>
        </div>
    );
}
