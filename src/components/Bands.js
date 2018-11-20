import React from 'react';

const Bands  = (props) => {
  // let bands = props.bands.map((band, index) => {
  //   return <li key={index}> {band.name}</li> 
  // })


  // refactor to include the band directly inside the return statement
  return (
    <ul> 
      {/* {bands} */}
      bands
    </ul>
  )
}

export default Bands