import React from 'react';
import HornedBeast from './HornedBeast.js';
import { Container, Row, Col } from 'react-bootstrap';
// import Image from 'react-bootstrap';
import data from './data/data.json'

class Main extends React.Component {

  render(){

    let beastsArray = this.props.data.map((newBeast, index) => {

    return <HornedBeast title={newBeast.title} image_url={newBeast.image_url} description={newBeast.description} key={index}   handleOnShowModal={this.props.handleOnShowModal}
     /> 
    });

    return(
      <>

        <main>
          {beastsArray}
        </main>
      <Container>
        <Row>
          <Col>
          {beastsArray}
            {/* <HornedBeast
            title={this.props.title}  image_url={this.props.image_url}  description={this.props.description}
            /> */}
          </Col>
           <Col>
           </Col>
           <Col>

           </Col>
        </Row>
    
      </Container>
      </>
    );
  }
}

export default Main;
