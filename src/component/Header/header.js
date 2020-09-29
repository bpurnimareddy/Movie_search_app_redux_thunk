import React from 'react';
import {Link} from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faUserCircle} from '@fortawesome/free-solid-svg-icons';
import {faUser} from '@fortawesome/free-solid-svg-icons';
import {faHeart} from '@fortawesome/free-solid-svg-icons';
import {faSignOutAlt} from '@fortawesome/free-solid-svg-icons';
import {useSelector} from 'react-redux';
import '../Home/home_page.css'

const Header=()=>{
    const userName = useSelector(state=>state.signupReducer[0].name)
    return(
        <div className="nav-bar">
            <p id="app-title-homePage">iflix</p>
            <div className="dropdown">
            <button className="profile-details"><FontAwesomeIcon className="user" icon={faUserCircle} size='3x'></FontAwesomeIcon><span className="user">{userName}</span></button>
    <div className="dropdown-menu">
        <Link className="dropdown-link" to='/my-profile'><FontAwesomeIcon className="user" icon={faUser} size='1x' color='purple'></FontAwesomeIcon> My Profile</Link>
        <Link className="dropdown-link" to='/favList'><FontAwesomeIcon className="user" icon={faHeart} size='2x' color='purple'></FontAwesomeIcon> Favorite List</Link>
        <Link className="dropdown-link" to="/"><FontAwesomeIcon className="user" icon={faSignOutAlt} size='2x' color='purple'></FontAwesomeIcon> Sign Out</Link>
    </div>
</div>
</div>
    )
}

export default Header;