import React from 'react';
import Main from './Main'






class HornedBeast extends React.Component {
  render(){
    return(
      <>
      <h2>{this.props.title}</h2>
      <img src={this.props.imageUrl} alt='' title=''/>
      <p>{this.props.description}</p>
      </>
    )
  }
}

export default HornedBeast;
