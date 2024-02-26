import './App.css'
import './services/firebase.tsx'
import Navbar from './components/navbar.tsx';
import {Route, Routes} from "react-router-dom"
import {Mentors} from "./pages/Mentors.tsx"
import MentorProfile from './pages/mentorProfile.tsx';


function App() {
  return (
    <>
      <div className="App">
        <Navbar/>
        <Routes>
          <Route path="/"/>
          <Route path="/mentors" element={<Mentors/>}/>
          <Route path="/mentorProfile" element={<MentorProfile/>}></Route>
        </Routes>
      </div>
    </>
  )
}

export default App
