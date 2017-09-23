import React from 'react';
import { Form } from 'semantic-ui-react';

const FormField = ({ type, label }) => {
  return <Form.Input label={label} type={type} />;
};

export default FormField;
