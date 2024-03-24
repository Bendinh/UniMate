import '../../styles/overview.css'
import Review from './review'
import {Star} from '@mui/icons-material';
import { get_mentor } from '../../services/firebase';
import { useParams } from 'react-router-dom';
import { Mentor } from '../../types/mentor';
import React, { useEffect, useState } from 'react';
import { PopupButton } from "react-calendly";

function Overview() {
    const {mentorID} = useParams()
    const [mentor, setMentor] = useState<Mentor>({})
    
    useEffect(() => {
        const fetchMentor = async () => {

            const fetchedMentor = await get_mentor(mentorID) as Mentor
            setMentor(fetchedMentor);
            console.log(fetchedMentor)
        };
    
        fetchMentor();

      }, [mentorID]);

    return (
        <>
        <div className="profile">
            <div className='background'></div>
            <div className='container'>
                <div className='col'>
                    <img src={mentor.profile_pic}></img>
                </div>

                <div className='col info'>
                    <div className='attribute name'>{mentor.name}</div>
                    <div className='attribute major'>{mentor.major} Major</div>
                    <div className='attribute'>
                        <div className='sub'>
                            <img src='data:image/png;base64,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'></img>
                            <div className='text'>
                                <div>{mentor.school}</div>
                                <div style={{color: 'gray', fontSize: '13px'}}>Class of {mentor.graduation}</div>
                            </div>
                        </div>
                    </div>
                </div>
                    <PopupButton className='col bttn'
                    url={mentor.bookingLink}
                    rootElement={document.getElementById("root")!}
                    text="BOOK A MEETING"
                    />
            </div>

            <div className='container'>
                <div className='header'>
                    <h3>Overview</h3>
                </div>
                <div className='col description'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...
                    <div className='show'>show more</div>
                </div>
                <div className='col topics'>
                    <Star style={{verticalAlign:'bottom'}}/>
                    I'm Mentoring {mentor.topics && mentor.topics.join(', ')}
                </div>
            </div>

            <div className='container'>
                <div className='header'>
                    <h3>Reviews</h3>
                </div>
                <Review/>
            </div>
        </div>
        </>
    )
}

export default Overview