import React, { Component } from 'react';

class ToyCard extends Component {
  constructor(props){
    super(props)

  this.state = {
    likes: this.props.toy.likes
  }

  }
 
  handleDonate = () =>{
    // debugger
    // let toyId = e.target.id
    const {id} = this.props.toy 


    fetch(`http://localhost:3000/toys/${id}`, {method: 'DELETE'})
    .then(resp => resp.json())
    .then(data =>{
      this.props.handleDelete(id)
    })
  }

  handleLikes = () =>{
    let toyId = this.props.toy.id
    let newCount = this.props.toy.likes + 1
    this.setState({
      likes: newCount
    })

    let formData = {
      likes: newCount
    }

    const reqObj = {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
        },
      body: JSON.stringify(formData)
    }

    fetch(`http://localhost:3000/toys/${toyId}`, reqObj)
    .then(resp => resp.json())
    .then(updatedToy =>{
      // debugger
      this.props.updateLikes({updatedToy})
    })
 
  }
 
  render() {
    const {id, name, image, likes} = this.props.toy
    return (
      <div className="card">
        <h2>{name}</h2>
        <img src={image} alt={name} className="toy-avatar" />
        <p>{likes} Likes </p>
        <button id={id} onClick={this.handleLikes} className="like-btn">Like {'<3'}</button>
        <button id={id} onClick={this.handleDonate} className="del-btn">Donate to GoodWill</button>
      </div>
    );
  }

}

export default ToyCard;

// import React, { Component } from 'react';

// class ToyCard extends Component {
//   constructor(props){
//     super(props)

//     this.state = {
//       like: this.props.toy.likes,

//     }
//   }

//   handleDelete = (e) =>{
//     let toyId = this.props.toy.id 
    
//     const reqObj = {
//       method: 'DELETE'
//     }

//     fetch(`http://localhost:3000/toys/${toyId}`, reqObj)
//     .then(() =>{ 
//       this.props.donateToy(toyId)
//     })
//   }

//   handleLikes =  (e) =>{
//     let toyId = this.props.toy.id
//     let newCount = this.props.toy.likes + 1
//     this.setState({
//       likes: newCount
//     })

//     let formData = {
//       likes: newCount
//     }

//     const reqObj = {
//       method: 'PATCH',
//       headers: {
//         'Content-Type': 'application/json',
//         'Accept': 'application/json'
//         },
//       body: JSON.stringify(formData)
//     }

//     fetch(`http://localhost:3000/toys/${toyId}`, reqObj)
//     .then(resp => resp.json())
//     .then(newToy =>{
//       // debugger
//       this.props.updateLikes(newToy)
//     })
    
    
//   }

//   render() {
//     return (
//       <div className="card">
//         <h2>{this.props.toy.name}</h2>
//         <img src={this.props.toy.image } alt={this.props.toy.name} className="toy-avatar" />
//         <p>{this.props.toy.likes} Likes </p>
//         <button onClick={this.handleLikes} className="like-btn">Like {'<3'}</button>
//         <button onClick={this.handleDelete} className="del-btn">Donate to GoodWill</button>
//       </div>
//     );
//   }

// }

// export default ToyCard;
