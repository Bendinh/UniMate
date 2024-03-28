import './App.css'
import './services/firebase.tsx'
import Navbar from './components/layout/navbar.tsx';
import {Route, Routes} from "react-router-dom"
import Mentors from './pages/Mentors.tsx';
import MentorProfile from './pages/MentorProfile.tsx';
import SignUp from './pages/signup.tsx';
import Login from './pages/Login.tsx';
import SignUp1 from "./pages/SignUp1.tsx"
import SignUp2 from "./pages/SignUp2.tsx"
import ForgetPass from "./pages/ForgetPass.tsx"

function App() {
  return (
    <>
      <div className="App">
        <Navbar/>
        <Routes>
          <Route path="/"/>
          <Route path="/mentors" element={<Mentors/>}/>
          <Route path="/signup" element={<SignUp/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/mentorProfile/:mentorID" element={<MentorProfile/>}></Route>
          <Route path="/signup1" element={<SignUp1/>}></Route>
          <Route path="/signup2" element={<SignUp2/>}></Route>
          <Route path="/forgotpassword" element={<ForgetPass/>}></Route>
        </Routes>
      </div>
    </>
  )
}

export default App
