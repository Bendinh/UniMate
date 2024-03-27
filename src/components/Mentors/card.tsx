import '../../styles/card.css'
import { Mentor } from '../../types/mentor'
import { PopupButton } from "react-calendly";
import { useEffect, useState} from "react";
import { useNavigate } from 'react-router-dom';
import {BusinessCenter, School, Star} from '@mui/icons-material';
import {auth} from "../../services/firebase"
import {onAuthStateChanged } from "firebase/auth";

// Card component to display user profile and attributes
function Card({mentors, onMentorSelect}: {mentors: Mentor[], onMentorSelect: (email: string) => void}) {
  const navigate = useNavigate();
  const [current, setCurrentMentor] = useState('');
  const [isAuthenticated,setIsAuthenticated] = useState(false);
  const mentorProfile = (mentor:string) =>{
    navigate(`/mentorProfile/${mentor}`)
  }

  const handleBookingClick = (mentor) => {
    if (!isAuthenticated) {
      navigate('/login'); // Assuming signInPage is a function that handles redirection
    }
    else {
      onMentorSelect(mentor);
    }
  };

  useEffect (() => {
    onAuthStateChanged(auth, (user) => {
        if (user) {
            setIsAuthenticated(true)
        }
        else {
            setIsAuthenticated(false)
        }
    });
});

  return (
  <> 
  <div className = "container-card">
    {mentors.map((mentor: Mentor) => (
      <div className = "card" key={mentor.id}>
        <span style={{cursor:'pointer'}} onClick={() => mentorProfile(mentor.id)}>
        <div className = "imgframe">
          <img src={mentor.profile_pic != "" ? mentor.profile_pic : "./src/assets/alt_img/no_image.jpg"}></img>
        </div>

        <div className="caption">{mentor.name}</div>
        <div className="nationality">{mentor.nationality}</div>
        <div className="gradyear"> Class of {mentor.graduation}</div>
        
        <div className="attribute">
          <div className="attribute-icon"><School/></div>
          <div className="attribute-text">{mentor.school}</div>
        </div>
        <div className="attribute">
          <div className="attribute-icon"><BusinessCenter/></div>
          <div className="attribute-text">{mentor.major}</div>
          </div>
        <div className="attribute">
          {/* Top two topics only */}
          <div className="attribute-icon"><Star/></div>
          <div className="attribute-text">{mentor.topics.join(', ')}</div>
          </div>
        </span>
        <div className="button-holder">
              {isAuthenticated ? (
                <div onClick={() => handleBookingClick(mentor)}>
                <PopupButton
                  className='button'
                  url={mentor.bookingLink}
                  rootElement={document.getElementById("root")!}
                  text="Book"
                />
                </div>
              ) : (
                <button className='button' onClick={() => handleBookingClick(mentor)}>
                  Book
                </button>
              )}
          </div>
    </div>
    ))}
  </div>
  </>
  )
}

export default Card;
