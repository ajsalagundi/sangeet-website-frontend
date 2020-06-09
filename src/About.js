import React from 'react';
import Navbar from "./Navbar";
import pic from './Images/veena.jpg';

export default class About extends React.Component {
    render() {
        return(
            <div className="w-screen h-screen bg-yellow-300 bg-opacity-50">
                <Navbar/>
                <div className="flex container w-full h-full mx-auto">
                    <div className="w-1/2 items-center justify-center flex">
                        <div className="rounded-lg overflow-hidden shadow-lg w-4/5 mb-12 bg-gray-200">
                            <img src={pic} alt="" className="w-full"/>
                        </div>
                    </div>
                    <div className="w-1/2 items-center justify-center flex">
                        <div className="rounded-lg overflow-hidden shadow-lg w-4/5 mb-12 bg-gray-800 flex items-center justify-center flex-wrap h-auto">
                            <h1 className="flex text-center text-4xl font-bold text-yellow-300 py-4">About Sangeetam</h1>
                            <p className="flex text-center px-10 text-yellow-300">
                                A lot of text about some stuff fro this service
                                A lot of text about some stuff fro this service
                                A lot of text about some stuff fro this service
                                A lot of text about some stuff fro this service
                                A lot of text about some stuff fro this service
                                A lot of text about some stuff fro this service
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}