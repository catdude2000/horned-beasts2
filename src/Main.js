import React from 'react';
import HornedBeast from './HornedBeast';
import { Container } from 'react-bootstrap';
import {Row} from 'react-bootstrap';
import {Col} from 'react-bootstrap';
// import Image from 'react-bootstrap';


class Main extends React.Component {

  
  render(){

    return(
      <>

      {/* // check image_url to see if it needs changed */}
      <Container>
        <Row>
          <Col>
            <HornedBeast/>
          </Col>
           <Col>

           </Col>
           <Col>

           </Col>
        </Row>
      
      {/* <HornedBeast title="Rhino Family" imageUrl="https://images.unsplash.com/photo-1512636618879-bbe79107e9e3?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=bd9460ee6d1ddbb6b1ca7be86dfc4590&auto=format&fit=crop&w=1825&q=80" description="Parent rhino with two babies" />
      <HornedBeast title="Unicorn Head" imageUrl="https://www.dhresource.com/0x0s/f2-albu-g5-M00-1A-11-rBVaI1hsIIiALxKzAAIHjSU3VkE490.jpg/wholesale-halloween-costume-prop-unicorn.jpg" description="Someone wearing a very silly unicorn head mask" /> */}
      </Container>
      </>
    );
  }
}

export default Main;
