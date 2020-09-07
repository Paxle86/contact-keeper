import React, { useReducer } from 'react';
import uuid from 'uuid';
import ContactContext from './contactContext';
import contactReducer from './contactReducer';
import {
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_CONTACT,
  FILTER_CONTACTS,
  CLEAR_FILTER,
} from '../types';

const ContactState = (props) => {
  const initialState = {
    contacts: [
      {
        id: 1,
        name: 'Jill Johnon',
        email: 'jill@gmail.com',
        phone: '111-111-1111',
        type: 'pesonal',
      },
      {
        id: 2,
        name: 'Mike Tyson',
        email: 'mike@gmail.com',
        phone: '222-222-2222',
        type: 'pesonal',
      },
      {
        id: 3,
        name: 'Ronaldo Johnon',
        email: 'ronaldo@gmail.com',
        phone: '333-333-3333',
        type: 'professional',
      },
    ],
  };
  const [state, dispatch] = useReducer(contactReducer, initialState);
  // Add contact
  // Delete contact
  // Set current contact
  // Clear current contact
  // Update contact
  // Filter contacts
  // Clear filter

  return (
    <ContactContext.Provider
      value={{
        contacts: state.contacts,
      }}
    >
      {props.children}
    </ContactContext.Provider>
  );
};

export default ContactState;
