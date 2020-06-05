import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import './styles.css';

const App = () => {
    return(
        <Header/>
    )
}

ReactDOM.render(<App/>, document.getElementById('root'));