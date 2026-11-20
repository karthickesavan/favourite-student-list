import { UserRound, Heart, HeartOff, Mail, GraduationCap } from "lucide-react";
import { useStudents } from "../context/StudentContext";

export default function StudentCard({ student, favouritePage = false }) {
  const { addFavourite, removeFavourite, isFavourite } = useStudents();
  const saved = isFavourite(student.id);

  return (
    <article className="student-card">
      <div className="student-card-top">
        <div className="avatar"><UserRound size={25} /></div>
        <span className="student-id">{student.id}</span>
      </div>
      <h3>{student.name}</h3>
      <div className="student-meta"><GraduationCap size={15} /> {student.course}</div>
      <div className="student-meta"><span className="year-dot" /> {student.year}</div>
      <div className="student-email"><Mail size={14} /> {student.email}</div>
      {favouritePage ? (
        <button className="action-button remove-button" onClick={() => removeFavourite(student.id)}>
          <HeartOff size={16} /> Remove favourite
        </button>
      ) : (
        <button className={`action-button ${saved ? "saved-button" : ""}`} onClick={() => addFavourite(student)} disabled={saved}>
          <Heart size={16} fill={saved ? "currentColor" : "none"} />
          {saved ? "Added to favourites" : "Add to favourite"}
        </button>
      )}
    </article>
  );
}