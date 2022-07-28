import React from 'react';
import { Card, Col } from 'react-bootstrap';

class HornedBeast extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      hearts: 0
    };
  };

  handleHearts = () => {
    this.setState({
      hearts: this.state.hearts + 1
    });
  };

  clickHelper = () => {
    this.props.handleOnShowModal(this.props.title, this.props.image_url, this.props.description)
  };

  render(){
    return(
        <>
        <Col>
        <Card>
          <Card.Title>
            {this.props.title} 
          </Card.Title>
          <Card.Img 
            src={this.props.image_url}
            alt={this.props.title}
            onClick={this.clickHelper} 
          />
          <p>{this.props.description}</p> 
          <p>{this.state.hearts} Hearts</p>
          <p onClick={this.handleHearts}>Click to Heart</p>
        </Card>
        </Col>
      </>
    )
  }    
}

export default HornedBeast;
