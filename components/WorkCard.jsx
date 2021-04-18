import React from 'react';
import { motion } from 'framer-motion';

const WorkCard = (props) => {
  return (
    <motion.button
      className="text-left focus:outline-none flex flex-col"
      transition={{ type: 'spring', duration: 0.4 }}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.99 }}
    >
      <div className="flex-1 bg-white rounded-xl dark:bg-darkergrey duration-400 dark:border-transparent border-opacity-100 border p-6 hover:shadow-xl hover:border-transparent">
        <a
          href={props.work.url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-grow"
        >
          <h2 className="text-2xl sm:text-2xl md:text-xl lg:text-3xl font-bold">
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
        </a>
      </div>
    </motion.button>
  );
};

export default WorkCard;
