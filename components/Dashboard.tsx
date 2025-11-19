"use client";

import Link from "next/link";
import type { Course } from "../models/Courses";

export default function Dashboard({ courses = [] as Course[] }) {
    return (
        <div className="grid min-h-screen grid-cols-[260px_1fr]">

            <aside className="sticky top-0 h-screen border-r border-gray-200 p-6">
                <div className="mb-6">
                    <div className="text-lg font-bold">Edu Dashboard</div>
                    <div className="text-xc text-gray-500">Learn at your pace</div>
                </div>

                <nav aria-label="Primary">
                    <ul className="space-y-2 text-sm">
                        <li><a className="text-white-900" href="#">Home</a></li>
                        <li><a className="text-white-900" href="#">My Courses</a></li>
                        <li><a className="text-white-900" href="#">Assignments</a></li>
                        <li><a className="text-white-900" href="#">Progress</a></li>
                        <li><a className="text-white-900" href="#">Settings</a></li>
                    </ul>
                </nav>
            </aside>


             <main className="p-8">
                    <h1 className="text-2xl font-bold mb-6">Courses</h1>
                    {
                        courses.length > 0 ? (
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                                {
                                    courses.map(course => (
                                        <Link href={`/courses/${course.id}`} key={course.id}>
                                            <div className="border rounded-lg p-4 hover:shadow-lg transition-shadow">
                                                <h2 className="text-lg font-semibold">{course.title}</h2>
                                                <p className="text-sm text-gray-600">{course.description}</p>
                                            </div>
                                        </Link>
                                    ))
                                }
                            </div>

                        ) : (
                            <p>No courses available</p>
                        )
                    }
                </main>
        </div>
        
    )
}


