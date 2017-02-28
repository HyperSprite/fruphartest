import React from 'react';

import Input from '../form/input';

const formValues = {
  drugName: {
    contentName: 'drugName',
    contentLabel: 'Name',
    contentType: 'text',
    contentAlt: '',
    contentOptions: null,
    component: Input,
  },
  drugDosage: {
    contentName: 'drugDosage',
    contentLabel: 'Dosage',
    contentType: 'text',
    contentAlt: '',
    contentOptions: ['10mg', '20mg', '30mg', '40mg'],
    component: Input,
  },
  drugForm: {
    contentName: 'drugForm',
    contentLabel: 'Form',
    contentType: 'text',
    contentAlt: '',
    contentOptions: ['Capsule', 'Liquid'],
    component: Input,
  },
  drugUseGeneric: {
    contentName: 'drugUseGeneric',
    contentLabel: 'Include Generic',
    contentType: 'checkbox',
    contentOptions: ['Generic', 'No Generics'],
    component: Input,
  },
  drugUseBranded: {
    contentName: 'drugUseBranded',
    contentLabel: 'Include Brands',
    contentType: 'checkbox',
    contentOptions: ['Brands', 'No Brands'],
    component: Input,
  },
  drugQuantity: {
    contentName: 'drugQuantity',
    contentLabel: 'Quantity',
    contentType: 'text',
    contentAlt: '',
    contentOptions: null,
    component: Input,
  },
};

export default formValues;
