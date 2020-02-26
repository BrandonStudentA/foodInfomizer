import React from 'react'

function ResultDetails(props){
    console.log(props)
    const {match: { params: {id} } } = props

    const food = props.searchRes.find((item)=>{
       return  item._id === id
    })
    console.log(food)


    return(
        <>
      
         {!food?'page loading':
            
            <div>
                {food.fields.images_front_url},
               <h1>
                    {food.fields.brand_name} 
                    {food.fields.item_name} 
                    {food.fields.upc}
               </h1> 
                <h2>
                    {food.fields.item_descrition} 
                    {food.fields.nf_ingredient_statement}
                </h2>
                <p>
                <div>
                    Calories {food.fields.nf_calories}
               </div>
               <div>
                    Total Fat{food.fields.nf_total_fat}
               </div>
               <div>
                   Saturated Fat {food.fields.nf_saturated_fat}    
               </div>
               <div>
                   Monounsaturated Fat {food.fields.nf_monounsaturated_fat}
               </div>
               <div>
                   Polyunsaturated Fat {food.fields.nf_polyunsaturated_fat}
               </div>
               <div>
                   Trans Fatty Acid {food.fields.nf_trans_fatty_acid}
               </div>
               <div>
                  Cholesterol {food.fields.nf_cholesterol}
               </div>
               <div>
               {food.fields.nf_sodium}
               </div>
               <div>
               {food.fields.nf_total_carbohydrate}
               </div>
               <div>
               {food.fields.nf_dietary_fiber}
               </div>
               <div>
               {food.fields.nf_sugars}
               </div>
               <div>
               {food.fields.nf_vitamin_a_dv}
               </div>
               <div>
               {food.fields.nf_vitamin_c_dv}
               </div>
               <div>
               {food.fields.nf_calcium_dv}
               </div>
               <div>
               {food.fields.nf_iron_dv}
               </div>
               <div>
               {food.fields.nf_potassium}
               </div>
               <div>
               {food.fields.nf_servings_per_container}
               </div>
               <div>
               {food.fields.nf_serving_size_qty}
               </div>
               <div>
               {food.fields.images_front_full_url}
               </div>

                
                
                
               
               
               
                
                
                
                
                
              
                
                 
                 
                
               
                {food.fields.nf_serving_size_unit}
                {food.fields.nf_serving_weight_grams}
                {food.fields.metric_qty}
                {food.fields.metric_uom}
               
                </p>
            
            </div>
           
        
        }
      </>
    )

}

export default ResultDetails