import React from 'react';
// import Main from './Main'
// import { Button } from 'bootstrap';
// import data from './data/data.json'


class HornedBeast extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      hearts: 0
    };
  };

  //whys handlelikes have the () in between the =s
  handleHearts = () => {
    this.setState({
      hearts: this.state.hearts + 1
    });
  };

  render(){
    return(

        <>
         <h2>{this.props.title}</h2>
        <img src={this.props.image_url} alt='' title=''/>
        <p>{this.props.description}</p> 
        <p>{this.state.hearts} Hearts</p>
        <p onClick={this.handleHearts}>Click to Heart</p>
      </>
    )

    
  }    
  
}

export default HornedBeast;
