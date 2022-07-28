import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import data from './data/data.json'
import { Modal, Card, Form } from 'react-bootstrap';

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
    let selected = event.target.value;
    if (selected === 'One') {
      let newData = data.filter(ele => ele.horns === 1);
      this.setState({ sortedData: newData })
    } else if (selected === 'Two') {
      let newData = data.filter(ele => ele.horns === 2);
      this.setState({ sortedData: newData })
    } else if (selected === 'Three') {
        let newData = data.filter(ele => ele.horns === 3);
        this.setState({ sortedData: newData })
    } else if (selected === 'One hundred') {
      let newData = data.filter(ele => ele.horns === 100);
      this.setState({ sortedData: newData })
    } else {
      this.setState({ sortedData: data })
    }
  }

  render() {
    let numbers = this.state.sortedData.map((element, index) => {
      return element;
    });

    return (
      <>
        <Header />
        <Form>  
          <Form.Group>
            <p>selected</p>
            <Form.Select name='selected' onChange={this.handleSelect}>
              <option value='One'>One</option>
              <option value='Two'>Two</option>
              <option value='Three'>Three</option>
              <option value='One hundred'>One hundred</option>
            </Form.Select>
          </Form.Group>
        </Form>

        <Main data={numbers} handleOnShowModal={this.handleOnShowModal} />
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
