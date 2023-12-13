import  { useState } from "react";

const Navbar = () => {
  const [isMenuHidden, setMenuHidden] = useState(true);

  const toggleMenu = () => {
    setMenuHidden(!isMenuHidden);
  };

  return (
    <>
      {/* Navbar */}
      <nav className="bg-gray-100">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between">
            <div className="flex space-x-4">
              {/* Logo */}
              <div>
                <a
                  href="#"
                  className="flex items-center py-5 px-2 text-gray-700 hover:text-gray-900"
                >
                  <img
                    className="w-full h-10"
                    src="
  https://selisegroup.com/wp-content/uploads/2022/10/logo.png"
                    alt=""
                  />
                </a>
              </div>
              {/* /Logo */}

              {/* Primary Nav */}
              <div className="hidden md:flex items-center space-x-1">
                <a
                  href="#"
                  className="py-5 px-3 text-gray-700 hover:text-gray-900"
                >
                  Who we are
                </a>
                <a
                  href="#"
                  className="py-5 px-3 text-gray-700 hover:text-gray-900"
                >
                  what we do
                </a>
                <a
                  href="#"
                  className="py-5 px-3 text-gray-700 hover:text-gray-900"
                >
                  Insights
                </a>
              </div>
              {/* /Primary Nav */}
            </div>

            {/* Secondary Nav */}
            <div className="hidden md:flex items-center space-x-1">
              <a href="#" className="py-5 px-3">
                Login
              </a>
              <a
                href="#"
                className="py-2 px-3 bg-black hover:bg-black text-white rounded transition duration-300"
              >
                Signup
              </a>
            </div>
            {/* /Secondary Nav */}

            {/* Mobile Buttons */}
            <div className="md:hidden flex items-center">
              <button className="mobile-menu-button" onClick={toggleMenu}>
                <svg
                  className="w-6 h-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
            {/* /Mobile Buttons */}
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`mobile-menu ${isMenuHidden ? "hidden" : ""}`}>
          <a href="#" className="block py-2 px-4 text-sm hover:bg-gray-200">
            Features
          </a>
          <a href="#" className="block py-2 px-4 text-sm hover:bg-gray-200">
            Pricing
          </a>
        </div>
        {/* /Mobile Menu */}
      </nav>
      {/* /Navbar */}

      {/* Content */}
      <div className="py-32 text-center">
        <h2 className="font-extrabold text-6xl">Lets grow together</h2>
      </div>
      {/* /Content */}
    </>
  );
};

export default Navbar;
