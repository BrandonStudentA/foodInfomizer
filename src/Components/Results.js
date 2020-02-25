import React from 'react'


function Results(props){

    return(
       
        <div>
            
              
        {props.searchRes.map((food, index) =>
        <div  key={index} >
            <h1 >{food.fields.brand_name}</h1>
        </div>
        
        )}


        </div>
             
    )  



}

   
  

export default Results
