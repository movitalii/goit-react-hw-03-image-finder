import React from 'react';
import Searchbar from './Searchbar/Searchbar';
// import { Contacts } from './Contacts/Contacts';
// import { Filter } from './Filter/Filter';
// import Modal from './Modal/Modal';
// import css from './App.module.css';

export class App extends React.Component {
  state = {
    images: null,
    loading: false,
    imageName: '',
    // showModal: false,
  }; 
  
  componentDidMount() {
    this.setState({loading: true})

    fetch('https://pixabay.com/api/?q=cat&page=1&key=30062649-6c95f8a5f26546f2640c7031e&image_type=photo&orientation=horizontal&per_page=12')
      .then(res => res.json())
      .then(images => this.setState({ images }))
      .finally(() => this.setState({loading: false}));
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
        <div>
          {this.state.loading && <h1>Loading...</h1>}
          {this.state.images && (
            <div>Render gallery</div>
        )}
        <Searchbar onSubmit={ this.handleSearchSubmit } />        
        </div>             
    );
  }
}