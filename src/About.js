import React from 'react';
import Navbar from "./Navbar";
import pic from './Images/veena.jpg';

export default class About extends React.Component {
    render() {
        return(
            <div className="w-screen h-screen bg-yellow-300 bg-opacity-50">
                <div className="flex container w-full h-full mx-auto md:flex-wrap">
                    <div className="lg:w-1/2 items-center justify-center flex md:w-full">
                        <div className="rounded-lg overflow-hidden shadow-lg w-4/5 lg:mb-12 bg-gray-200">
                            <img src={pic} alt="" className="w-full"/>
                        </div>
                    </div>
                    <div className="lg:w-1/2 items-center justify-center flex md:w-full">
                        <div className="rounded-lg overflow-hidden shadow-lg w-4/5 mb-12 bg-gray-800" style={{height: '341px'}}>
                            <h1 className="text-center md:text-3xl lg:text-4xl font-bold text-yellow-300 pb-4 pt-8">About Sangeetam</h1>
                            <p className="text-center px-10 text-yellow-300">
                                This service is the only one that provides unlimited access for Sangeet students to listen to renditions of different songs by Sangeet professionals.
                                Unlike YouTube, which can cloud results with unnecessary videos, this platform specifically contains renditions of gurus who have provided their skills
                                for specific songs listed in the database. This platform also allows gurus and lyricists to provide new songs, at a cost, for other professionals to upload
                                renditions to.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}