import Login from './Components/Login/Login.jsx';
import { BrowserRouter as Router, Route, Link , Routes} from 'react-router-dom';
import './App.css';
import Contacts from './Components/Contacts/Contacts.jsx';
import React, { useState } from 'react';



function App() {
  const [contacts, setContacts] = useState([]);
  const [showAddContact, setShowAddContact] = useState(false);
  const [newContact, setNewContact] = useState({ name: '', phone: '' });
  const [searchTerm, setSearchTerm] = useState('');

  const addContact = () => {
    setContacts([...contacts, { id: contacts.length + 1, ...newContact }]);
    setNewContact({ name: '', phone: '' });
    setShowAddContact(false);
  };
  const editContact = (editedContact) => {
    // Implement edit logic here
    // You may want to open a modal or another form for editing
    console.log('Edit contact:', editedContact);
  };

  const deleteContact = (contactId) => {
    // Implement delete logic here
    setContacts(contacts.filter((contact) => contact.id !== contactId));
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  
  return (
    <div classname="App">
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">Login</Link>
          </li>
          <li>
            <Link to="/contacts">Contacts</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/contacts">
          <div>
            <h2>Contact Management System</h2>
            <button onClick={() => setShowAddContact(true)}>Add Contact</button>
            <input type="text" placeholder="Search" value={searchTerm} onChange={handleSearch} />
            {filteredContacts.map((contact) => (
                <Contacts key={contact.id} contact={contact} onEdit={editContact} onDelete={deleteContact} />
              ))}
            </div>
          </Route>
          <Route path="/">
            <Login/>
          </Route>
        </Routes>
      </Router>

      {showAddContact && (
        <div className="add-contact-form">
          <h3>Add Contact</h3>
          <label>Name:</label>
          <input
            type="text"
            value={newContact.name}
            onChange={(e) => setNewContact({ ...newContact, name: e.target.value })}
          />
          <label>Phone:</label>
          <input
            type="text"
            value={newContact.phone}
            onChange={(e) => setNewContact({ ...newContact, phone: e.target.value })}
          />
          <button onClick={addContact}>Add</button>
          <button onClick={() => setShowAddContact(false)}>Cancel</button>
          
        </div>
      )}
      </div>
  );
  }
    

export default App;
