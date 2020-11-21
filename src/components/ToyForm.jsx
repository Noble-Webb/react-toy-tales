// import React, { Component } from 'react';

// class ToyForm extends Component {
//   constructor(props){
//     super(props)

//     this.state = {
//       name: "",
//       image: ''
//     }
//   }

//  handleSubmit = (e) =>{
//     e.preventDefault();
//     // debugger 
//     let formData = {
//       name: this.state.name,
//       image: this.state.image,
//       likes: 0

//     }

//     this.setState({
//       name: e.target.parentElement[0].value = " ",
//       image: e.target.parentElement[1].value = " "
//     })
    
    
//     const reqObj = {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//         'Accept': 'application/json'
//         },
//       body: JSON.stringify(formData)
//     }

//     fetch("http://localhost:3000/toys", reqObj)
//     .then(resp => resp.json())
//     .then(newToy =>{
//       // debugger
//       this.props.updateState(newToy)
//     })
  
//   }


//   handleForm = (e) =>{
//     // debugger
//     if(e.target.name === 'name'){
//       this.setState({
//         name: e.target.value
//       })
//     }else if(e.target.name === 'image'){
//       this.setState({
//         image: e.target.value
//       })
//     }
//   }


//   render() {
//     return (
//       <div className="container">
//         <form className="add-toy-form" onChange={this.handleForm} >
//           <h3>Create a toy!</h3>
//           <input type="text" name="name" placeholder="Enter a toy's name..." className="input-text"/>
//           <br/>
//           <input type="text" name="image" placeholder="Enter a toy's image URL..." className="input-text"/>
//           <br/>
//           <input  onClick={this.handleSubmit} type="submit" name="submit" value="Create New Toy" className="submit"/>
//         </form>
//       </div>
//     );
//   }

// }

// export default ToyForm;
import React, { Component } from 'react';

class ToyForm extends Component {

  render() {
    return (
      <div className="container">
        <form className="add-toy-form">
          <h3>Create a toy!</h3>
          <input type="text" name="name" placeholder="Enter a toy's name..." className="input-text"/>
          <br/>
          <input type="text" name="image" placeholder="Enter a toy's image URL..." className="input-text"/>
          <br/>
          <input type="submit" name="submit" value="Create New Toy" className="submit"/>
        </form>
      </div>
    );
  }

}

export default ToyForm;
