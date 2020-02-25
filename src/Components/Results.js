import React from 'react'
import {Link} from 'react-router-dom'

function Results(props){
  


    return(
       
        <div>
            
              
        {props.searchRes.map((food, index) =>
        <div  key={index} >
            <Link to='/ResultDetails'>
            <h1 >{food.fields.brand_name}</h1>
            </Link>
        </div>
        
        )}


        </div>
             
    )  



}

   
  

export default Results
