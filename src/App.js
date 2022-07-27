import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import data from './data/data.json'
import { Modal } from 'react-bootstrap';

class App extends React.Component{

constructor(props){
  super(props);
  this.state = {
    showModal: false,
    selecBeast: ''
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
      selecBeast: title, image_url, description
    })
  }



render(){
  return(
    <>
    <Header/>
    <Main
    data={data}
    handleOnShowModal={this.handleOnShowModal}
    
    />
    <Footer/>
    <Modal show={this.state.showModal} onHide={this.handleOnHide}>
      <Modal.Header closeButton>
        <Modal.Title>
          {this.state.selecBeast}
        </Modal.Title>
      </Modal.Header>
    </Modal>
    </>
  );
}
}

export default App;
