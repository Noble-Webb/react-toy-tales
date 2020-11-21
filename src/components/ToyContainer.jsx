import React from 'react';
import ToyCard from './ToyCard'

const ToyContainer = (props) => {
  
  const mapToyz = (toyz) =>{
    return toyz.map(toy =>{
      return <ToyCard key={toy.id} toy={toy}  updateLikes={()=> props.updateLikes()} donateToy={() => props.donateToy()}/> 
    })
  }

  return(
    <div id="toy-collection">
      {mapToyz(props.toyz)}
    </div>
  );
}

export default ToyContainer;
