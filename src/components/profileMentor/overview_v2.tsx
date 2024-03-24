import '../../styles/overview_v2.css'


function Overview_v2() {
    return (
        <>
        <div className='profile_v2'>
            <div className='foreground_v2'></div>
            <div className='container-profile'>
                <div className='item'>
                    <div className='pic-frame' style={{backgroundImage: 'url("./src/assets/alt_img/no_image.jpg")'}}></div>
                </div>
                <div className='item'>
                    <div className='attribute name'> Mathew Nunez</div>
                    <div className='attribute major'> Computer Science Major</div>
                    <div className='attribute col'> 
                        <div className='icon' style={{backgroundImage: 'url("./src/assets/bu.svg")'}}></div>
                    </div>
                    <div className='attribute col'> 
                        Boston University
                        <div className='attribute year'> Class of 2027</div>
                    </div>
                </div>
                <div className='item'>
                    <div className='book-button'> BOOK A MEETING</div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Overview_v2