import { Lesson } from "../models/Lesson"

export interface Module{
    moduleTitle: string,
    lessons: Lesson[];
}