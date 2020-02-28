import React from 'react'
import {Link} from 'react-router-dom'

function Results(props){
  


    const { searchRes} = props

    return(
        <div>
            {searchRes.map((food, index) =>
        <div  key={index} >
            <Link to={`/results/${food._id}`}>
                <h2>{food.fields.brand_name}
                    {food.fields.item_name}
                </h2>
            </Link>
        </div>
        
        )}
        </div>      
    )  
}

   
  

export default Results
