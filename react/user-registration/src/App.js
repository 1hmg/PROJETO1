import logo from './logo.svg';
import './App.css';
import React from 'react';
import UserForm from './UserForm';
import UserList from './UserList';

function App() {
  return (
    <div>
    <h1>User Management</h1>
    <UserForm />
    <UserList />
</div>
  );
}

export default App;
