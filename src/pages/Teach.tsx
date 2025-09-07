import React, { useState } from "react";

export default function Teach() {
    const [courses, setCourses] = useState([
        { title: "Algebra Basics", status: "Published" },
        { title: "Calculus", status: "Draft" },
    ]);
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");

    function handleCreateCourse(e: React.FormEvent) {
        e.preventDefault();
        if (title.trim()) {
            setCourses([
                ...courses,
                { title, status: "Draft" }
            ]);
            setTitle("");
            setDesc("");
        }
    }

    return (
        <div className="p-6 max-w-3xl mx-auto">
            <h1 className="text-3xl font-bold mb-4">Teach on Tulearn</h1>
            <p className="mb-6 text-gray-700">Share your knowledge and earn by creating courses for students worldwide.</p>

            <form onSubmit={handleCreateCourse} className="bg-white rounded shadow p-4 mb-8">
                <h2 className="text-xl font-semibold mb-2">Create a New Course</h2>
                <div className="mb-3">
                    <label className="block mb-1 font-medium">Course Title</label>
                    <input
                        className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                        value={title}
                        onChange={e => setTitle(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label className="block mb-1 font-medium">Description</label>
                    <textarea
                        className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                        value={desc}
                        onChange={e => setDesc(e.target.value)}
                        rows={3}
                    />
                </div>
                <button
                    type="submit"
                    className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 font-semibold transition"
                >
                    Create Course
                </button>
            </form>

            <h2 className="text-xl font-semibold mb-3">Your Courses</h2>
            <div className="space-y-3">
                {courses.length === 0 ? (
                    <p className="text-gray-500">No courses yet.</p>
                ) : (
                    courses.map((course, idx) => (
                        <div key={idx} className="flex items-center justify-between bg-gray-50 rounded p-3 shadow">
                            <div>
                                <div className="font-medium">{course.title}</div>
                                <div className="text-sm text-gray-500">{course.status}</div>
                            </div>
                            <button className="bg-gray-200 text-gray-700 px-3 py-1 rounded hover:bg-gray-300 text-sm font-medium">
                                Edit
                            </button>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
}