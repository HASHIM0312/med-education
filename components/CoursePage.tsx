"use client"

import { Course } from "../models/Courses"

export default function CoursePage(course: Course) {
    return (
        <main className="p-8">
            <h1 className="text-3xl font-bold mb-6">{course.title}</h1>
            <div className="space-y-6">
                {course.modules.map(module => (
                    <div key={module.moduleTitle} className="border rounded-lg overflow-hidden">
                        <h2 className="text-2xl font-semibold p-4 bg-gray-50 border-b">{module.moduleTitle}</h2>
                        <div className="divide-y">
                            {module.lessons.map((lesson => (
                                <div key={lesson.videoId} className="p-4 flex justify-between items-center hover:bg-gray-100 cursor-pointer">
                                    <span className="text-lg">{lesson.lessonTitle}</span>
                                </div>
                            )))}
                        </div>

                    </div>
                ))}
            </div>
        </main>
    )
}
