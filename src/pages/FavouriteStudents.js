import { Heart } from "lucide-react";
import { useStudents } from "../context/StudentContext";
import StudentCard from "../components/StudentCard";

export default function FavouriteStudents() {
  const { favourites } = useStudents();
  return (
    <main className="page">
      <div className="page-heading">
        <div className="eyebrow">YOUR PERSONAL COLLECTION</div>
        <h1>Favourite <span>students.</span></h1>
        <p>The students you've saved from the directory appear here.</p>
      </div>
      {favourites.length ? <>
        <div className="count-pill favourites-count"><Heart size={16} fill="currentColor" /> {favourites.length} favourite {favourites.length === 1 ? "student" : "students"}</div>
        <div className="student-grid">{favourites.map((student) => <StudentCard key={student.id} student={student} favouritePage />)}</div>
      </> : <div className="empty-state"><div className="empty-heart"><Heart size={28} /></div><h2>No favourite students added yet</h2><p>Visit the student list and add students to your favourites.</p></div>}
    </main>
  );
}