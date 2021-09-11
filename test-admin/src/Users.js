import React from 'react';
import { List, Datagrid, TextField, EmailField } from 'react-admin';
import UrlFieldCustom from './UrlFieldCustom';

const Users = (props) => {
  return (
    <List {...props}>
      <Datagrid rowClick='edit'>
        <TextField source='id' />
        <TextField source='name' />
        <EmailField source='email' />
        <TextField source='phone' />
        <UrlFieldCustom source='website' />
        <TextField source='company.name' />
      </Datagrid>
    </List>
  );
};

Users.propTypes = {};

export default Users;
