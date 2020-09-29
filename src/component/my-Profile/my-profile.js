import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faUserCircle} from '@fortawesome/free-solid-svg-icons';
import {faHeart} from '@fortawesome/free-solid-svg-icons';
import './my-profile.css';
import {useSelector} from 'react-redux';
import {Link} from 'react-router-dom';
import Header from '../Header/header';



const MyProfile =()=>{
   
    const profile_details=useSelector((state)=>state.addProfile.profileDetails)
    console.log(profile_details)
    return(
        <div className="main">
            <Header/>
            <div className="my-profile-box">
                <div className="profile-details-box">
                    <FontAwesomeIcon icon={faUserCircle} size='7x' enableBackground='false'></FontAwesomeIcon>
                    <div className="vertical-line"></div>
                    <div className="profile-label">
                            <p className="profile-label">Name:{profile_details[0].name}</p>
                            <p className="profile-label">Email:{profile_details[0].email}</p>
                            <Link to="/favList" className="fav-link"> My Favorites <FontAwesomeIcon icon={faHeart}></FontAwesomeIcon></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}   

export default MyProfile