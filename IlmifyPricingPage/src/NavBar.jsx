import { useState } from "react";

export default function Navbar() {
  // Define a boolean state called 'isOpen', defaulting to false
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white border-b border-gray-200 dark:bg-gray-900 dark:border-gray-800 sticky top-0 z-50 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="font-bold text-xl text-brand-primary dark:text-brand-secondary tracking-tight">
            Ilmify
            <span className="text-gray-500 text-sm font-normal">
              {" "}
              Tutorial Centre
            </span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#"
              className="text-sm font-medium text-gray-600 hover:text-brand-primary focus:outline-hidden focus:text-brand-primary transition-colors duration-200"
            >
              Home
            </a>
            <a
              href="#pricing-grid"
              className="text-sm font-medium text-brand-primary focus:outline-hidden transition-colors duration-200 font-semibold"
            >
              Pricing
            </a>
          </div>

          {/* HAMBURGER BUTTON: Visible on mobile, hidden on md screens and up */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)} //To check if the button is there or not
              type="button"
              className="p-2 rounded-md text-gray-500 hover:text-brand-primary hover:bg-gray-100 focus:outline-hidden focus:ring-2 focus:ring-brand-primary dark:text-gray-400 dark:hover:bg-gray-800 transition-all duration-200 cursor-pointer"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  // close icon path when menu is open
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  // Hamburger icon path when menu is closed
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE DROPDOWN PANEL: Only renders if 'isOpen' state is true */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800 transition-all duration-200 animate-fadeIn">
          <div className="px-2 pt-2 pb-4 space-y-1 sm:px-3 flex flex-col">
            <a
              href="#"
              className="px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:bg-gray-50 hover:text-brand-primary transition-all"
            >
              Home
            </a>
            <a
              href="#"
              className="px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:bg-gray-50 hover:text-brand-primary transition-all"
            >
              Courses
            </a>
            <a
              href="#pricing-grid"
              onClick={() => setIsOpen(false)}
              className="px-3 py-2 rounded-md text-base font-medium text-brand-primary bg-teal-50/50 dark:bg-brand-primary/10 transition-all"
            >
              Pricing
            </a>
            <a
              href="#"
              className="px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:bg-gray-50 hover:text-brand-primary transition-all"
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
