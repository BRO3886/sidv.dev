import React from 'react';
import { motion } from 'framer-motion';

const ContactLink = (props) => {
  return (
    <motion.div
      whileTap={{ scale: 0.95 }}
      className="mr-5 mt-2 md:mr-10 md:mt-4 inline-block text-white"
    >
      <a href={props.data.link}>
        <img
          src={props.data.img}
          alt={props.data.name}
          className="h-16 md:h-24"
        ></img>
      </a>
      {/* <div>{props.data.name}</div> */}
    </motion.div>
  );
};

export default ContactLink;
