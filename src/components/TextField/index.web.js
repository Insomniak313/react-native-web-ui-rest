import React from 'react';
import MaterialTextField from '@material-ui/core/TextField';

const TextField = ({ ...other }) => (
  <MaterialTextField style={{marginBottom: 10}} {...other} />
);

export default TextField;
