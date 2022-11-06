import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Searchbar from './Searchbar/Searchbar';
import ImageInfo from './ImageInfo/ImageInfo';

// import { Contacts } from './Contacts/Contacts';
// import { Filter } from './Filter/Filter';
// import Modal from './Modal/Modal';
import css from './App.module.css';

export class App extends React.Component {
  state = {
    imageName: '',
    // showModal: false,
  }; 
  
  componentDidMount() {
    this.setState({loading: true})    
  }   
  
  handleSearchSubmit = imageName => {
    this.setState({ imageName });
  };

  // toggleModal = () => {
  //   this.setState(({ showModal }) => ({
  //     showModal: !showModal,
  //   }));
  // };

  // =========Render=========

  render() {
    // const { showModal } = this.state;    

    return (      
        <div className={css.App}>
          {this.state.images && (
            <div>Render gallery</div>
        )}
        <Searchbar onSubmit={this.handleSearchSubmit} /> 
        <ImageInfo imageName={ this.state.imageName } />
        <ToastContainer autoClose={3000} />
        </div>             
    );
  }
}