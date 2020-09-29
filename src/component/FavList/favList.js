import React from 'react';
import {useSelector} from 'react-redux';
import  './favList.css';
import Header from '../Header/header'

const FavList =()=>{
    const favList=useSelector((state)=>state.favoriteList.favList)
    console.log(favList)
    return(
        <div className="favList-main">
             <Header/>
            <h1 className="my-favorites">My Favorites</h1>
            <div className="fav-card-box">
                {favList.map((list)=>{
                    return(
                            <div className="fav-card">
                                <img className="fav-poster" src={list.Poster} alt="poster"/>
                                <p className="fav-title-name">{list.Title}</p>
                            </div>
                    )
                })}
            </div>
        </div>

    )
}

export default FavList