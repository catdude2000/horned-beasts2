import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import data from './data/data.json'
import { Modal, Card } from 'react-bootstrap';

class App extends React.Component{

constructor(props){
  super(props);
  this.state = {
    showModal: false,
    selecBeast: ''


    //userName: userName


    
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
    let userName = event.target.userName.value    //numhorns instead of username check and change below in label
    let selected = event.target.selected.value;

    //add to state
    this.setState({
      userName: userName,
    })
  }





render(){
  console.log(data, 'data')
  return(
    <>
    <Header/>





    <form onSubmit={this.handleSubmit}>
      <label>
        <input type='text' name='userName' />
      </label>
      <fieldset>
        <legend>selected</legend>
        <select>
          <option value='all'>all</option>
        </select>
      </fieldset>
      <button type='submit'>submit</button>
    </form>





    <Main
    data={data}
    handleOnShowModal={this.handleOnShowModal}
    />
    <Footer/>
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
