import React from 'react';
import { motion } from 'framer-motion';

const ContactLink = (props) => {
  return (
    <motion.div
      whileTap={{ scale: 0.95 }}
      className="m-1 inline-block text-white"
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
