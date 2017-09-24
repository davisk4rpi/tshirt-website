import React from 'react';
import { Form } from 'semantic-ui-react';

const FormField = ({ type, label, input }) => {
  return <Form.Input {...input} label={label} type={type} />;
};

export default FormField;
