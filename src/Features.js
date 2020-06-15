import React from 'react';

export default class Features extends React.Component {
    render() {
        return(
            <div className="w-screen h-screen bg-yellow-300 bg-opacity-50">
                <div className="container h-full flex w-full mx-auto">
                    <div className="flex items-center justify-center lg:w-1/3 h-full pt-20">
                        <div className="rounded-lg shadow-lg overflow-hidden bg-gray-200 w-11/12 h-auto">
                            <h1 className="text-center md:text-2xl lg:text-3xl pb-4 pt-10 font-bold text-gray-800">Competition and Live Sessions</h1>
                            <p className="text-center px-10 pb-6 text-gray-800">
                                Sangeetam.digital is the preeminent platform for hosting virtual Sangeet competitions and live sessions provided by gurus.
                                Each live session can be hosted by a Singer, and can be viewed by everyone who is on the platform.
                            </p>
                        </div>
                    </div>
                    <div className="flex items-center justify-center lg:w-1/3 h-full pb-16">
                        <div className="rounded-lg shadow-lg overflow-hidden bg-gray-800 w-11/12 h-auto">
                            <h1 className="text-center md:text-3xl lg:text-4xl pb-4 pt-10 font-bold text-yellow-300">Song Renditions</h1>
                            <p className="text-center px-10 pb-6 text-yellow-300">
                                This platform a specific type of user, the "singer", to upload their rendition of a song provided by our database. The singer will
                                have to click on a song title from the database and will have the option to upload their video for that song.
                            </p>
                        </div>
                    </div>
                    <div className="flex items-center justify-center lg:w-1/3 h-full pt-20">
                        <div className="rounded-lg shadow-lg overflow-hidden bg-gray-200 w-11/12 h-auto">
                            <h1 className="text-center md:text-2xl lg:text-3xl pb-4 pt-12 px-6 font-bold text-gray-800">Submit Your Own Song</h1>
                            <p className="text-center px-10 pb-10 text-gray-800">
                                This feature allows a type of user, the "lyricist", to submit their own song and lyrics to it. The user will have the option to
                                click on the "Submit New" button on their dashboard and upload the lyrics of the song.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}