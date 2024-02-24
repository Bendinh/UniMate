import './card.css'
import { list_mentors } from '../backend/firebase';
import { useState, useEffect } from "react";

// Card component to display user profile and attributes
function Card() {
  const [mentors, setMentors] = useState<any []>([]);
  
  useEffect(() => {
    const fetch_mentors = async() => {
      const mentors  = await list_mentors()
      setMentors(mentors)
    };
    
    fetch_mentors();
  }, [])

  return (
  <> 
  <div className = "container">
    {mentors.map((mentor) => (
      <div className = "card" key={mentor.id}>
        <div className = "imgframe">
          <img src={mentor.profile_pic != "" ? mentor.profile_pic : "./src/assets/alt_img/no_image.jpg"}></img>
        </div>

        <div className="caption">{mentor.name}</div>
        <div className="nationality">{mentor.nationality}</div>
        <div className="gradyear"> Class of {mentor.graduation}</div>
        <div className="attribute">
          <div className="attribute-icon" style={{backgroundImage: 'url("./src/assets/edu.svg")'}}></div>
          {mentor.school}
        </div>
        <div className="attribute">
          <div className="attribute-icon" style={{backgroundImage: 'url("./src/assets/major.svg")'}}></div>
          {mentor.major}
          </div>
        <div className="attribute">
          <div className="attribute-icon" style={{backgroundImage: 'url("./src/assets/topic.svg")'}}></div>
          {mentor.topics.join(', ')}
          </div>
        <div className="button-holder">
          <div className="button">
            Book
          </div>
        </div>
    </div>
    ))}
  </div>
  </>
  )
};

export default Card;
