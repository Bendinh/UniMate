import './filter.css'
import { list_mentors } from '../backend/firebase';
import { useState, useEffect } from "react";

// Card component to display user profile and attributes
function Filter() {
  const [mentors, setMentors] = useState<any []>([]);
  const [topics, setTopics] = useState<string[]>([]);
  const [majors, setMajors] = useState<string[]>([]);
  const [nationalities, setNationalities] = useState<string[]>([]);
  const [schools, setSchools] = useState<string[]>([]);

  useEffect(() => {
    const fetch_mentors = async() => {
      const mentors  = await list_mentors();
      setMentors(mentors);

      // Extract unique topics, majors, nationalities, and schools

      const topics = [...new Set(mentors.flatMap((mentor) => (mentor.topics)))];
      const majors = [...new Set(mentors.map((mentor) => (mentor.major)))];
      const nationalities = [...new Set(mentors.map((mentor) => (mentor.nationality)))];
      const schools = [...new Set(mentors.map(mentor => mentor.school))];

      // Update state
      setTopics(topics);
      setMajors(majors);
      setNationalities(nationalities);
      setSchools(schools);
    }

    fetch_mentors();
  }, [])

  return (
    <div className='container'>
        <select>
        {topics.map((topic, index) => (
            <option key={index}>
            {topic}
            </option>
        ))}
        </select>

        <select>
        {majors.map((major, index) => (
            <option key={index}>
            {major}
            </option>
        ))}
        </select>

        <select>
        {nationalities.map((nationality, index) => (
            <option key={index}>
            {nationality}
            </option>
        ))}
        </select>

        <select>
        {schools.map((school, index) => (
            <option key={index}>
            {school}
            </option>
        ))}
        </select>
    </div>
    );
}

export default Filter;
