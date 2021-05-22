import { React, useContext } from 'react';
import { motion } from 'framer-motion';
import ThemeContext from '../theme/ThemeContext';

const Redirect = (props) => {
  const { dark, _ } = useContext(ThemeContext);
  return (
    <motion.a
      href={props.item.url}
      className="bg-lightblue dark:bg-blue px-10 py-4 w-5/6 md:w-1/2 text-center my-3 md:my-4 rounded-lg text-blue dark:text-white font-medium capitalize focus:outline-none"
      whileTap={{ scale: 0.98 }}
      transition={{ type: 'spring', duration: 0.4 }}
      whileHover={
        dark
          ? { scale: 1.02 }
          : { scale: 1.02, backgroundColor: '#2B8BFC', color: '#FFFFFF' }
      }
    >
      <h1>{props.item.title}</h1>
    </motion.a>
  );
};

export default Redirect;
