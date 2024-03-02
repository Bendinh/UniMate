import '../pages/mentors.css'
import Card from '../components/card'
import Filter from '../components/filter';
import { useState, useEffect } from "react";
import { list_mentors } from '../backend/firebase';
import { Mentor } from '../types/mentor';
import { FilterProps } from '../types/filterProps';

export const Mentors = () => {
    
    const [fetchedMentors, setMentors] = useState<Mentor[]>([]);
    const [filterCriteria, setFilterCriteria] = useState<FilterProps>({topics: [], majors: [], nationalities: [], schools: []})
  
    useEffect(() => {
    const fetch_mentors = async() => {
      const fetchedMentors  = await list_mentors()
      setMentors(fetchedMentors as Mentor[])

      // Extract unique topics, majors, nationalities, and schools
      const filterCriteria = {
        topics: [...new Set(fetchedMentors.flatMap((mentor) => (mentor.topics)))],
        majors: [...new Set(fetchedMentors.map((mentor) => (mentor.major)))],
        nationalities: [...new Set(fetchedMentors.map((mentor) => (mentor.nationality)))],
        schools: [...new Set(fetchedMentors.map(mentor => mentor.school))],
      }

    // Update state
      setFilterCriteria(filterCriteria)
    };
    
      fetch_mentors();
    }, [])

    return (
        <div>
            <h1 id = "intro-container">Meet with your mentors!</h1>
            <Filter filterCriteria={filterCriteria} />
            <Card mentors={fetchedMentors as Mentor[]} />
        </div>
    );
};
export default Mentors
 

