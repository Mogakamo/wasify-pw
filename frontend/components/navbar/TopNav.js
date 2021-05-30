import React from 'react'


const TopNav = () => {
    return (
        <>
            {/* navbar goes here */}
            <nav className="bg-gray-100">
                <div className="max-w-6xl mx-auto px-4">
                    <div className="flex justify-between">
                        <div className="flex space-x-4">
                            {/* logo */}
                            <div>
                                <a href="#" className="flex items-center py-5 px-2 text-gray-700 hover:text-gray-900">
                                    <img src="https://avatars.githubusercontent.com/u/67372792?s=400&u=6524ed48e53d8299f85ef1aadd83dfac591aa0d2&v=4" width="100" height="100" alt="logo" />
                                </a>
                            </div>
                            {/* primary nav */}
                            <div className="hidden md:flex items-center space-x-1">
                                <a href="#" className="py-5 px-3 text-gray-700 hover:text-gray-900">Features</a>
                                <a href="#" className="py-5 px-3 text-gray-700 hover:text-gray-900">Pricing</a>
                            </div>
                        </div>
                        {/* secondary nav */}
                        <div className="hidden md:flex items-center space-x-1">
                            <a href className="py-5 px-3">Login</a>
                            <a href className="py-2 px-3 bg-yellow-400 hover:bg-yellow-300 text-yellow-900 hover:text-yellow-800 rounded transition duration-300">Signup</a>
                        </div>
                        {/* mobile button goes here */}
                        <div className="md:hidden flex items-center">
                            <button className="mobile-menu-button">
                                <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
                {/* mobile menu */}
                <div className="mobile-menu hidden md:hidden">
                    <a href="#" className="block py-2 px-4 text-sm hover:bg-gray-200">Features</a>
                    <a href="#" className="block py-2 px-4 text-sm hover:bg-gray-200">Pricing</a>
                </div>
            </nav>
            {/* content goes here */}
        </>
    )
}
export default TopNav