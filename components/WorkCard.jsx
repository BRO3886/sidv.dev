import React from 'react';
import { motion } from 'framer-motion';

const WorkCard = (props) => {
  return (
    <motion.button
      className="text-left focus: outline-none flex flex-col"
      transition={{ type: "spring", duration: 0.4 }}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.99 }}
    >
      <div className="flex-1 px-10 py-12 bg-white rounded-xl dark:bg-darkergrey  duration-400 dark:border-transparent border-opacity-100 border p-2 lg:p-6 hover:shadow-xl hover:border-transparent">
        <h2 className="text-lg md:text-xl lg:text-2xl font-bold">
          {props.work.title}
        </h2>
        <p className="dark:text-grey text-darkgrey mb-0 capitalize">
          {props.work.role}
        </p>
        <p className="dark:text-grey text-darkgrey mb-3 capitalize text-xs">
          {props.work.duration}
        </p>
        <ul className="list-disc ml-5">
          {props.work.about.map((line, index) => {
            return (
              <li className="text-xl" key={index}>
                {line}
              </li>
            );
          })}
        </ul>
      </div>
    </motion.button>
  );
};

export default WorkCard;
