import { Component } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { nanoid } from 'nanoid';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  checkDuplicate = enteredName => {
    return this.state.contacts.find(contact => {
      return contact.name === enteredName;
    });
  };

  changeFilter = value => {
    this.setState(() => ({
      filter: value,
    }));
  };

  filterContacts = () => {
    return this.state.contacts.filter(contact => {
      return contact.name
        .toLowerCase()
        .includes(this.state.filter.toLowerCase());
    });
  };

  addContact = newContact => {
    this.setState(prevState => ({
      contacts: [
        ...prevState.contacts,
        {
          ...newContact,
          name: newContact.name.trim(),
          number: newContact.number.trim(),
          id: nanoid(),
        },
      ],
    }));
  };

  deleteContact = contactId => {
    const newContactList = this.state.contacts.filter(contact => {
      return contact.id !== contactId;
    });
    this.setState(() => ({
      contacts: newContactList,
    }));
  };

  render() {
    const filteredContacts = this.filterContacts();
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm
          onAdd={this.addContact}
          checkDuplicate={this.checkDuplicate}
        />
        <h2>Contacts</h2>
        <Filter onChange={this.changeFilter} />
        <ContactList
          contacts={filteredContacts}
          onDelete={this.deleteContact}
        />
      </div>
    );
  }
}
