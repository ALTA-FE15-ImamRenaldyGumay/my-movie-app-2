
const Navbar = () => {
    return (
        <nav className="bg-mine-shaft-900 overflow-hidden p-8">
            <div className="container mx-auto flex items-center">
                <a href="/" className="text-white font-bold text-lg mx-5 display-block hover:bg-red-300">My Website</a>
                <ul className="flex space-x-4 display-block">
                    <li><a href="/" className="text-white hover:bg-alto-200 ">Home</a></li>
                    <li><a href="/Movie" className="text-white">Favorites</a></li>
                    <li><a href="/Detail" className="text-white">Detail</a></li>
                    <li><a href="#" className="text-white">Contact</a></li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
