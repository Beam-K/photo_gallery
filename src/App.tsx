import React from 'react';
import './App.css';
import Header from "./components/Layout/Header";
import Gallery from "./components/Layout/Gallery"

function App() {

    const mockPhotos = Array.from({length: 1000}, (_, i) => ({
        id: i + 1,
        url: "/imagesCard/cuteDino.jpg",
        title: `Дино ${i + 1}`,
        description: `Милый динозаврик #${i + 1}`

    }));


    return (
        <div className="app-wrapper">
            <Header/>
            <Gallery photos={mockPhotos}/>
        </div>


    );
}

export default App;
