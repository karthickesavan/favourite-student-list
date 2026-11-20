# StudentHub — Favourite Student List

A responsive React application demonstrating client-side routing with React Router and global state management using the Context API.

## Features
- Student List and Favourite Students pages
- Client-side navigation with React Router
- Global favourites state using `createContext` and `useContext`
- Add and remove favourite students
- Duplicate favourites are prevented using unique student IDs
- Search by student name, ID, or course
- Empty state: "No favourite students added yet"
- Responsive desktop, tablet, and mobile layout

## Tech stack
React 18, React Router DOM 6, Context API, CSS Grid, Flexbox, Lucide React.

## Run locally
```bash
npm install
npm start
```
Open http://localhost:3000.

## Project structure
```text
src/
├── components/StudentCard.js
├── context/StudentContext.js
├── pages/
│   ├── StudentList.js
│   └── FavouriteStudents.js
├── App.js
├── App.css
├── data.js
├── index.css
└── index.js
```

The `StudentProvider` wraps the app and stores favourites globally. Components use the `useStudents` hook to read favourites and call `addFavourite` or `removeFavourite`.
