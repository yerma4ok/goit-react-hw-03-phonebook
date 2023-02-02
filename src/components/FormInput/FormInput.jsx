import React from 'react';
import PropTypes from 'prop-types';
import { ErrorMessage } from 'formik';
import { FormLabel } from './FormInput.styled';



const FormInput = ({ type, name, label, title }) => {
  return (
    <FormLabel htmlFor={name}>
      {label}
      <Input type={type} name={name} />
      <ErrorMessage name={name} component="div">
        {title}
      </ErrorMessage>
    </FormLabel>
  );
};

FormInput.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default FormInput;