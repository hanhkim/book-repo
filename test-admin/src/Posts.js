import React from 'react';
import {
  List,
  Datagrid,
  TextField,
  ReferenceField,
  EditButton,
  Edit,
  SimpleForm,
  ReferenceInput,
  SelectInput,
  TextInput,
  Create,
  SimpleList,
} from 'react-admin';
import { useMediaQuery } from '@material-ui/core';

const postFilters = [
  <TextInput source='q' label='Search' alwaysOn />,
  <ReferenceInput source='userId' label='User' reference='users' allowEmpty>
    <SelectInput optionText='name' />
  </ReferenceInput>,
];

const PostList = (props) => {
  const isSmall = useMediaQuery((theme) => theme.breakpoints.down('sm'));

  return (
    <List filters={postFilters} {...props}>
      {isSmall ? (
        <SimpleList
          primaryText={(record) => record.title}
          secondaryText={(record) => `${record.views} views`}
          tertiaryText={(record) =>
            new Date(record.published_at).toLocaleDateString()
          }
        />
      ) : (
        <Datagrid rowClick='edit'>
          <ReferenceField source='userId' reference='users'>
            <TextField source='id' />
          </ReferenceField>
          <TextField source='id' />
          <TextField source='title' />
          <TextField source='body' />
          <EditButton />
        </Datagrid>
      )}
    </List>
  );
};

const PostTitle = ({ record }) => {
  return <span>Post {record ? `"${record.title}"` : ''}</span>;
};

export const PostEdit = (props) => {
  console.log(12);
  return (
    <Edit title={<PostTitle />} {...props}>
      <SimpleForm>
        <ReferenceInput source='userId' reference='users'>
          <SelectInput optionText='name' />
        </ReferenceInput>
        <TextInput source='id' />
        <TextInput source='title' />
        <TextInput multiline source='body' />
      </SimpleForm>
    </Edit>
  );
};

export const PostCreate = (props) => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput source='userId' reference='users'>
          <SelectInput optionText='name' />
        </ReferenceInput>
        <TextInput source='title' />
        <TextInput source='body' />
      </SimpleForm>
    </Create>
  );
};

export default PostList;
