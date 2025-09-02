import React from 'react';
import './App.css';
import Header from "./components/Layout/Header";
import Gallery from "./components/Layout/Gallery"

function App() {

    const mockPhotos = [
        {id: 1, url: "/imagesCard/cuteDino.jpg", title: 'Дино', description: 'Милый динозаврик'},

    ];

    return (
        <div className="app-wrapper">
            <Header/>
            <Gallery photos={mockPhotos}/>
        </div>


    );
}

export default App;
