import React from "react";
import { CheckCircle, Clock, Star, Shield, MessageSquare, FileText, Users, Lock } from "lucide-react";
import { motion } from "framer-motion";

const ForClientsSection = () => {
  const features = [
    {
      icon: <Star className="w-8 h-8 text-accent-orange" />,
      title: "AI-Powered Precision Matching",
      description: "Connect with curated network of vetted, expert consultants"
    },
    {
      icon: <Clock className="w-8 h-8 text-accent-orange" />,
      title: "Accelerate Your Search",
      description: "Streamline your search and receive high-quality proposals faster"
    },
    {
      icon: <Shield className="w-8 h-8 text-accent-orange" />,
      title: "Hire with Confidence",
      description: "Work with verified professionals who undergo a thorough vetting"
    },
    {
      icon: <CheckCircle className="w-8 h-8 text-accent-orange" />,
      title: "Access Top-Tier Expertise",
      description: "Our intelligent algorithms analyze your project needs precisely"
    }
  ];

  const platformFeatures = [
    {
      icon: <FileText className="w-8 h-8 text-accent-orange" />,
      title: "Effortless Project Posting",
      description: "Clearly define scope, skills, budget and timeline easily"
    },
    {
      icon: <Users className="w-8 h-8 text-accent-orange" />,
      title: "Intelligent Recommendations",
      description: "Receive AI-driven suggestions for the best consultants"
    },
    {
      icon: <MessageSquare className="w-8 h-8 text-accent-orange" />,
      title: "Seamless Communication",
      description: "Collaborate directly and securely via integrated messaging"
    },
    {
      icon: <Lock className="w-8 h-8 text-accent-orange" />,
      title: "Secure Collaboration Space",
      description: "Manage proposals, milestones, and payments securely"
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
    <section className="py-20 bg-bg-primary" id="clients">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-custom-xl font-montserrat font-bold text-text-dark mb-4">FOR CLIENTS</h2>
          <p className="text-custom-base font-system text-text-light max-w-3xl mx-auto">
            Find Your Ideal Consultant, Faster. Leverage AI to connect with vetted experts perfectly matched to your project needs.
          </p>
        </motion.div>

        {/* Features Grid - Square Cards */}
        <div className="mb-16">
          <motion.h3 
            className="text-2xl font-montserrat font-semibold text-text-dark mb-8 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            WHY CLIENTS CHOOSE US
          </motion.h3>
          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {features.map((feature, index) => (
              <motion.div key={index} variants={cardVariants}>
                <div className="rounded-lg border-0 shadow-md hover:shadow-lg transition-shadow bg-bg-secondary p-6 text-center h-full">
                  <motion.div 
                    className="flex justify-center mb-4"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  >
                    {feature.icon}
                  </motion.div>
                  <h4 className="text-lg font-montserrat font-semibold text-text-dark mb-3">{feature.title}</h4>
                  <p className="text-text-light font-system text-sm leading-relaxed">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Platform Features - Rectangular Cards */}
        <div className="mb-16">
          <motion.h3 
            className="text-2xl font-montserrat font-semibold text-text-dark mb-8 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            PLATFORM FEATURES FOR CLIENTS
          </motion.h3>
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {platformFeatures.map((feature, index) => (
              <motion.div key={index} variants={cardVariants} className="h-full">
                <div className="rounded-lg border-0 shadow-md hover:shadow-lg transition-shadow bg-bg-tertiary p-4 h-full flex items-start gap-3">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    className="flex-shrink-0 mt-1"
                  >
                    {feature.icon}
                  </motion.div>
                  <div>
                    <h4 className="text-lg font-montserrat font-semibold text-text-dark mb-2">
                      {feature.title}
                    </h4>
                    <p className="text-text-light font-system text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* CTA Section */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl font-montserrat font-semibold text-text-dark mb-4">READY TO FIND YOUR PERFECT CONSULTANT?</h3>
          <p className="text-custom-base font-system text-text-light max-w-3xl mx-auto mb-6">
            Post your project today and let our AI connect you with the expertise you need.
          </p>
          <button className="bg-accent-orange text-white font-montserrat font-medium px-6 py-3 rounded-md hover:bg-opacity-90 transition-colors">
            Post a Project Now
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default ForClientsSection;