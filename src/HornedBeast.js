import React from 'react';
// import Main from './Main'
// import { Button } from 'bootstrap';
import data from './data/data.json'


class HornedBeast extends React.Component {
  render(){

    let beastsArray = [];
    data.forEach((newBeast, index) => {
      beastsArray.push(<HornedBeast title={newBeast.title} image_url={newBeast.image_url} description={newBeast.description} /> );
    });

    // console.log(beastsArray, 'beastarray')

    return(
      <>
      <h2>{beastsArray[0].props.title}</h2>
      <img src={beastsArray[0].props.image_url} alt='' title=''/>
      <p>{beastsArray[0].props.description}</p>






      {/* <Button>Heart</Button> */}
      </>
    )
  }
}

export default HornedBeast;
