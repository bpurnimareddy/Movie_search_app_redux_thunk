import React, { useState } from 'react';
import {useDispatch} from 'react-redux';
import './home_page.css';
import Result from '../Result/result';
import * as action from '../../store/action';
import Header from '../Header/header';


const Home =()=>{
    
    const dispatch=useDispatch();

    const [enter_details,setEtenter_details]=useState('');
    const [searchFlag,setSearchFlag]=useState(false);
 
    const handleinput=(e)=>{
       const entered_val=e.target.value
       setEtenter_details(entered_val)
    }

    const handleSearch=(event)=>{
        event.preventDefault();
        setSearchFlag(true)
        dispatch(action.getMovies(enter_details))
    }
        return(
            <div className="home_page">
               <Header/>              
                <div className="input-box">
                    <div>
                        <input className="search-box" 
                            onChange={(e)=>handleinput(e)}
                            type="text" placeholder="search movies..."
                        />
                        <button onClick={(e)=>handleSearch(e)}className="search-btn">Search</button>
                    </div>
                    {searchFlag?<Result/>:null}
                </div>
            </div>
        )
}    

export default Home;