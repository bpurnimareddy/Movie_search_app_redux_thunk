import React from 'react';
import './result.css'

const Result=(props)=>{
   const result=props.result
   return(
       <div className="result-box">
           {result.map((e)=>
           <div>
               <img className="poster" src={e.Poster} alt="poster"/>
                <p className="title-name">{e.Title}</p>
            </div>
           )}
        </div>
   )
}

export default Result;