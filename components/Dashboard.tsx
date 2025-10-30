"use client";

import Link from "next/link";
import type { Course } from "../models/Courses";

export default function Dashboard({ courses = [] as Course[] }){
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
        </div>

            
    )
}


