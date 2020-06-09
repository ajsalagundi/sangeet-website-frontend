import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import About from "./About";
import Features from './Features';
import Pricing from './Pricing';
import Footer from './Footer';
import './styles.css';

const App = () => {
    return(
        <div>
        <Header/>
        <About/>
        <Features/>
        <Pricing/>
        {/*<Footer/>*/}
        </div>
    )
}

ReactDOM.render(<App/>, document.getElementById('root'));