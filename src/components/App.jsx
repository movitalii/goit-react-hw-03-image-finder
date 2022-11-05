import React from 'react';
// import { Form } from './Form/Form';
// import { Contacts } from './Contacts/Contacts';
// import { Filter } from './Filter/Filter';
import Modal from './Modal/Modal';
// import css from './App.module.css';

export class App extends React.Component {
  state = {
    contacts: [],
    filter: '',
    showModal: false,
  };  

  // componentDidUpdate(prevProps, prevState) {
  //   if (this.state.contacts !== prevState.contacts) {

  //     localStorage.setItem('contacts', JSON.stringify(this.state.contacts))
  //   }
  // }

  // componentDidMount() {
  //   const contacts = localStorage.getItem('contacts');
  //   const parsedContacts = JSON.parse(contacts);

  //   if (parsedContacts) {
  //     this.setState({contacts: parsedContacts})
  //   }    
  // }

  // // ========Adding contacts=========
  // onAddingContacts = newContact => {
  //   const contacts = this.state.contacts;
  //   contacts.find(contact => contact.name === newContact.name)
  //     ? alert(`${newContact.name} is already in contacts`)
  //     : this.setState(prevState => ({
  //         contacts: [...prevState.contacts, newContact],
  //       }));
  // };

  // // ===========Filter Contacts==============

  // onFilterHandler = e => {
  //   const { value } = e.currentTarget;
  //   this.setState({ filter: value });
  // };
  // // ===========Delete Contacts==============
  // onDeleteHandler = contactId => {
  //   const notAid = contact => contact.id !== contactId;

  //   const updatedList = this.state.contacts.filter(notAid);

  //   this.setState({ contacts: updatedList });
  // };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  // =========Render=========

  render() {
    const { contacts, filter, showModal } = this.state;
    // const { onAddingContacts, onFilterHandler, onDeleteHandler } = this;

    return (
      <>
        <button type="button" onClick={this.toggleModal}>
          Open Modal
        </button>
        {showModal && (
          <Modal onClose={this.toggleModal}>
            <h1>Hello!</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus recusandae est dignissimos quos voluptatibus unde nisi, nihil aliquam cumque minima nam nostrum earum doloribus. Animi quaerat doloremque vel voluptatum sapiente.</p>
            <button type="button" onClick={this.toggleModal}>
              Close Modal
            </button>
          </Modal>
        )}
      </>
    );
  }
}