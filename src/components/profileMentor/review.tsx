import '../../styles/review.css'

function Review() {
    return (
        <>
        <div className="reviews">
            <div className="title">Reviews</div>
            <h4> People always say</h4>
            <div className="reviews-filter">
                <div className="option selected"> All reviews </div>
                <div className="option"> Positive Altitude </div>
                <div className="option"> Constructive </div>
                <div className="option"> Friendly</div>
            </div>
            {/* comment section*/}
            <div className="review">
                <div className="review-col">
                    <div className="profile-img" style={{backgroundImage: "url('./src/assets/alt_img/no_image.jpg')"}}></div>
                    <div className="review-col-title"> Hoang Nguyen </div>
                    <div className="review-col-title"> Student </div>
                </div>
                <div className="review-col">
                    <div className="rating">
                        {/*TODO: add sample data to firebase*/}
                        <div className="full-circle"></div>
                        <div className="full-circle"></div>
                        <div className="full-circle"></div>
                        <div className="full-circle"></div>
                        <div className="full-circle empty"></div>
                                        
                        <div className="date"> Febuary 26, 2024</div>
                    </div>                 
                    <p>Mathew was very helpful, approachable and understanding. He helped me a lot to understand the industry and the challenges and he provided guidance on next steps. I will definitively book a... More</p>
                </div>
            </div>
        </div>
        </>
    )
}


export default Review