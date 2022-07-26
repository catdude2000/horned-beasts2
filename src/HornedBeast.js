import React from 'react';
// import Main from './Main'
// import { Button } from 'bootstrap';



class HornedBeast extends React.Component {
  render(){
    return(
      <>
      <h2>{this.props.title}</h2>
      <img src={this.props.imageUrl} alt='' title=''/>
      <p>{this.props.description}</p>
      {/* <Button>Heart</Button> */}
      </>
    )
  }
}

export default HornedBeast;
