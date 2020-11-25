import React from 'react';
import './App.css';

import Header from './components/Header'
import ToyForm from './components/ToyForm'
import ToyContainer from './components/ToyContainer'

class App extends React.Component{

  state = {
    display: false,
    toys: [],
    likes: undefined
  }

  handleClick = () => {
    let newBoolean = !this.state.display
    this.setState({
      display: newBoolean
    })
  }

//set the state of toys and rerender the toys with the new toy added
  addToy = (newToy) =>{
    // debugger 
    this.setState(prevState => {
      return {
        toys: [...prevState.toys, newToy] 
      }
    })
  }

  handleDelete = (id) =>{
    // debugger
    this.setState(prevState =>{
      return{
        toys: prevState.toys.filter(toy => toy.id !== id)
      }
    })
  }

  updateLikes = (updatedToy) =>{
  //  debugger 
    // const updatedToys = this.state.toys.map(toyObj =>{
    //   if(toyObj.id === updatedToy.id){
    //     return {
    //       ...toyObj,
    //       likes: toyObj.likes
    //     }
    //   } else {
    //     return toyObj
    //   }
    // })

    // this.setState({
    //   likes: updatedToys
    // })
    this.componentDidMount()
  }

//grab the toy datapoints from the db and save them into the empty array of toys in state
  componentDidMount(){
    fetch('http://localhost:3000/toys')
    .then(resp => resp.json())
    .then(toys => {
      this.setState({
        toys: toys
      })
    })
  }

  render(){
    return (
      <>
        <Header/>
        { this.state.display
            ?
          <ToyForm addToy={this.addToy}/>
            :
          null
        }
        <div className="buttonContainer">
          <button onClick={this.handleClick}> Add a Toy </button>
        </div>
        <ToyContainer toys={this.state.toys} handleDelete={this.handleDelete} updateLikes={this.updateLikes}/>
      </>
    );
  }

}

export default App;





// import React from 'react';
// import './App.css';

// import Header from './components/Header'
// import ToyForm from './components/ToyForm'
// import ToyContainer from './components/ToyContainer'


// class App extends React.Component{

//   state = {
//     toys: [],
//     display: false
//   }

//   donateToy = (toyId) =>{
//     this.componentDidMount()
//   }

//   handleClick = () => {
//     let newBoolean = !this.state.display
//     this.setState({
//       display: newBoolean
//     })
//   }

//   updateState = (newToy) =>{
//     let newToyz = [...this.state.toys, newToy] 
//     this.setState({
//       toys: newToyz
//     })
//   }

//   updateLikes = (toyId) => {
//     const updatedLikes = this.state.toys.map(toyObj => {
//       if (toyId === toyObj.id) {
//         return {
//           ...toyObj,
//           likes: this.state.toys.likes
//         }
//       } else {
//         return toyObj
//       }
//     })

//     this.setState({
//       likes: updatedLikes
//     })
//     this.componentDidMount()
//   }

//   componentDidMount(){
//     fetch("http://localhost:3000/toys")
//     .then(resp => resp.json())
//     .then(toys =>{
//       this.setState({
//         toys: toys
//       })
//     })
//   }

//   render(){
//     return (
//       <>
//         <Header/>
//         { this.state.display
//             ?
//           <ToyForm updateState={this.updateState} />
//             :
//           null
//         }
//         <div className="buttonContainer">
//           <button onClick={this.handleClick}> Add a Toy </button>
//         </div>
//         <ToyContainer updateLikes={()=>this.updateLikes()} toyz={this.state.toys} donateToy={() => this.donateToy()}/>
//       </>
//     );
//   }

// }

// export default App;
