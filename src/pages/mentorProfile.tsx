import "../pages/mentorProfile.css"
function MentorProfile(){
    return(
        <div>
            <div className="emptySpace"></div>

            <div className="profile">
                {/* Nguyen Le */}
                <div className="generalInfo">
                    <div className="pfp">
                        <h1>[PICTURE]</h1>
                        <img src=""></img>
                    </div>
                    <div className="name"></div>
                    <div className="major"></div>
                    <div className="school"></div>
                    <div className="gradYear"></div>
                </div>

                <div className="profileOverview">
                    <div className="title">Overview</div>
                    <div className="description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </div>
                    <div className="topics">I am mentoring in Arts and Science</div>
                </div>

                {/* Hoang Nguyen */}
                <div className="reviews">
                    <div className="title">Reviews</div>
                    People always say...
                </div>
            </div>
        </div>
    );
}

export default MentorProfile;