import './App.css'
import './services/firebase.tsx'
import Navbar from './components/layout/navbar.tsx';
import {Route, Routes} from "react-router-dom"
import Mentors from './pages/Mentors.tsx';
import MentorProfile from './pages/MentorProfile.tsx';
import Login from './pages/Login.tsx';


function App() {
  return (
    <>
      <div className="App">
        <Routes>
          <Route path="/" element={<Navbar/>}/>
          <Route path="/mentors" element={<><Navbar/><Mentors/></>}/>
          <Route path="/mentorProfile" element={<><Navbar/><MentorProfile/></>}></Route>
          <Route path="/login" element={<Login/>}></Route>
        </Routes>
      </div>
    </>
  )
}

export default App
