import React from 'react';

import Addresses from '../form/addresses';
import Input from '../form/input';
import PhoneNumbers from '../form/phone-numbers';

const formValues = {
  firstname: {
    contentName: 'firstname',
    contentLabel: 'First Name',
    contentType: 'text',
    contentAlt: '',
    contentOptions: null,
    component: Input,
  },
  lastname: {
    contentName: 'lastname',
    contentLabel: 'Last Name',
    contentType: 'text',
    contentAlt: '',
    contentOptions: null,
    component: Input,
  },
  profile: {
    contentName: 'profile',
    contentLabel: 'Profile Image',
    contentType: 'img',
    contentAlt: '',
    contentOptions: null,
    component: Input,
  },
  locationPref: {
    contentName: 'locationPref',
    contentLabel: 'Location Detection',
    contentType: 'checkbox',
    contentOptions: ['Manual', 'Automatic'],
    component: Input,
  },
  phoneNumbers: {
    contentName: 'phoneNumbers',
    component: PhoneNumbers,
  },
  addresses: {
    contentName: 'addresses',
    component: Addresses,
  },
  userName: {
    contentName: 'userName',
    contentLabel: 'User Name (Public)',
    contentType: 'text',
    contentAlt: '',
    contentOptions: null,
    component: Input,
  },
};

export default formValues;
