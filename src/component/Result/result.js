import React from 'react';
import './result.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faHeart} from '@fortawesome/free-solid-svg-icons';
import * as actions from '../../store/action';


import {useSelector,useDispatch} from 'react-redux';

const Result=()=>{
    const movieList = useSelector((state)=>state.addMovies.result);
    const dispatch=useDispatch();

    const favListHandle=(event,data)=>{
        event.preventDefault();
        dispatch(
            actions.add_favList(data)
        )

    }
    
   return(
       <div className="result-box">
           {movieList.map((data)=>
           <div className="card">
               <img className="poster" src={data.Poster} alt="poster"/>
                <p className="title-name">{data.Title}<button className="fav-btn" onClick={(e)=>favListHandle(e,data)}><FontAwesomeIcon icon={faHeart} color='purple'></FontAwesomeIcon></button></p>
            </div>
           )}
        </div>
   )
}

export default Result;