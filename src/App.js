import React, { Component } from 'react';
import './App.css';
import Game from './components/game';

class App extends Component {
    render() {
        return (
            <div className="app">
                <Game />
            </div>
        );
    }
}

export default App;
