import React, { FC } from 'react'


interface navbarProps {
    onClick?: React.MouseEventHandler;
}
const Navbar: FC<navbarProps> = ({ onClick }) => {
    return (
        <nav className="bg-yellow-300 border-gray-500">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <a href="/" className="flex items-center">
                    <img src="https://www.logo.wine/a/logo/Disney%2B/Disney%2B-Logo.wine.svg" className='h-10 mr-3' alt="Logo" />
                    <span className='text-2xl self-center'>Disney+</span>
                </a>
                <ul className="flex space-x-4 display-block">
                    <li><a href="/" className="text-gray-900 hover:bg-alto-200 ">Home</a></li>
                    <li><a href="/Movie" className="text-gray-900">Favorites</a></li>
                    <li><a href="/Detail" className="text-gray-900">Detail</a></li>
                    <li><a href="/" className="text-gray-900">Contact</a></li>
                </ul>
                <div className='flex justify-end items-center' onClick={onClick}>
                    <button className="text-gray-900">DarkMode</button>
                </div>

            </div>
        </nav>
    );
};

export default Navbar;
