import React from 'react';

function Home() {
    return (
        <div className='p-5 flex flex-col justify-center' style={{minHeight:"80vh"}}>
            <h1 className="text-3xl sm:text-4xl font-bold mx-auto mb-7 text-center">Welcome to MahilAi's World</h1>
            <div className="flex items-center bg-white bg-opacity-15 backdrop-blur-md rounded-full px-4 py-2 h-12 sm:h-16 w-full max-w-3xl mx-auto">
                <span className="text-gray-400 cursor-pointer hover:text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-7 sm:w-7" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M12.9 14.32a8 8 0 111.414-1.414l4.387 4.387a1 1 0 01-1.414 1.414l-4.387-4.387zM8 14a6 6 0 100-12 6 6 0 000 12z" clipRule="evenodd" />
                    </svg>
                </span>
                <input
                    type="text"
                    placeholder="Search"
                    className="bg-transparent outline-none px-2 text-white text-lg flex-1"
                />
                <div className="flex space-x-2">
                    <span className="text-gray-400 cursor-pointer hover:text-white relative" style={{top:"2px"}}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-7 sm:w-7" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M10 2a3 3 0 00-3 3v4a3 3 0 006 0V5a3 3 0 00-3-3z" />
                            <path fillRule="evenodd" d="M5 8a5 5 0 0010 0V5a5 5 0 00-10 0v3zm5 10a7 7 0 01-7-7H2a8 8 0 0016 0h-1a7 7 0 01-7 7z" clipRule="evenodd" />
                        </svg>
                    </span>
                    <span className="text-gray-400 cursor-pointer hover:text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-7 sm:w-7" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M2.01 21l20.99-9-20.99-9-.01 7 15 2-15 2z"/>
                        </svg>
                    </span>
                </div>
            </div>
        </div>
    );
}

export default Home;