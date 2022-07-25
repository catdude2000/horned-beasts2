import React from 'react';
import HornedBeast from './HornedBeast';


class Main extends React.Component {
  render(){
    return(
      <>
      <HornedBeast title="theGoodBeast" imageUrl="image" description="The good one" />
      <HornedBeast title="theBadBeast" imageUrl="image2" description="The bad one" />
      </>
    );
  }
}

export default Main;
