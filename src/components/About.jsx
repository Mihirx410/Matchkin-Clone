import { Search, UserCheck, Briefcase, Star } from "lucide-react";
import { motion } from "framer-motion";

const About = () => {
  const clientSteps = [
    {
      icon: <Search className="w-10 h-10 text-orange-500" />,
      title: "DEFINE YOUR PROJECT",
      description: "Clearly outline your goals, requirements, and budget."
    },
    {
      icon: <UserCheck className="w-10 h-10 text-orange-500" />,
      title: "REVIEW AI MATCHES",
      description: "Receive AI-curated consultant profiles tailored to your needs."
    },
    {
      icon: <Briefcase className="w-10 h-10 text-orange-500" />,
      title: "CONNECT & INTERVIEW",
      description: "Engage with promising candidates via the platform."
    },
    {
      icon: <Star className="w-10 h-10 text-orange-500" />,
      title: "RATE & CELEBRATE",
      description: "Select the best fit and manage your project on Matchkin."
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4 font-montserrat capitalize">ABOUT US</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-system">
            A simple, efficient process that connects clients with the right consultants
          </p>
        </motion.div>

        <div className="mb-20">
          <motion.h3 
            className="text-2xl font-semibold text-gray-900 mb-12 text-center font-montserrat"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            CLIENT JOURNEY
          </motion.h3>
          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {clientSteps.map((step, index) => (
              <motion.div key={index} variants={cardVariants}>
                <div className="border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow relative bg-white group">
                  <div className="p-6 text-center">
                    <motion.div 
                      className="flex justify-center mb-4"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    >
                      {step.icon}
                    </motion.div>
                    <div className="text-orange-500 font-bold text-sm mb-2 font-system">{step.step}</div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-3 font-montserrat">{step.title}</h4>
                    <p className="text-gray-600 text-sm leading-relaxed font-system">{step.description}</p>
                  </div>
                  {index < clientSteps.length - 1 && (
                    <motion.div 
                      className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-orange-200"
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.2 }}
                    ></motion.div>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div 
          className="bg-orange-50/50 rounded-2xl p-8 lg:p-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl font-semibold text-gray-900 mb-8 text-center font-montserrat">THE POWER OF AI MATCHING</h3>
          <div className="flex flex-col lg:flex-row items-center justify-center space-y-8 lg:space-y-0 lg:space-x-12">
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <motion.div 
                className="w-32 h-32 bg-orange-100 rounded-full flex items-center justify-center mb-4 mx-auto"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <Search className="w-16 h-16 text-orange-500" />
              </motion.div>
              <h4 className="font-semibold text-gray-900 font-montserrat">Project Requirements</h4>
            </motion.div>
            
            <motion.div 
              className="flex items-center"
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="w-16 h-0.5 bg-orange-300 hidden lg:block"></div>
              <motion.div 
                className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center mx-4"
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              >
                <div className="w-4 h-4 bg-white rounded-full"></div>
              </motion.div>
              <div className="w-16 h-0.5 bg-orange-300 hidden lg:block"></div>
            </motion.div>
            
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <motion.div 
                className="w-32 h-32 bg-orange-100 rounded-full flex items-center justify-center mb-4 mx-auto"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <UserCheck className="w-16 h-16 text-orange-500" />
              </motion.div>
              <h4 className="font-semibold text-gray-900 font-montserrat">Perfect Consultant Match</h4>
            </motion.div>
          </div>
          
          <motion.p 
            className="text-center text-gray-600 mt-8 max-w-2xl mx-auto font-system"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Our advanced AI analyzes project requirements, consultant expertise, availability, and past performance 
            to create the most accurate matches in the industry.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;