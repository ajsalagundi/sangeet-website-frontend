import React from 'react';
import ReactDOM from 'react-dom';
import pic from './Images/ricky-singh-rTikKt6ir5g-unsplash.jpg';

export default class Header extends React.Component {
    render(){
        return(
            <nav className={"flex w-screen h-screen bg-scroll"} style={{backgroundImage: {pic}}}>
                 
            </nav>
        )
    }
}