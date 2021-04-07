import React from 'react';
import { motion } from 'framer-motion';

const WorkCard = (props) => {
  return (
    <motion.button
      className="text-left focus: outline-none"
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.99 }}
    >
      <a href={props.work.url}>
        <div className="bg-white dark:bg-darkergrey dark:border-transparent rounded-xl border-opacity-100 border p-2 lg:p-0">
          <div className="flex items-center">
            <div className="hidden lg:block">
              <img
                src={props.work.img}
                alt={props.work.title}
                className="h-40 w-40 rounded-l-xl"
              />
            </div>
            <div className="px-4 py-2">
              <h2 className="text-lg md:text-xl lg:text-2xl font-bold">
                {props.work.title}
              </h2>
              <p className="text-grey mb-0 capitalize">{props.work.role}</p>
              <p className="text-grey mb-3 capitalize text-xs">{props.work.duration}</p>
              <ul className="list-disc ml-5">
                {props.work.about.map((line, index) => {
                  return (
                    <li className="text-lg" key={index}>
                      {line}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </a>
    </motion.button>
  );
};

export default WorkCard;
