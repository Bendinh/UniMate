import './App.css'
import './services/firebase.tsx'
import Navbar from './components/layout/navbar.tsx';
import {Route, Routes} from "react-router-dom"
import Mentors from './pages/Mentors.tsx';
import MentorProfile from './pages/MentorProfile.tsx';
import SignUp1 from './pages/SignUp1.tsx';


function App() {
  return (
    <>
      <div className="App">
        <Routes>
          <Route path="/" element={<Navbar/>}/>
          <Route path="/mentors" element={<><Navbar/><Mentors/></>}/>
          <Route path="/mentorProfile" element={<><Navbar/><MentorProfile/></>}></Route>
          <Route path="/signup1" element={<SignUp1/>}></Route>
        </Routes>
      </div>
    </>
  )
}

export default App
