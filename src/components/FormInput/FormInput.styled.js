import styled from 'styled-components';
import { Field } from 'formik';


export const FormLabel = styled.label`
  font-size: 16px;
  margin-left: 25px;
  margin-top: 20px;
  text-transform: capitalize;
`;

export const Input = styled(Field)`
  border: 1px solid lightgray;
  margin: 20px;
  margin-top: 5px;
  font-size: 16px;
  width: 360px;
  outline: none;
  border-radius: 2px;
  &:hover,
  &:focus,
  &:active {
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.2), 0px 1px 1px rgba(0, 0, 0, 0.2),
      0px 1px 1px rgba(0, 0, 0, 0.2);
  }
`;