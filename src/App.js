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
      selecBeastTitle: title,
      selecBeastImg: image_url,
      selecBeastDes: description

    })
  }

render(){
  console.log(data, 'data')
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
{this.state.selecBeastTitle}
      </Modal.Header>
      <Modal
        <Modal.Body>
          
          {this.state.selecBeastImg}
          {this.state.selecBeastDes}
        </Modal.Body>

    </Modal>
    </>
  );
}
}

export default App;
