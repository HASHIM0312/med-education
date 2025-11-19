import { Module } from "../models/Module"
export interface Course{
    id: string,
    title: string,
    description: string,
    modules: Module[]
}  