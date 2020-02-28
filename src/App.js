import React from 'react';
<<<<<<< HEAD
// import logo from './logo.svg';
import Search from './Components/Search'
import { Route } from 'react-router-dom'
import './App.css'
=======
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
// import am4themes_animated from "@amcharts/amcharts4/themes/animated";
>>>>>>> 1af76ccd4ab66f2ca6982c07244b51ca7f6c28cd

import Search from './Components/Search'
import {Route,  } from 'react-router-dom'


<<<<<<< HEAD
function App() {
    return ( 
    < div className = "App" >

        <div className = "App-header" >
        <Search / >
        </div> </div >
    )

}



export default App;
=======
import './App.css'
import './Assets/react.chart.css'
import Header from './Components/Header'
import Results from './Components/Results'
import ResultDetails from './Components/ResultDetails'
import Axios from 'axios';
const App_TOKEN = process.env.REACT_APP_TOKEN
const App_ID = process.env.REACT_APP_ID


class App extends React.Component{
  constructor(props){
    super(props)

    this.state = {
      foodPhrase: '',
      searchResponse: [],
      loading: true

    }
    this.handleChange = this.handleChange.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }



  handleChange(event){
    console.log(`input name: ${event.target.name}`)

    this.setState({
      foodPhrase: event.target.value 
    })
  }

  async handleClick(event){
    event.preventDefault()
    try {
      const res =  await Axios.get(`https://api.nutritionix.com/v1_1/search/${this.state.foodPhrase}?results=0%3A20&cal_min=0&cal_max=50000&fields=item_name%2Cbrand_name%2Citem_id%2Cbrand_id%2Cupc%2Citem_type%2Citem_description%2Cnf_ingredient_statement%2Cnf_calories%2Cnf_calories_from_fat%2Cnf_total_fat%2Cnf_saturated_fat%2Cnf_monounsaturated_fat%2Cnf_polyunsaturated_fat%2Cnf_trans_fatty_acid%2Cnf_cholesterol%2Cnf_sodium%2Cnf_total_carbohydrate%2Cnf_dietary_fiber%2Cnf_sugars%2Cnf_protein%2Cnf_vitamin_a_dv%2Cnf_vitamin_c_dv%2Cnf_calcium_dv%2Cnf_iron_dv+nf_potassium%2Cnf_servings_per_container%2Cnf_serving_size_qty%2Cnf_serving_size_unit%2Cnf_serving_weight_grams%2Cmetric_qty%2Cmetric_uom%2Cimages_front_full_url%2Cupdated_at%2Csection_ids&appId=${App_ID}&appKey=${App_TOKEN}`
      )
      console.log(res.data.hits)
        //  = data
      this.setState({
        searchResponse: res.data.hits,
        loading: false
      })
    } catch(error){
      console.log(error)
    }
  }
  
  render() { 
 
    
 

    return ( 

      <>
        <div className="App">

         
          <Header/>
         
          <Route
            exact
            path='/'
            render={()=>
          <>
          <Search
            handleChange={this.handleChange}
            handleClick={this.handleClick}
            food={this.state.foodPhrase}
          />
          <Results
            searchRes={this.state.searchResponse}
            /> 
            </>
            }/>
           
        <Route exact path="/results/:id" 
          //this is allowing to pass props to other 
          render={(routerProps)=>
          <ResultDetails  className='ResultDetails'
          searchRes={this.state.searchResponse }
          {...routerProps}/>}
        />
          
      
          <div></div>
        </div>
      </>
    )
    
  }
}


export default App;
>>>>>>> 1af76ccd4ab66f2ca6982c07244b51ca7f6c28cd
