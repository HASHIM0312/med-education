import { get } from "http";
import CoursePage from "../../../../components/CoursePage";
import { db } from "../../../../firebase/config"
import {doc, getDoc} from "firebase/firestore"
import { Course } from "../../../../models/Courses";

type PageProps = {
  params: Promise<{ id: string }>; // Tell TS params is a Promise
};


export default async function Home({params}: PageProps){

    //Server side logic 

    const resolvedParams = await params;

    const courseId = resolvedParams.id;
    const courseRef = doc(db, "courses", courseId);
    const courseSnap = await getDoc(courseRef);

    const course = courseSnap.data() as Course;
    
   return (
    <CoursePage course={course} />
   )
    
}