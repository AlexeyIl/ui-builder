import { FormConfig } from '../types/field-config.type';

export const userFormConfig: FormConfig = {
  template: '',
  props: {
    fields: [
      {
        key: 'firstName',
        type: 'text',
        props: {
          label: 'first name',
        },
      },
      {
        key: 'lastName',
        type: 'text',
        props: {
          label: 'last name',
        },
      },
      {
        key: 'age',
        type: 'number',
        props: {
          label: 'age',
        },
      },
    ],
    title: 'user',
  },
};
export const addressFormConfig: FormConfig = {
  template: '',
  props: {
    fields: [
      {
        key: 'city',
        type: 'text',
        props: {
          label: 'city',
        },
      },
      {
        key: 'zip',
        type: 'number',
        props: {
          label: 'zip',
        },
      },
    ],
    title: 'address',
  },
};
