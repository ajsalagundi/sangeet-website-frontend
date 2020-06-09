import React from 'react';

const Navbar = () => {
    return(
        <nav className="flex w-full h-20 self-start items-center bg-gray-900 sticky top-0">
            <ul className="flex items-center w-1/3 pl-4">
                <li className={"text-yellow-300 text-center h-auto px-5"}>About</li>
                <li className={"text-yellow-300 text-center h-auto px-5"}>Features</li>
            </ul>
            <h1 className="w-1/3 font-bold text-4xl text-yellow-300 text-center">Sangeetam.Digital</h1>
            <ul className="flex items-center w-1/3 flex-row-reverse pr-4">
                <li className={"text-yellow-300 text-center h-auto px-5"}>Pricing</li>
                <li className={"text-yellow-300 text-center h-auto px-5"}>Contact</li>
            </ul>
        </nav>
    )
}

export default Navbar;