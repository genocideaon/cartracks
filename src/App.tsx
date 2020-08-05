import React from 'react';
import './App.css';

import SearchBox from "./components/SearchBox";
import ListUser from './components/ListUser'
import {UserProvider} from "./UserProvider"

function App() {


    return (
        <UserProvider>
            <div className="App">
                <SearchBox></SearchBox>
                <ListUser></ListUser>
            </div>
        </UserProvider>
    );
}

export default App;

