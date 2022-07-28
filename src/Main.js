import React from 'react';
import HornedBeast from './HornedBeast.js';
import { Container, Row } from 'react-bootstrap';

class Main extends React.Component {

  render(){
    let beastsArray = this.props.data.map((newBeast, index) => {
      return <HornedBeast title={newBeast.title} image_url={newBeast.image_url} description={newBeast.description} key={index}   handleOnShowModal={this.props.handleOnShowModal}
     /> 
    });

    return(
      <>
      <Container>
        <Row lg={3}>
          {beastsArray}
        </Row>
      </Container>
      </>
    );
  }
}

export default Main;
