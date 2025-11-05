import { get } from "http";
import CoursePage from "../../../../components/CoursePage";
import { db } from "../../../../firebase/config"
import {doc, getDoc} from "firebase/firestore"
import { Course } from "../../../../models/Courses";


export default async function Home(id: string){
    //I want to get the course from the firestore databsae using the id
    const courseId = id;

    const courseRef = doc(db, "courses", courseId);
    const courseSnap = await getDoc(courseRef);

    const course = courseSnap.data() as Course;
    
    <CoursePage course={course}></CoursePage>
}