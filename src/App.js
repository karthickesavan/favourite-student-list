import { NavLink, Route, Routes } from "react-router-dom";
import { GraduationCap, Users, Heart } from "lucide-react";
import StudentList from "./pages/StudentList";
import FavouriteStudents from "./pages/FavouriteStudents";
import { useStudents } from "./context/StudentContext";
import "./App.css";

export default function App() {
  const { favourites } = useStudents();
  return (
    <div className="app-shell">
      <header className="topbar">
        <NavLink to="/" className="brand"><span className="brand-icon"><GraduationCap size={22} /></span><span>studenthub<span className="brand-dot">.</span></span></NavLink>
        <nav className="navigation" aria-label="Main navigation">
          <NavLink to="/" end className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}><Users size={16} /> Student list</NavLink>
          <NavLink to="/favourites" className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}><Heart size={16} /> Favourites <span className="nav-count">{favourites.length}</span></NavLink>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<StudentList />} />
        <Route path="/favourites" element={<FavouriteStudents />} />
        <Route path="*" element={<main className="page"><div className="empty-state"><h2>Page not found</h2><NavLink className="back-link" to="/">Back to student list</NavLink></div></main>} />
      </Routes>
      <footer className="footer">Built with React Router & Context API</footer>
    </div>
  );
}