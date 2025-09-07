// src/pages/TutorDashboard.tsx
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import type { Course } from "../components/courseTypes";
import ProgressBar from "../components/ProgressBar";

interface Student {
    id: number;
    name: string;
    course: string;
    progress: number; // completed weeks
}

const initialCourses: Course[] = [
    { title: "React for Beginners", author: "Tutor A", price: "$49.99" },
    { title: "Advanced Node.js", author: "Tutor A", price: "$59.99" },
    { title: "Python Data Science", author: "Tutor A", price: "$69.99" },
];

const initialStudents: Student[] = [
    { id: 1, name: "Alice", course: "React for Beginners", progress: 3 },
    { id: 2, name: "Bob", course: "Advanced Node.js", progress: 5 },
    { id: 3, name: "Charlie", course: "Python Data Science", progress: 2 },
];

const totalWeeks = 6;
const walletBalance = 125.5;

/** Simple confirm modal shown in-page */
const ConfirmModal: React.FC<{
    courseTitle: string;
    onConfirm: () => void;
    onCancel: () => void;
}> = ({ courseTitle, onConfirm, onCancel }) => {
    // close on Esc
    useEffect(() => {
        const onKey = (e: KeyboardEvent) => {
            if (e.key === "Escape") onCancel();
        };
        document.addEventListener("keydown", onKey);
        return () => document.removeEventListener("keydown", onKey);
    }, [onCancel]);

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
            role="dialog"
            aria-modal="true"
            aria-labelledby="confirm-modal-title"
        >
            <div className="bg-white rounded-lg shadow-lg w-full max-w-md mx-4">
                <div className="p-6">
                    <h2 id="confirm-modal-title" className="text-xl font-bold text-red-600">
                        Warning!
                    </h2>
                    <p className="mt-3 text-gray-700">
                        This will permanently remove <strong>{courseTitle}</strong>. This action cannot be undone.
                    </p>

                    <div className="mt-6 flex justify-end gap-3">
                        <button
                            onClick={onCancel}
                            className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-md transition"
                        >
                            Cancel
                        </button>
                        <button
                            onClick={onConfirm}
                            className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-md transition"
                        >
                            Remove Permanently
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

const TutorDashboard: React.FC = () => {
    const [tutorCourses, setTutorCourses] = useState<Course[]>(initialCourses);
    const [students] = useState<Student[]>(initialStudents); // if you later want to mutate students, make stateful
    const [modalCourse, setModalCourse] = useState<Course | null>(null);
    const [isRemoving, setIsRemoving] = useState(false);

    const openConfirm = (course: Course) => setModalCourse(course);
    const cancelConfirm = () => setModalCourse(null);

    const confirmRemove = () => {
        if (!modalCourse) return;
        setIsRemoving(true);

        // simulate async removal (e.g., API call); here we remove immediately
        setTimeout(() => {
            setTutorCourses((prev) => prev.filter((c) => c.title !== modalCourse.title));
            setModalCourse(null);
            setIsRemoving(false);
        }, 250); // small delay for UX; remove or change as needed
    };

    return (
        <div className="p-6 max-w-6xl mx-auto space-y-12">
            {/* Wallet Balance Bubble (below navbar, above page) */}
            <div className="mb-6 w-max bg-green-600 text-white px-4 py-2 rounded-full font-semibold shadow-md">
                Wallet: ${walletBalance.toFixed(2)}
            </div>

            <h1 className="text-3xl font-bold mb-6">Tutor Dashboard</h1>

            {/* Courses Section */}
            <section>
                <h2 className="text-2xl font-semibold mb-4">Your Courses</h2>
                <div className="grid md:grid-cols-3 gap-6">
                    {tutorCourses.map((course, idx) => (
                        <div
                            key={`${course.title}-${idx}`}
                            className="bg-white p-4 rounded-lg shadow-md flex flex-col justify-between"
                        >
                            {/* Gray box for course image */}
                            <div className="h-40 w-full bg-gray-300 rounded mb-4" />

                            <h3 className="text-xl font-semibold mb-1">{course.title}</h3>
                            <p className="text-gray-600 mb-1">Author: {course.author}</p>
                            <p className="text-gray-800 font-medium mb-4">{course.price}</p>

                            <button
                                onClick={() => openConfirm(course)}
                                className="mt-2 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded transition"
                                aria-label={`Remove ${course.title} permanently`}
                                disabled={isRemoving}
                            >
                                Remove Permanently
                            </button>
                        </div>
                    ))}

                    {/* Add New Course Card as a Link to course creation */}
                    <Link
                        to="/coursecreationform"
                        className=" bg-gray-100 p-4 rounded-lg shadow-md flex flex-col justify-center items-center hover:bg-gray-200 transition focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        aria-label="Add new course"
                    >
                        <span className="text-3xl font-bold">+</span>
                        <p className="mt-2 text-gray-700 font-medium">Add New Course</p>
                    </Link>
                </div>
            </section>

            {/* Students Section */}
            <section>
                <h2 className="text-2xl font-semibold mb-4">Your 1-on-1 Students</h2>
                <div className="space-y-6">
                    {students.map((student) => (
                        <div
                            key={student.id}
                            className="bg-white p-4 rounded-lg shadow-md flex flex-col md:flex-row md:items-center justify-between gap-4"
                        >
                            <div>
                                <h3 className="text-xl font-semibold">{student.name}</h3>
                                <p className="text-gray-600">Course: {student.course}</p>
                            </div>
                            <div className="w-full md:w-2/3">
                                <ProgressBar progress={student.progress} totalWeeks={totalWeeks} />
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Confirmation Modal */}
            {modalCourse && (
                <ConfirmModal
                    courseTitle={modalCourse.title}
                    onConfirm={confirmRemove}
                    onCancel={cancelConfirm}
                />
            )}
        </div>
    );
};

export default TutorDashboard;




