import React from 'react'







function ResultDetails(props){


     
    return(
        <>
        
      <div>
         {props.searchRes.map((food, index) =>
        <div  key={index} >
            
            <div>
                {food.fields.images_front_url}
                
                {food.fields.brand_name} 
            
            
            </div>
           
        </div>
        
        )}
      </div>
      </>
    )


    



}

export default ResultDetails