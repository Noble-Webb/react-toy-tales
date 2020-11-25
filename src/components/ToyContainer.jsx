import React from 'react';
import ToyCard from './ToyCard'

const ToyContainer = (props) => {
  const mapToys = () =>{
   return  props.toys.map(toy =>{
      return <ToyCard toy={toy} key={toy.id} handleDelete={props.handleDelete} updateLikes={props.updateLikes}/>
    })
  }
  
  return(
    <div id="toy-collection">
      {mapToys()}
    </div>
  );
}

export default ToyContainer;

// import React from 'react';
// import ToyCard from './ToyCard'

// const ToyContainer = (props) => {
  
//   const mapToyz = (toyz) =>{
//     return toyz.map(toy =>{
//       return <ToyCard key={toy.id} toy={toy}  updateLikes={()=> props.updateLikes()} donateToy={() => props.donateToy()}/> 
//     })
//   }

//   return(
//     <div id="toy-collection">
//       {mapToyz(props.toyz)}
//     </div>
//   );
// }

// export default ToyContainer;
