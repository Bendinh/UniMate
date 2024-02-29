import '../../styles/overview.css'
import Review from './review'
function Overview(){
    return (
        <>
        <div className="emptySpace"></div>
        <div className='main'>
            <div className='profile'>
                <div className="generalInfo"> {/* instead of using each class for each section, use a single container for all*/}
                    <div className="pfp">
                        <img src="./src/assets/alt_img/no_image.jpg"></img>
                    </div>
                    <div className="emptySpace"></div> {/* Don't do this*/}
                    <div className="attributes">
                        <div className="name">Mathew Nunez</div>
                        <div className="nationality">
                            <img src=""></img>
                        </div>
                        <div className="major">Computer Science Major</div>
                        <div className="education">
                            <div className="logo">
                                <img src="./src/assets/bu.svg"></img>
                            </div>
                            <div className="eduinfo"> {/* two of these are off centered*/}
                                <div className="school">Boston University</div>
                                <div className="gradYear">Class of 2027</div>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="profileOverview"> {/* this is the same as "reviews" class, maybe combine two of them into one*/}
                    <div className="title">Overview</div>
                    <div className="description"> {/*this is also similar same as "topics" class, maybe combine them*/}
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </div>
                    <div className="topics">I am mentoring in Arts and Science</div>
                </div>

                <div className="reviews">
                    <Review/> 
                </div>
            </div>
        </div>
        </>
    )
}


export default Overview