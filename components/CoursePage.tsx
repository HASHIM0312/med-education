"use client"

import { Course } from "../models/Courses"
import { useState } from "react";
import Dropdown from "../components/Dropdown";

export default function CoursePage({ course }: { course: Course }) { // Get the course, and then map it/destructure it to a course object

    const [hoveredModule, setHoveredModule] = useState<string | null>(null);

    return (
        <main className="p-8">
            <h1 className="text-3xl font-bold mb-6">{course.title}</h1>
            <div className="space-y-6">
                {course.modules.map(module => (
                    <div key={module.moduleTitle} className="border rounded-lg overflow-hidden"
                        onMouseEnter={() => setHoveredModule(module.moduleTitle)}
                        onMouseLeave={() => setHoveredModule(null)}>
                        <h2 className="text-2xl font-semibold p-4 border-b">{module.moduleTitle}</h2>
                       
                        {hoveredModule === module.moduleTitle && (
                            <div className="divide-y animate-in fade-in slide-in-from-top-2 duration-600">
                                {module.lessons.map((lesson) => (
                                    <div key={lesson.videoId} className="p-4 flex flex-col">
                                        <span className="text-lg">{lesson.lessonTitle}</span>
                                        <span className="text-lg ml-4 text-gray-500 text-sm">{lesson.videoId}</span>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </main>
    )
}
