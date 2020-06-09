import React from 'react';

export default class Features extends React.Component {
    render() {
        return(
            <div className="w-screen h-screen bg-yellow-300 bg-opacity-50">
                <div className="container h-full flex w-full mx-auto">
                    <div className="flex items-center justify-center w-1/3 h-full pt-20">
                        <div className="rounded-lg shadow-lg overflow-hidden bg-gray-200 w-11/12 py-64">

                        </div>
                    </div>
                    <div className="flex items-center justify-center w-1/3 h-full pb-16">
                        <div className="rounded-lg shadow-lg overflow-hidden bg-gray-800 w-11/12 py-64">

                        </div>
                    </div>
                    <div className="flex items-center justify-center w-1/3 h-full pt-20">
                        <div className="rounded-lg shadow-lg overflow-hidden bg-gray-200 w-11/12 py-64">

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}