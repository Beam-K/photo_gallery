import React from 'react';
import './App.css';
import logo from './logo.png';
import iconSearch from './iconSearch.svg';

function App() {
    return (
        <div className="App">
            <div className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <div className="App-search">
                    <img src={iconSearch} className={iconSearch} alt={iconSearch}/>
                    <input className="App-search-input" type="search" placeholder="Search..."/>
                </div>
            </div>
        </div>
    );
}

export default App;
