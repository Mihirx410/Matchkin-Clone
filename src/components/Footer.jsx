import { motion } from "framer-motion";
import { Instagram, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-orange-50 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-black text-sm mb-4 md:mb-0">
            © 2025 Matchkin Built By <span className="font-bold">Mihir.</span>
          </p>
          
          <div className="flex items-center space-x-6">
            <div className="flex space-x-4">
              {["About", "Contact", "Terms", "Privacy"].map((item) => (
                <motion.a
                  key={item}
                  href="#"
                  className="text-black hover:text-orange-500 text-sm transition-colors"
                  whileHover={{ y: -2 }}
                >
                  {item}
                </motion.a>
              ))}
            </div>
            
            <div className="border-l border-gray-700 h-6 mx-2"></div>
            
            <div className="flex space-x-4">
              <motion.a 
                href="#" 
                className="text-black hover:text-orange-500"
                whileHover={{ y: -3, scale: 1.1 }}
              >
                <Instagram size={18} />
              </motion.a>
              <motion.a 
                href="#" 
                className="text-black hover:text-orange-500"
                whileHover={{ y: -3, scale: 1.1 }}
              >
                <Linkedin size={18} />
              </motion.a>
              <motion.a 
                href="#" 
                className="text-black hover:text-orange-500"
                whileHover={{ y: -3, scale: 1.1 }}
              >
                <Twitter size={18} />
              </motion.a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;