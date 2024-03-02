import './card.css'
import { Mentor } from '../types/mentor'

// Card component to display user profile and attributes
function Card({mentors}: {mentors: Mentor[]}) {
  return (
  <> 
  <div className = "container">
    {mentors.map((mentor: Mentor) => (
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
          <div className="button">
            Book
          </div>
        </div>
    </div>
    ))}
  </div>
  </>
  )
}

export default Card;
