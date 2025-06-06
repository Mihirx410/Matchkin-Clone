import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section id="home" className="inset-0 bg-black/10 py-20 md:py-32 lg:py-48 transition-colors duration-300">
      <div className="max-w-full mx-auto px-3 sm:px-6 py-28 lg:px-8 sm:py-52 md:py-40 lg:py-24 h-full flex items-center">
        <div className="text-center w-full">
          <motion.h1 
            className="font-montserrat text-4xl sm:text-4xl md:text-6xl lg:text-[3.8rem] uppercase font-bold tracking-wide md:tracking-wider text-gray-900 mb-4 md:mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Connect Projects with
            <span className="lg:inline md:inline sm:block block mt-2">&nbsp;Expert Consultants</span>
          </motion.h1>

          <motion.p 
            // className="text-lg sm:text-lg md:text-[20px] font-system text-gray-600 mb-8 md:mb-10 mb:block sm:inline block lg:block max-w-2xl md:max-w-3xl mx-auto leading-relaxed"
            className="text-lg sm:text-lg md:text-[20px] font-system text-gray-600 mb-8 md:mb-10 max-w-2xl md:max-w-3xl lg:max-w-4xl lg:mb-6 mx-auto leading-relaxed block sm:inline-block lg:block"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            AI-powered matching for seamless collaboration. Find the perfect fit for your consulting needs.
          </motion.p>

          <motion.div 
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <button className="w-full sm:w-auto px-4 py-2 sm:px-6 sm:py-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-md transition-colors duration-200">
              Join as a Client
            </button>
            <button className="w-full sm:w-auto px-4 py-2 sm:px-6 sm:py-3 border-2 border-orange-500 bg-orange-100 hover:bg-orange-50 text-gray-800 font-semibold rounded-md transition-colors duration-200">
              Join as a Consultant
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;