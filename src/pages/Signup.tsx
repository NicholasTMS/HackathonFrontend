import { Link } from "react-router-dom";
import { useState } from "react";

export default function Signup() {
    const [role, setRole] = useState<"Student" | "Tutor">("Student");

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
                <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>

                <form className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium mb-1">Name</label>
                        <input
                            type="text"
                            placeholder="John Doe"
                            className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium mb-1">Email</label>
                        <input
                            type="email"
                            placeholder="you@example.com"
                            className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium mb-1">Password</label>
                        <input
                            type="password"
                            placeholder="••••••••"
                            className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                    </div>

                    {/* Role Radio Buttons */}
                    <div>
                        <span className="block text-sm font-medium mb-1">Choose a role</span>
                        <div className="flex gap-4">
                            <label className="flex items-center gap-2">
                                <input
                                    type="radio"
                                    name="role"
                                    value="Student"
                                    checked={role === "Student"}
                                    onChange={() => setRole("Student")}
                                    className="form-radio h-4 w-4 text-indigo-600"
                                />
                                Student
                            </label>
                            <label className="flex items-center gap-2">
                                <input
                                    type="radio"
                                    name="role"
                                    value="Tutor"
                                    checked={role === "Tutor"}
                                    onChange={() => setRole("Tutor")}
                                    className="form-radio h-4 w-4 text-indigo-600"
                                />
                                Tutor
                            </label>
                        </div>
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-md transition"
                    >
                        Sign Up
                    </button>
                </form>

                <p className="text-sm text-gray-600 mt-6 text-center">
                    Already have an account?{" "}
                    <Link to="/login" className="text-indigo-600 hover:underline">
                        Login
                    </Link>
                </p>
            </div>
        </div>
    );
}

