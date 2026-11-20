import { useMemo, useState } from "react";
import { Search, Users } from "lucide-react";
import { students } from "../data";
import StudentCard from "../components/StudentCard";

export default function StudentList() {
  const [search, setSearch] = useState("");
  const filteredStudents = useMemo(() => {
    const query = search.trim().toLowerCase();
    return students.filter((student) =>
      [student.name, student.id, student.course].some((value) => value.toLowerCase().includes(query))
    );
  }, [search]);

  return (
    <main className="page">
      <div className="page-heading">
        <div className="eyebrow">STUDENT DIRECTORY</div>
        <h1>Find your <span>people.</span></h1>
        <p>Browse the student directory and save the students you want to keep close.</p>
      </div>
      <div className="toolbar">
        <div className="search-box"><Search size={18} /><input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search by name, ID or course" aria-label="Search students" /></div>
        <div className="count-pill"><Users size={16} /> {filteredStudents.length} students</div>
      </div>
      {filteredStudents.length ? <div className="student-grid">{filteredStudents.map((student) => <StudentCard key={student.id} student={student} />)}</div> :
        <div className="empty-state"><Search size={28} /><h2>No students found</h2><p>Try another name, ID or course.</p></div>}
    </main>
  );
}