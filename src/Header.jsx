import Navbar from "./Navbar";


const Header = () => {
    return (
        <header className="fixed top-0 left-0 w-full bg-white shadow-sm z-50">
            <div className="max-w-7xl mx-auto px-6 py-2 flex items-center justify-between">
                {/* Logo */}
                <div className="flex items-center space-x-2 cursor-pointer">
                    <img
                        src="/car.webp" // replace with your logo file in /public
                        alt="Artex designers Logo"
                        className="w-10 h-10 object-contain"
                    />
                    <h1 className="text-2xl font-bold text-sky-950">POM</h1>
                </div>

                {/* Navigation */}

                <Navbar />

            </div>
        </header>
    );
};

export default Header;
