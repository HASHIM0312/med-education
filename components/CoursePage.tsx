"use client"

import { Course } from "../models/Courses"
import { useState } from "react";
import Dropdown from "../components/Dropdown";






export default function CoursePage({ course }: { course: Course }) { // Get the course, and then map it/destructure it to a course object

    const [isDropdownVisible, setDropdownVisible] = useState(false);

    const handleMouseEnter = () => {
        setDropdownVisible(true);
    };

    const handleMouseLeave = () => {
        setDropdownVisible(false);
    };

    return (
        <main className="p-8">
            <h1 className="text-3xl font-bold mb-6">{course.title}</h1>
            <div className="space-y-6">
                {course.modules.map(module => (
                    <div key={module.moduleTitle} className="border rounded-lg overflow-hidden">
                        <h2 className="text-2xl font-semibold p-4 border-b">{module.moduleTitle}</h2>
                        <div className="divide-y">
                            {module.lessons.map((lesson => (
                                <div key={lesson.videoId} className="p-4 flex justify-between items-center cursor-pointer" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                                    <span className="text-lg">{lesson.lessonTitle}</span>
                                    {isDropdownVisible && <Dropdown/>}
                                </div>
                            )))}
                        </div>

                    </div>
                ))}
            </div>
        </main>
    )
}
