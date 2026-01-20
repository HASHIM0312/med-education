import Image from "next/image";
import { db } from "../../firebase/config";
import { collection, getDocs } from "firebase/firestore";
import { Course } from "../../models/Courses"
import Dashboard from "../../components/Dashboard";

export default async function Home() {

  const coursesCollectionRef = collection(db, "courses");
  const coursesSnapshot = await getDocs(coursesCollectionRef)

  const courses: Course[] = coursesSnapshot.docs.map(doc => {
    const data = doc.data()
    return {
      id: doc.id,
      title: data.title || '',
      description: data.Description || '',
      modules: data.modules || []
    }
  })
  
  return (
       <Dashboard courses={courses as any}/>
  );
}
