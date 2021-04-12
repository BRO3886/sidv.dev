import Link from 'next/link';
import About from '../components/About';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Landing from '../components/Landing';
import Nav from '../components/Nav';
import TechStack from '../components/TechStack';

export default function Home() {
  return (
    <div className="dark:bg-black dark:text-white antialiased">
      <Header />
      <Nav props="home" />
      <Landing />
      <div className="dark:bg-black" style={{ height: '10vh' }}></div>
      <h2 className="w-10/12 md:w-8/12 mx-auto text-2xl md:text-4xl lg:text-5xl font-bold md:mt-10 dark:text-white">
        About <span className="text-blue">Me</span>
      </h2>
      <br />
      <About />
      <div style={{ height: '10vh' }}></div>
      <h2 className="w-10/12 md:w-8/12 mx-auto text-2xl md:text-4xl lg:text-5xl font-bold md:mt-10">
        <span className="text-blue">Tech</span> Stack
      </h2>
      <br />
      <TechStack />
      <div style={{ height: '10vh' }}></div>
      <div className="w-10/12 md:w-8/12 mx-auto">
        You can check out some of my{' '}
        <Link href="/projects">
          <a className="text-blue">projects</a>
        </Link>
        {' or '}
        <Link href="/contact">
          <a className="text-blue">let's get in touch.</a>
        </Link>
      </div>
      <div style={{ height: '10vh' }}></div>
      <Footer />
    </div>
  );
}
