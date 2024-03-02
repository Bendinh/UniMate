import '../pages/mentors.css'
import Card from '../components/card'
import Filter from '../components/filter';
import { useState, useEffect } from "react";
import { list_mentors } from '../backend/firebase';
import { Mentor } from '../types/mentor';

export const Mentors = () => {
    
    const [fetchedMentors, setMentors] = useState<{ id: string; }[]>([]);
  
    useEffect(() => {
    const fetch_mentors = async() => {
      const fetchedMentors  = await list_mentors()
      setMentors(fetchedMentors)
    };
    
      fetch_mentors();
    }, [])

    return (
        <div>
            <h1 id = "intro-container">Meet with your mentors!</h1>
            <Filter />
            <Card mentors={fetchedMentors as Mentor[]} />
        </div>
    );
};
export default Mentors
 

