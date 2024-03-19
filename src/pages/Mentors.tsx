import '../pages/mentors.css'
import Card from '../components/Mentors/card'
import { useState, useEffect } from "react";
import { list_mentors } from '../services/firebase';
import { Mentor } from '../types/mentor';
import { FilterProps } from '../types/filterProps';
import Filter from '../components/Mentors/filter';


export const Mentors = () => {
    
    const [fetchedMentors, setMentors] = useState<Mentor[]>([]);
    const [displayedMentors, setDisplayedMentors] = useState<Mentor[]>([]);
    const [filterCriteria, setFilterCriteria] = useState<FilterProps>({topics: [], majors: [], nationalities: [], schools: []})
    const [filterAttributes, setFilterAttributes] = useState<FilterProps>({topics: [], majors: [], nationalities: [], schools: []});
    const {topics, majors, nationalities, schools} = filterAttributes
    const [filterAttempted, setFilterAttempted] = useState(false);

    const handleFilterChange = (value: string, filterType: keyof FilterProps) => {
        setFilterCriteria(prevCriteria => ({
            ...prevCriteria,
            [filterType]: value === '*' ? [] : [value],
        }));
        setFilterAttempted(true);
    };

    useEffect(() => {
        const fetch_mentors = async() => {
            const fetchedMentors  = await list_mentors() as Mentor[];
            setMentors(fetchedMentors as Mentor[])

            // Extract unique topics, majors, nationalities, and schools
            const topics = [...new Set(fetchedMentors.flatMap((mentor) => mentor.topics))];
            const majors = [...new Set(fetchedMentors.map((mentor) => mentor.major))];
            const nationalities = [...new Set(fetchedMentors.map((mentor) => mentor.nationality))];
            const schools = [...new Set(fetchedMentors.map((mentor) => mentor.school))];

            // Set the filter attributes as constants
            setFilterAttributes({ topics, majors, nationalities, schools });
        };
    
       fetch_mentors();
    }, [])

    useEffect(() => {
        // Filter logic
        const filterMentors = () => {
            const filtered = fetchedMentors.filter(mentor => {
                const matchesMajor = filterCriteria.majors.length === 0 || filterCriteria.majors.includes(mentor.major);
                const matchesNationality = filterCriteria.nationalities.length === 0 || filterCriteria.nationalities.includes(mentor.nationality);
                const matchesSchool = filterCriteria.schools.length === 0 || filterCriteria.schools.includes(mentor.school);
                return matchesMajor && matchesNationality && matchesSchool;
            });
            setDisplayedMentors(filtered);
        };

        filterMentors();
    }, [filterCriteria, fetchedMentors]); // This useEffect depends on filterCriteria and fetchedMentors


    return (
        <div>
            <h1 id = "intro-container">Meet with your mentors!</h1>
            <div className='filter-container'>
                <Filter options={majors} onSelect={(value) => handleFilterChange(value, 'majors')} placeholder="Major" />
                <Filter options={nationalities} onSelect={(value) => handleFilterChange(value, 'nationalities')} placeholder="Nationality" />
                <Filter options={schools} onSelect={(value) => handleFilterChange(value, 'schools')} placeholder="School" />
                <Filter options={topics} onSelect={(value) => handleFilterChange(value, 'topics')} placeholder="Topic of Interest" />
            </div>
            
            {displayedMentors.length > 0 ? (
                <Card mentors={displayedMentors} />
            ) : filterAttempted && (
                <div style={{ textAlign: 'center', marginTop: 'auto', fontSize: '4vh' }}>
                    Oops, there are no current mentors that fit your criteria.
                </div>
            )}
        </div>
    );
};
export default Mentors
 

