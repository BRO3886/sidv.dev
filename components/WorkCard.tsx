import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import ThemeContext from '../theme/ThemeContext';

type Props = {
  work: Work;
};

type Work = {
  title: string;
  url: string;
  img: string;
  imgDark: string;
  duration: string;
  role: string;
  about: string[];
};

const WorkCard = (props: Props) => {
  const { dark, _ } = useContext(ThemeContext);
  return (
    <motion.button
      className="text-left focus:outline-none p-2 w-full "
      transition={{ type: 'spring', duration: 0.4 }}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.99 }}
    >
      <div className="flex-1 bg-white rounded-xl dark:bg-darkergrey duration-400 dark:border-transparent border-opacity-100 border hover:shadow-xl hover:border-transparent">
        <a
          href={props.work.url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-grow"
        >
          <div className="flex flew-row items-center">
            <img
              src={dark ? props.work.imgDark : props.work.img}
              alt={props.work.url}
              className="h-full w-3/12 rounded-l-xl hidden md:block"
            />
            <div className="flex flex-col p-6">
              <h2 className="text-2xl sm:text-2xl md:text-xl lg:text-3xl font-bold">
                {props.work.title}
              </h2>
              <p className="dark:text-grey text-base text-darkgrey mb-0 capitalize">
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
          </div>
        </a>
      </div>
    </motion.button>
  );
};

export default WorkCard;
