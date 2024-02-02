import pic from '../../assets/profile.jpeg'
import './profile.css'
const ProfileCard = () => {
    return (
        <div className="profile-container">
            <div className="card">
                <div className="upper">

                </div>
                    <img src={pic} alt="" className="avatar"/>
                
                <div className="details">
                    <div className="firstRow">
                        <p className="name">
                           Yash Raj
                        </p>
                        <p className="age">
                               21
                        </p>
                    </div>
                    <div className="secondRow">
                            New Delhi
                    </div>
                </div>
                <div className="line"></div>
                <div className="profileDetails">
                    <div className="info">
                        <div className="num">
                            80k
                        </div>
                        <div className="title">
                            followers
                        </div>
                    </div>
                    <div className="info">
                        <div className="num">
                            803k 
                        </div>
                        <div className="title">
                            likes
                        </div>
                    </div>
                    <div className="info">
                        <div className="num">
                            1.4K
                        </div>
                        <div className="title">
                            Photos
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default ProfileCard