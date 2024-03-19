import './App.css'
import './backend/firebase'
import Navbar from './components/navbar.tsx';
import {Route, Routes} from "react-router-dom"
import {Mentors} from "./pages/Mentors.tsx"
import { CreateAcc } from "./pages/createAcc.tsx";


function App() {
  return (
    <>
      <div className="App">
        <Navbar/>
        <Routes>
          <Route path="/"/>
          <Route path="/mentors" element={<Mentors/>}/>
          <Route path="/createAccount" element={<CreateAcc/>}/>
        </Routes>
      </div>
    </>
  )
}

export default App
