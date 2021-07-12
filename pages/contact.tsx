import React from 'react';
import ContactLink from '../components/ContactLink';
import Header from '../components/Header';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import content from '../lib/content';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <div className="dark:bg-black">
      <Header />
      <Nav name="contact" />
      <div className="flex flex-col min-h-screen">
        <h2 className="w-10/12 mx-auto text-3xl md:text-5xl font-bold pt-60  md:pt-36 dark:text-white">
          Get in <span className="text-blue">Touch</span>
        </h2>
        <div className="w-10/12 mx-auto flex flex-col justify-center">
          <br />
          <div className="text-darkgrey dark:text-grey font-semibold mb-4 md:text-xl">
            {'PRIMARY'}
          </div>
          <div className="">
            {content.contact.primary.map((item, index) => {
              return <ContactLink key={index} data={item} />;
            })}
          </div>
          <br />
          <div className="text-darkgrey dark:text-grey font-semibold mb-4 md:text-xl">
            {'SOCIAL'}
          </div>
          <div className="">
            {content.contact.social.map((item, index) => {
              return <ContactLink key={index} data={item} />;
            })}
          </div>
          <div>
            <a
              href="https://sidv.dev/resume"
              target="_blank"
              rel="noopener noreferrer"
            >
              <motion.button
                whileHover={{ backgroundColor: '#2B8BFC', color: '#FFFFFF' }}
                whileTap={{
                  scale: 0.95,
                  backgroundColor: '#2B8BFC',
                  color: '#FFFFFF',
                }}
                className="bg-lightblue dark:bg-blue px-28 md:px-36 py-2 md:py-3 mt-20 rounded-lg md:text-lg text-sm text-blue dark:text-white font-medium capitalize focus:outline-none"
              >
                {content.resume.btn}
              </motion.button>
            </a>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;
