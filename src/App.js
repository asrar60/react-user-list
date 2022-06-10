import React from 'react';
import AddUser from "./components/Users/AddUser";
import {useState} from "react";
import UserList from "./components/Users/UserList";


function App() {
    const [users, setUsers] = useState([]);

    const addUserData = enteredUserData => {
        setUsers(prevUsers => {
            const updatedUsers = [...prevUsers];
            updatedUsers.unshift({ username: enteredUserData[0], age: enteredUserData[1], id: Math.random().toString() });
            return updatedUsers;
        });
    };


  return (
      /*OR Fragment*/
    <React.Fragment>  /
        <AddUser onAddUserData={addUserData}/>
        <UserList items={users}/>
    </React.Fragment>
  );
}

export default App;
