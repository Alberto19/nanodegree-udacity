import React, { Component } from 'react';
import ListContacts from './ListContacts'
import { getAll, remove } from './utils/ContactsAPI';
class App extends Component {
  state = {
    contacts: []
  }

  componentDidMount() {
    getAll()
      .then(contacts =>
        this.setState({contacts}))
  }

  removeContact = (contact) => {
    this.setState(state => ({
      contacts: state
        .contacts
        .filter(c => c.id !== contact.id)
    }))
    remove(contact)
  }
  render() {
    return (
      <div>
        <ListContacts
          contacts={this.state.contacts}
          onDeleteContact={this.removeContact}/>
      </div>
    )
  }
}

export default App;
