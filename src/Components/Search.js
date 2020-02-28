import React from 'react'
// import './App.css';
const App_TOKEN = process.env.REACT_APP_TOKEN
const App_ID = process.env.REACT_APP_ID
console.log(`https://api.nutritionix.com/v1_1/search/taco?results=0%3A20&cal_min=0&cal_max=50000&fields=item_name%2Cbrand_name%2Citem_id%2Cbrand_id&appId=${App_ID}&appKey=${App_TOKEN}`)
class Search extends React.Component{
  constructor(props){
    super(props)
this.state={

}

  
  }
<<<<<<< HEAD



    handleChange(event){
        console.log(`input name: ${event.target.name}`)
        console.log(`input value: ${event.target.value}`)
    
      this.setState({
      foodPhrase:event.target.value,
      
      })
    }

    async handleClick(){
        try{
            const res =  await Axios.get( 
            `https://api.nutritionix.com/v1_1/search/?results=0%3A20&cal_min=0&cal_max=50000&fields=item_name%2Cbrand_name%2Citem_id%2Cbrand_id&appId=${App_ID}=${App_TOKEN}`
          )
            console.log(res.data.hits)
            this.setState={
            searchResponse: res.data.hits
            }
        }
        catch(error){
          console.log(error)
        }
    }




=======
>>>>>>> 1af76ccd4ab66f2ca6982c07244b51ca7f6c28cd
render(){
    
  return (
    <>
    <div className="Search">
    
        <header className='Search'>
        <h1>
<<<<<<< HEAD
          Polarity Dust
        </h1>
=======
           Polarity Dust
         </h1>
       
        
        
>>>>>>> 1af76ccd4ab66f2ca6982c07244b51ca7f6c28cd
        </header>
      
      <div> 
        <h1> Search for the food you love </h1>
      </div>
<<<<<<< HEAD
      <form>
        <input onChange={this.handleChange}  name="foodPhrase" value={this.foodPhrase} placeholder=" Search Food By Phrase i.e. taco"/>
          <button onClick={this.handleClick}> Search</button>
      </form>
        <div>
        
        </div>
        
      
      </div>
=======
       <form>
         <input onChange={this.props.handleChange}  name="foodPhrase" value={this.props.food} placeholder=" Search Food By Phrase i.e. taco"/>
           <button onClick={this.props.handleClick}> Search</button>
           
       </form>      
    </div>
>>>>>>> 1af76ccd4ab66f2ca6982c07244b51ca7f6c28cd
    </>
  )


}
}


export default Search;