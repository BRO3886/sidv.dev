import React from 'react';
import content from '../lib/content';
import { motion } from 'framer-motion';

const TechStack = () => {
  return (
    <div className="w-10/12 md:w-8/12 mx-auto flex flex-col text-center">
      <div className="flex flex-wrap items-center">
        {content.techstack.map((tech, index) => {
          return (
            <motion.div whileHover={{ scale: 1.1 }} key={index} className="m-4">
              <span className="bg-white shadow-lg m-4 rounded-full">
                <img
                  className="h-18 md:h-24 lg:h-32"
                  src={tech.img}
                  alt={tech.name}
                />
                <h4 className="mt-1 text-sm md:text-base text-darkgrey dark:text-grey">
                  {tech.name}
                </h4>
              </span>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default TechStack;
