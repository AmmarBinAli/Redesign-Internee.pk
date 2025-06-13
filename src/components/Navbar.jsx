import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";


function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <nav className="bg-white dark:bg-black text-black dark:text-white p-3 fixed  w-full z-50 shadow-md ">
      <div className="flex justify-between items-center">
        <Link to="/" className="text-xl font-bold"><img src={logo} alt="Internee.PK logo" className="h-12" /></Link>

        <div className="flex items-center space-x-4">
          <button onClick={() => setDarkMode(!darkMode)} className=" relative w-14  h-8 text-sm border px-3 py-1 rounded-full hover:bg-black dark:hover:bg-white transition-colors duration-300">
            <span
              className={`absolute top-1 left-1 w-6 h-6 flex items-center justify-center text-sm ${darkMode ? "translate-x-6" : ""
                } transform  rounded-full shadow-md transition-transform duration-300`}
            >
              {darkMode ? "🌙" : "☀️"}
            </span>
          </button>

          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
            ☰
          </button>
        </div>

        <ul className="hidden md:flex space-x-6">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </div>

      {isOpen && (
        <ul className="md:hidden mt-2 space-y-2">
          <li><Link to="/" onClick={() => setIsOpen(false)}>Home</Link></li>
          <li><Link to="/about" onClick={() => setIsOpen(false)}>About</Link></li>
          <li><Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link></li>
        </ul>
      )}
    </nav>
  );
}

export default Navbar;
