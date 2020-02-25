import React from 'react';
// import logo from './logo.svg';
import Search from './Components/Search'
import {Link} from 'react-router-dom'
import {Route} from 'react-router-dom'
import './App.css'
import Header from './Components/Header'
import Results from './Components/Results'
import ResultsDetails from './Components/ResultDetails'
import Axios from 'axios';
const App_TOKEN = process.env.REACT_APP_TOKEN
const App_ID = process.env.REACT_APP_ID
console.log(`https://api.nutritionix.com/v1_1/search/taco?results=0%3A20&cal_min=0&cal_max=50000&fields=item_name%2Cbrand_name%2Citem_id%2Cbrand_id&appId=${App_ID}&appKey=${App_TOKEN}`)

class App extends React.Component{
  constructor(props){
    super(props)

    this.state = {
      foodPhrase: '',
      searchResponse: [],
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
      const res =  await Axios.get( 
        `https://api.nutritionix.com/v1_1/search/${this.state.foodPhrase}?results=0%3A20&cal_min=0&cal_max=50000&fields=item_name%2Cbrand_name%2Citem_id%2Cbrand_id&appId=${App_ID}&appKey=${App_TOKEN}`
      )
      console.log(res.data.hits)

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
         
         
          <Route path={'/Search'} Component={Search}/>
          <Route path={'/ResultsDetails/'} Component={ResultsDetails}/>

          <Header/>

          <Search
            handleChange={this.handleChange}
            handleClick={this.handleClick}
            food={this.state.foodPhrase}
          />
        
            <Results
             searchRes={this.state.searchResponse}
            />
          
          
        </div>
      </>
    )

  }
}


    
    
  




export default App;
