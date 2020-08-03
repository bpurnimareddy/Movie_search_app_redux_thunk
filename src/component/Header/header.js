import React from 'react';
import './header.css'

const Header=(props)=>{
    return(
        <div className="header">
            <a id="home-link">Home</a>
            <a id="favorite-link">Favorite</a>
        </div>
    )
}

export default Header;