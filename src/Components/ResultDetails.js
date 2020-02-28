import React from 'react';
import ChartCard from './ChartCard';
import ChartistGraph from 'react-chartist';

function ResultDetails(props){
    console.log(props)
    const {match: { params: {id} } } = props

    const food = props.searchRes.find((item)=>{
       return  item._id === id
    })
    console.log(food)


    var dataBar = {
        labels: ['Cal', 'TtlFat', 'SatFat', 'TransFat', 'Choles', 'Sodium', 'Carbs', 'Sugar', 'Protein', 'Fiber', 'potassium'],
        series: [
            [542, 443, 320, 780, 553, 453, 326, 434, 568, 610, 756, 895],
            [412, 243, 280, 580, 453, 353, 300, 364, 368, 410, 636, 695]
        ]
    };
    var optionsBar = {
        seriesBarDistance: 10,
        axisX: {
            showGrid: false
        },
        height: "500px"
    };
    var responsiveBar = [
        [' max-width: 100%', {
            seriesBarDistance: 5,
            axisX: {
                labelInterpolationFnc: function (value) {
                    return value[0];
                }
            }
        }]
    ];

    return(
        <>
      
         {!food?'page loading':
            
            <div>
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
                    Calories    {food.fields.nf_calories}
               </div>
               <div>
                    Total Fat   {food.fields.nf_total_fat}
               </div>
               <div>
                   Saturated Fat     {food.fields.nf_saturated_fat}    
               </div>
               <div>
                   Monounsaturated Fat   {food.fields.nf_monounsaturated_fat}
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
            <ChartCard/>
               <div className="row" > 
                     <div className="col-md-6" >
                         <ChartCard
                             content={
                                <div id="chartGraph" className="ct-chart" >
                                    <ChartistGraph
                                         data={dataBar}
                                        type="Bar"
                                        options={optionsBar}
                                        responsiveOptions={responsiveBar}
                                    />
                                </div>
                            }
                            legend={
                                <div className="legend">
                                    <i className="fa fa-circle text-info"></i> 
                                    <i className="fa fa-circle text-danger"></i> 
                                </div>
                            }
                         />
                     </div>
                </div>
               
                </div>
            
                </p>
        
                </div>
            }
        </>
    )

}

export default ResultDetails