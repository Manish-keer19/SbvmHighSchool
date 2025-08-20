import  { useState } from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaBars, FaTimes } from "react-icons/fa";
import schoolLogo from "../public/school.jpg";
import { Link } from "react-router";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      {/* Top Info Bar */}
      <div className="bg-blue-900 text-white py-2 px-4 hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <FaPhoneAlt className="text-blue-300" />
              <span>9630313137</span>
            </div>
            <div className="flex items-center space-x-2">
              <FaEnvelope className="text-blue-300" />
              <span>sbvmhighschool.462166@gmail.com</span>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <FaMapMarkerAlt className="text-blue-300" />
            <span>Tigariya Goga, District Dewas</span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <header className="bg-gradient-to-r from-blue-600 to-blue-800 text-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            {/* Logo and School Name */}
            <Link to={"/"} className="flex items-center space-x-4">
              <img 
                src={schoolLogo} 
                alt="School Logo" 
                className="w-16 h-16 rounded-full border-2 border-yellow-400 shadow-md hover:scale-105 transition-transform duration-300" 
              />
              <h1 className="text-xl md:text-2xl font-bold tracking-wide">
                <span className="block leading-tight">Saraswati Bal Vinay</span>
                <span className="block text-yellow-300">Vidya Mandir</span>
              </h1>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <Link 
                to="/" 
                className="relative group font-medium hover:text-yellow-300 transition-colors duration-300"
              >
                Home
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-yellow-300 group-hover:w-full transition-all duration-300"></span>
              </Link>
              <Link 
                to="/about" 
                className="relative group font-medium hover:text-yellow-300 transition-colors duration-300"
              >
                About
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-yellow-300 group-hover:w-full transition-all duration-300"></span>
              </Link>
              <Link 
                to="/facilities" 
                className="relative group font-medium hover:text-yellow-300 transition-colors duration-300"
              >
                Facilities
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-yellow-300 group-hover:w-full transition-all duration-300"></span>
              </Link>
              <Link 
                to="/gallery" 
                className="relative group font-medium hover:text-yellow-300 transition-colors duration-300"
              >
                Gallery
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-yellow-300 group-hover:w-full transition-all duration-300"></span>
              </Link>
              <Link 
                to="/contact" 
                className="px-4 py-2 bg-yellow-400 text-blue-800 rounded-lg font-semibold hover:bg-yellow-300 transition-colors duration-300 shadow-md hover:shadow-lg"
              >
                Contact Us
              </Link>
            </nav>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-white focus:outline-none"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <FaTimes className="h-6 w-6" />
              ) : (
                <FaBars className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} bg-blue-700 px-4 pb-4`}>
          <div className="flex flex-col space-y-4">
            <Link 
              to="/home" 
              className="block py-2 px-4 rounded hover:bg-blue-600 transition-colors duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className="block py-2 px-4 rounded hover:bg-blue-600 transition-colors duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link 
              to="/facilities" 
              className="block py-2 px-4 rounded hover:bg-blue-600 transition-colors duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Facilities
            </Link>
            <Link 
              to="/gallery" 
              className="block py-2 px-4 rounded hover:bg-blue-600 transition-colors duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Gallery
            </Link>
            <Link 
              to="/contact" 
              className="block py-2 px-4 bg-yellow-400 text-blue-800 rounded-lg font-semibold text-center hover:bg-yellow-300 transition-colors duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact Us
            </Link>
          </div>
        </div>
      </header>
    </>
  );
}

export default Navbar;