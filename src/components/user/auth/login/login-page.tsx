import React from "react";
import { useSessionStore } from "@/store/session-store";
import { useState } from "react";
import { useNavigate } from "@tanstack/react-router";

export default function LoginPage() {
    const setSession = useSessionStore((s) => s.setSession);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Mock authentication logic
        if (username === "admin" && password === "password") {
            setSession({
                username: "admin",
                email: "admin@example.com",
                token: "mock-token-123",
            });
            navigate({ to: "/" });
        } else {
            setError("Invalid username or password");
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
            <form onSubmit={handleSubmit} className="bg-white p-8 rounded shadow-md w-full max-w-sm">
                <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
                {error && <div className="mb-4 text-red-500">{error}</div>}
                <div className="mb-4">
                    <label className="block mb-1">Username</label>
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className="w-full border px-3 py-2 rounded"
                        required
                    />
                </div>
                <div className="mb-6">
                    <label className="block mb-1">Password</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full border px-3 py-2 rounded"
                        required
                    />
                </div>
                <button
                    type="submit"
                    className="w-full bg-teal-700 text-white py-2 rounded hover:bg-teal-800 transition"
                >
                    Login
                </button>
            </form>
        </div>
    );
}