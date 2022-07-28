import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import data from './data/data.json'
import { Modal, Card, ListGroup, Row, Form } from 'react-bootstrap';
// import HornedBeast from './HornedBeast';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      selecBeast: '',
      hornNum: '',
      sortedData: data
    }
  }

  handleOnHide = () => {
    this.setState({
      showModal: false
    })
  }

  handleOnShowModal = (title, image_url, description) => {
    this.setState({
      showModal: true,
      selecBeastTitle: title,
      selecBeastImg: image_url,
      selecBeastDes: description
    })
  }




  handleSelect = (event) => {
    let selected = event.target.value;  //selected is selected horn num i think
    if (selected === 'One') {    //in legend?

      let newData = data.filter(ele => ele.horns === 1);
      this.setState({ sortedData: newData })
      // console.log(newData, 'hornnum, newdat')
    } else if (selected === 'Two') {
      let newData = data.filter(ele => ele.horns === 2);
      this.setState({ sortedData: newData })
    } else if (selected === 'Three') {
        let newData = data.filter(ele => ele.horns === 3);
        this.setState({ sortedData: newData })
    } 
    else if (selected === 'One hundred') {
      let newData = data.filter(ele => ele.horns === 100);
      this.setState({ sortedData: newData })
  } 
    else {
      //add update to
      this.setState({ sortedData: data })

    }
  }


  render() {    //keep, is from before thurs

    console.log(this.state.sortedData, 'sorteddata');

    let numbers = this.state.sortedData.map((element, index) => {
      // console.log(element, 'element')
      // return true;
      return element;
      // <HornedBeast key={index} title={element.title} image_url={element.image_url} description={element.description}  /> 
    });


    // console.log(data, 'data')  //these four lines also old
    return (
      <>
        <Header />




        <Form 
        // onChange={this.handleSelect} 
        // onInput={this.handleInput}
        >    //is in main tags in demo
          {/* <Form.Label>
            <Form.Control type='text' name='hornNum' onInput={this.handleInput} />
          </Form.Label> */}


          <Form.Group>
            <p>selected</p>
            <Form.Select name='selected' onChange={this.handleSelect}>
              <option value='One'>One</option>
              <option value='Two'>Two</option>
              <option value='Three'>Three</option>
              <option value='One hundred'>One hundred</option>
            </Form.Select>
            </Form.Group>
          {/* <button type='submit'>submit</button> */}
        </Form>

        {/* <ListGroup>
        <Row lg={3}>
          {numbers}
          </Row>
        </ListGroup> */}

        <Main
          data={numbers}
          handleOnShowModal={this.handleOnShowModal}
        />
        <Footer />
        <Modal show={this.state.showModal} onHide={this.handleOnHide}>
          <Modal.Header closeButton>
            {this.state.selecBeastTitle}
          </Modal.Header>
          <Card>
            <Card.Img src={this.state.selecBeastImg} />
          </Card>
          {this.state.selecBeastDes}
        </Modal>
      </>
    );
  }
}

export default App;
