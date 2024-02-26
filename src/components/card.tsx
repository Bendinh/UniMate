import './card.css'
import { list_mentors } from '../backend/firebase';
import { useState, useEffect } from "react";
import { PopupButton } from "react-calendly";

// Card component to display user profile and attributes
function Card() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
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
        {/* Should be only max 2 lines, else put ... */}
        <div className="attribute">
          <div className="attribute-icon" style={{backgroundImage: 'url("./src/assets/edu.svg")'}}></div>
          <div className="attribute-text">{mentor.school}</div>
        </div>
        <div className="attribute">
          <div className="attribute-icon" style={{backgroundImage: 'url("./src/assets/major.svg")'}}></div>
          <div className="attribute-text">{mentor.major}</div>
          </div>
        <div className="attribute">
          {/* Top two topics only */}
          <div className="attribute-icon" style={{backgroundImage: 'url("./src/assets/topic.svg")'}}></div>
          <div className="attribute-text">{mentor.topics.join(', ')}</div>
          </div>
        <div className="button-holder">
          <div>
            <PopupButton className='button'
            url={mentor.bookingLink}
            rootElement={document.getElementById("root")!}
            text="Book"
            />
          </div>
        </div>
    </div>
    ))}
  </div>
  </>
  )
}

export default Card;
