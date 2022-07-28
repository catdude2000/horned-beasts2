import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import data from './data/data.json'
import { Modal, Card, ListGroup, ListGroupItem, Form } from 'react-bootstrap';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      selecBeast: '',
      hornNum: ''

      //userName: ''
      //howTosort: ''
      //sortedData: data



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





  handleSubmit = (event) => {
    event.preventDefault();
    let hornNum = event.target.hornNum.value    //numhorns instead of username check and change below in label
    let selected = event.target.selected.value;

    //add to state
    this.setState({
      hornNum: hornNum,
      howToSort: selected
    })
  }

  handleInput = (event) => {
    //dont need to prevent
    let hornNum = event.target.value;
    // console.log(hornNum, 'handleInput');

  }




  handleSelect = (event) => {
    let selected = event.target.value;  //selected is selected horn num i think
    if (selected === '1') {    //in legend?

      let newData = data.filter(number => number === 1);
      this.setState({ sortedData: newData })
    } else if (selected === '2') {
      let newData = data.filter(number => number === 2);
      this.setState({ sortedData: newData })
    } else if (selected === '3') {
        let newData = data.filter(number => number === 3);
        this.setState({ sortedData: newData })
    } else {
      //add update to
      this.setState({ sortedData: data })

    }
  }


  render() {    //keep, is from before thurs


    // let numbers = this.state.sortedData.map((number, index) => {
    //   return <ListGroupItem key={index}>{number} - {this.state.sortedData[index]}</ListGroupItem>
    // });




    console.log(data, 'data')  //these four lines also old
    return (
      <>
        <Header />




        <ListGroup>
          {/* {numbers} */}
        </ListGroup>
        <Form onSubmit={this.handleSubmit} onInput={this.handleInput}>    //is in main tags in demo
          <Form.Label>
            <Form.Control type='text' name='userName' onInput={this.handleInput} />
          </Form.Label>
          <Form.Group>
            <p>selected</p>
            <select name='selected' onChange={this.handleSelect}>
              <option value='all'>all</option>
              {/* even
          odd */}
            </select>
            </Form.Group>
          <button type='submit'>submit</button>
        </Form>





        <Main
          data={data}
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
