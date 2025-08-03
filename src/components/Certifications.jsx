import React from "react";
import { motion } from "framer-motion"

import { Certification } from "../constants"

const Certifications = () => {
  return (
      <div className="container mx-auto px-4 text-center">
      <motion.h2 
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl">Certifications
        </motion.h2>
        <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1}}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          {Certification.map((cert) => (
            <div
              key={cert.id}
              className="bg-transparent rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-105"
            >
              
              <div className="p-6 bg-transparent">
                <h3 className="text-xl font-semibold mb-2">{cert.name}</h3>
                <p className="text-gray-600 text-sm mb-2">Issued by: {cert.issuer}</p>
                <p className="text-gray-500 text-xs">Issued on: {cert.issueDate}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
  );
};

export default Certifications;