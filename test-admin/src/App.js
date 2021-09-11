import React from 'react';
import { Admin, Resource, ListGuesser, EditGuesser } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';

import UserList from './Users';
import PostList, { PostEdit, PostCreate } from './Posts';
import Dashboard from './Dashboard';

import authProvider from './authProvider';
import dataProvider from './dataProvider';

// const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');

const App = () => (
  <Admin
    dashboard={Dashboard}
    authProvider={authProvider}
    dataProvider={dataProvider}
  >
    <Resource name='users' list={UserList} />
    <Resource
      name='posts'
      list={PostList}
      edit={PostEdit}
      create={PostCreate}
    />
  </Admin>
);

export default App;
