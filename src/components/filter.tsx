import './filter.css'
// import { useState, useEffect } from "react";
import { FilterProps } from '../types/filterProps';

// Card component to display user profile and attributes
function Filter({filterCriteria}: {filterCriteria: FilterProps}) {
    const {topics, majors, nationalities, schools} = filterCriteria
    // const [selectedTopic, setSelectedTopic] = useState<string>('*')
    // const [selectedMajor, setSelectedMajor] = useState<string>('*')
    // const [selectedNationality, setSelectedNationality] = useState<string>('*')
    // const [selectedSchool, setSelectedSchool] = useState<string>('*')

//   useEffect(() => {
//     // Filter mentors based on selected criteria
//     const filterMentors = () => {
//         let result = Array.isArray(filterCriteria) ? filterCriteria : [filterCriteria];

//       if (selectedTopic) {
//         result = result.filter(mentor => mentor.topics.includes(selectedTopic));
//       }
//       if (selectedMajor) {
//         result = result.filter(mentor => mentor.major === selectedMajor);
//       }
//       if (selectedNationality) {
//         result = result.filter(mentor => mentor.nationality === selectedNationality);
//       }
//       if (selectedSchool) {
//         result = result.filter(mentor => mentor.school === selectedSchool);
//       }

//       setFilteredMentors(result);
//     };

//     filterMentors();
//   }, [selectedTopic, selectedMajor, selectedNationality, selectedSchool, mentors]);

  return (
    <div className='container'>
        <select>
        <option value="*">Topic of Interest</option>
        {topics.map((topic, index) => (
            <option key={index} value={topic}>
            {topic}
            </option>
        ))}
        </select>

        <select>
        <option value="*">Major</option>
        {majors.map((major, index) => (
            <option key={index} value={major}>
            {major}
            </option>
        ))}
        </select>

        <select>
        <option value="*">Nationaility</option>
        {nationalities.map((nationality, index) => (
            <option key={index} value={nationality}>
            {nationality}
            </option>
        ))}
        </select>

        <select>
        <option value="*">School</option>
        {schools.map((school, index) => (
            <option key={index} value={school}>
            {school}
            </option>
        ))}
        </select>
    </div>
    );
}

export default Filter;
