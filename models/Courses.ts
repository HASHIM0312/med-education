export interface Course{
    id: string,
    title: string,
    description: string,
    modules:
    {
        moduleTitle: string,
        lessons: {
            lessonTitle: string,
            videoId: string
        }[];


    }[];

}