import { React, useContext } from 'react';
import Link from 'next/link';
import content from '../lib/content';
import ThemeContext from '../theme/ThemeContext';

const Nav = (props) => {
  const { dark, toggleDark } = useContext(ThemeContext);
  return (
    <header className="px-10 md:px-32 flex justify-between flex-wrap items-center lg:py-0 py-2 text-darkgrey bg-opacity-70 top-0 fixed w-screen z-10 bg-gray-50 border-b dark:border-darkergrey border-gray-200 dark:bg-black dark:text-white">
      <div className="flex flex-row">
        <a href="/">
          <h1 className="text-3xl font-bold text-black dark:text-white">
            {content.nav.logo}
            <span className="rounded-full bg-blue h-2 w-2 inline-block"></span>
          </h1>
        </a>
        <button
          onClick={toggleDark}
          className="ml-4 fill-current focus:outline-none"
          accessKey="t"
        >
          {dark ? (
            <svg
              className="border-white"
              id="moon"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
            </svg>
          ) : (
            <svg
              id="sun"
              className="border-black"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="5"></circle>
              <line x1="12" y1="1" x2="12" y2="3"></line>
              <line x1="12" y1="21" x2="12" y2="23"></line>
              <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
              <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
              <line x1="1" y1="12" x2="3" y2="12"></line>
              <line x1="21" y1="12" x2="23" y2="12"></line>
              <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
              <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
            </svg>
          )}
        </button>
      </div>
      <label htmlFor="menu-toggle" className="pointer-cursor lg:hidden block">
        <svg
          className="fill-current text-blue dark:text-white"
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 20 20"
        >
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
        </svg>
      </label>
      <input className="hidden" type="checkbox" id="menu-toggle" />
      <div
        className="hidden lg:flex lg:items-center lg:w-auto w-full"
        id="menu"
      >
        <nav>
          <ul className="lg:flex-1 items-center justify-between pt-4 lg:pt-0">
            <li>
              {content.nav.links.map((link, index) => {
                return (
                  <Link href={link.to} key={index}>
                    <a
                      className={`
									${props.name === link.to.replace('/', '') ? 'text-blue' : ''}
									text-sm font-medium hover:text-blue lg:p-4 py-3 px-0 block lg:inline`}
                    >
                      {link.text}
                    </a>
                  </Link>
                );
              })}
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Nav;
// border-bottom: 1px solid #e9e9e9;
