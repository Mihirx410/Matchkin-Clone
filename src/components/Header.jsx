import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import WaitlistFlow from "./Waitlist";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showWaitlist, setShowWaitlist] = useState(false);
  const navigate = useNavigate();

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "For Clients", href: "#clients" },
    { label: "About", href: "#about" },
  ];

  return (
    <motion.header className="w-full bg-white/75 border-b border-gray-100 sticky top-0 z-50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo/Brand */}
          <motion.div
            className="flex items-center"
            whileHover={{ scale: 1.05 }}
          >
            <div className="text-2xl font-bold text-gray-900">MatchKin</div>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
  {navItems.map((item) => (
    <a key={item.label} href={item.href} className="text-gray-600 hover:text-gray-900">
      {item.label}
    </a>
  ))}
</nav>

          {/* Right side buttons */}
          <div className="flex items-center space-x-4">
            <div className="hidden sm:flex space-x-4">
              <button
                onClick={() => navigate('/join')}
                className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg"
              >
                Join Now
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-gray-600 hover:text-gray-900 focus:outline-none"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Full-screen Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black z-40 md:hidden"
              onClick={() => setIsOpen(false)}
            />

            {/* Sidebar */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween" }}
              className="fixed top-0 right-0 h-screen w-64 max-w-md bg-white shadow-lg z-50 flex flex-col"
            >
              <div className="p-4 flex justify-end">
                <button
                  className="text-gray-600 hover:text-gray-900"
                  onClick={() => setIsOpen(false)}
                  aria-label="Close menu"
                >
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <nav className="flex-1 px-4 space-y-4">
                {["Home", "For Clients", "For Consultants"].map((item) => (
                  <a
                    key={item}
                    href="#"
                    className="block px-4 py-3 text-xl font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg"
                    onClick={() => setIsOpen(false)}
                  >
                    {item}
                  </a>
                ))}

                <button
                  onClick={() => setShowWaitlist(!showWaitlist)}
                  className="bg-orange-400 px-4 py-2 rounded-md w-full"
                >
                  Join Us
                </button>

                {showWaitlist && <WaitlistFlow />}
              </nav>

              <div className="p-4 border-t border-gray-200"></div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
