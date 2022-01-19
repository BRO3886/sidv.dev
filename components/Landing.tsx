import React, { useContext } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import ThemeContext from '../theme/ThemeContext';
import { landing } from '../lib/content';

const Landing = () => {
  const { _, toggleDark } = useContext(ThemeContext);
  return (
    <div className="flex items-center justify-center h-screen dark:bg-black">
      <div className="w-10/12 md:w-9/12 lg:w-8/12 mx-auto flex flex-col md:flex-row-reverse items-center justify-between">
        <div className="w-10/12 sm:w-8/12 md:w-4/12 my-8 md:my-0 ">
          <motion.button
            onClick={() => toggleDark()}
            className="focus:outline-none"
            whileTap={{ scale: 0.98 }}
            whileHover={{ scale: 1.04 }}
          >
            <img
              className="rounded-full"
              src={landing.img.url}
              alt={landing.img.alt}
            />
          </motion.button>
        </div>
        <div className="text-black dark:text-white text-center md:text-left">
          <h2 className="transition-all duration-200 text-3xl md:text-5xl lg:text-6xl font-bold">
            {landing.text[0]}
            <br />
            {landing.text[1]}{' '}
            <span className="text-black dark:text-white transition-all duration-200">
              {landing.text[2]}
            </span>
          </h2>
          <Link href="/contact" passHref>
            <motion.button
              whileHover={{ backgroundColor: '#2B8BFC', color: '#FFFFFF' }}
              whileTap={{
                scale: 0.95,
                backgroundColor: '#2B8BFC',
                color: '#FFFFFF',
              }}
              transition={{ type: 'spring', duration: 0.2 }}
              className="bg-lightblue dark:bg-blue px-10 py-3 md:px-24 lg:px-36 mt-10 rounded-lg text-blue dark:text-white font-medium capitalize focus:outline-none transition-all duration-150"
            >
              {landing.btnText.toUpperCase()}
            </motion.button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Landing;
