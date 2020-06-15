import React from 'react';
import pic from "./Images/ricky-singh-rTikKt6ir5g-unsplash.jpg";

const styles = {
    header: {
        backgroundImage: `url(${pic})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
    },
    cover: {
        backgroundColor: 'rgba(0,0,0,0.7)'
    }
}
export default class Header extends React.Component {
    render(){
        return(
            <div className="w-screen h-screen" style={styles.header}>
                <div className="w-full h-full" style={styles.cover}>
                    <div className={"h-full"}>
                        <nav className="flex w-full h-20 self-start">
                            <ul className="flex items-center w-1/2 pl-4">
                                <li className={"text-yellow-300 text-center h-auto px-5"}>About</li>
                                <li className={"text-yellow-300 text-center h-auto px-5"}>Features</li>
                            </ul>
                            <ul className="flex items-center w-1/2 flex-row-reverse pr-4">
                                <li className={"text-yellow-300 text-center h-auto px-5"}>Pricing</li>
                                <li className={"text-yellow-300 text-center h-auto px-5"}>Contact</li>
                            </ul>
                        </nav>
                        <div className="lg:my-64 sm:mt-64">
                            <h1 className="w-full font-bold text-6xl text-yellow-300 text-center mb-4">Sangeetam.Digital</h1>
                            <h3 className="w-full font-semibold text-4xl text-yellow-300 text-center">
                                The world’s first video platform meant only for Sangeet.
                            </h3>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}