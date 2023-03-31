import { nanoid } from 'nanoid';
import { Component } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Section } from './Section/Section';
import { Filter } from './Filter/Filter';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    const getContactsLS = JSON.parse(localStorage.getItem('contacts'));
    if (!getContactsLS) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
    this.setState({ contacts: getContactsLS });
  }

  componentDidUpdate(preveProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  handleAddContact = event => {
    event.preventDefault();
    const name = event.target[0].value;
    const number = event.target[1].value;

    const checkName = this.state.contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );
    if (checkName) {
      return alert(`${name} is already in contacts.`);
    }
    this.setState(prevState => {
      return {
        contacts: [...prevState.contacts, { name, number, id: nanoid() }],
      };
    });
  };

  handelFilter = event => {
    this.setState({ filter: event.target.value });
  };

  filteredContacts = () => {
    const { contacts, filter } = this.state;
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter?.toLowerCase())
    );
  };

  handleDeleteBtnClick = id => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(contact => contact.id !== id),
      };
    });
  };

  render() {
    return (
      <div>
        <Section title="Phonebook">
          <ContactForm handleAddContact={this.handleAddContact} />
        </Section>
        <Filter handelFilter={this.handelFilter} />
        <Section title="Contacts">
          <ContactList
            contacts={this.filteredContacts()}
            handleDeleteBtnClick={this.handleDeleteBtnClick}
          />
        </Section>
      </div>
    );
  }
}
