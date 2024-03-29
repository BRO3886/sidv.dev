export const nav = {
  logo: 'SV',
  links: [
    {
      text: 'PROJECTS',
      to: '/projects',
    },
    {
      text: 'WORK',
      to: '/work',
    },
    {
      text: 'CONTACT',
      to: '/contact',
    },
  ],
};

export const landing = {
  img: {
    url: 'assets/pp.webp',
    alt: 'Siddhartha Varma',
  },
  text: ['Hi!', "I'm", 'Siddhartha.', "I'm a"],
  btnText: 'Get in Touch',
};

export const about = [
  'A Fullstack Developer based in Delhi, India. Currently an SDE at Zomato.',
  '',
  "I have hands on experience with various languages and frameworks. I've worked with Flutter and Go. I've made projects with React, Express.",
  '',
  'I love open source. I try to contribute to open source projects from time to time. Trying to get better at contributing.',
  '',
  'I also have some interest in design. I love to design UIs, social media posters for my projects on my own. In fact, I designed this website too!',
];

export const techstack = [
  {
    img: '/assets/stack/flutter.svg',
    name: 'Flutter',
  },
  {
    img: '/assets/stack/kotlin.svg',
    name: 'Android',
  },
  {
    img: '/assets/stack/go.svg',
    name: 'Go',
  },
  {
    img: '/assets/stack/fastapi.svg',
    name: 'FastAPI',
  },
  {
    img: '/assets/stack/python.svg',
    name: 'Python',
  },
  {
    img: '/assets/stack/react.svg',
    name: 'React',
  },
  // {
  //   img: '/assets/stack/vue.svg',
  //   name: 'Vue',
  // },
  // {
  //   img: '/assets/stack/nextjs.svg',
  //   name: 'Next JS',
  // },
  {
    img: '/assets/stack/nodejs.svg',
    name: 'Node',
  },
];

export const contactInfo = {
  heading: ['Get in ', 'Touch'],
  primary: [
    {
      img: '/assets/contact/Telegram.svg',
      link: 'https://t.me/vaerma',
      name: 'Telegram',
    },
    {
      img: '/assets/contact/email.svg',
      link: 'mailto:siddverma1999@gmail.com',
      name: 'Mail',
    },
  ],
  social: [
    {
      img: '/assets/contact/Github.svg',
      link: 'https://github.com/BRO3886',
      name: 'GitHub',
    },
    {
      img: '/assets/contact/Instagram.svg',
      link: 'https://instagram.com/sidv_22',
      name: 'Instagram',
    },
    {
      img: '/assets/contact/Twitter.svg',
      link: 'https://twitter.com/sidv_22',
      name: 'Twitter',
    },
    {
      img: '/assets/contact/LinkedIN.svg',
      link: 'https://linkedin.com/in/siddharthav22/',
      name: 'LinkedIN',
    },
  ],
};

export const resume = {
  url: 'https://sidv.dev/resume',
  btn: 'DOWNLOAD RESUME',
};

export const projectsInfo = [
  {
    title: 'Google Tasks CLI',
    subtitle: 'Manage your Google Tasks right from your terminal.',
    img: 'assets/projects/gtasks.webp',
    redirect: 'https://youtu.be/trsdIUu3pMw',
    github: 'https://github.com/BRO3886/gtasks',
    link: 'https://github.com/BRO3886/gtasks',
  },
  {
    title: 'Medium RSS-API',
    subtitle: 'A simple webservice to get JSON feed from Medium RSS Feed.',
    img: 'assets/projects/medium-api.webp',
    redirect: 'https://medium-rss-api.herokuapp.com/docs',
    github: 'https://github.com/BRO3886/Medium-API',
    link: 'https://medium-rss-api.herokuapp.com/docs',
  },
  {
    title: 'Akina',
    subtitle: 'Our contribution towards fighting the Covid-19 pandemic',
    img: 'assets/projects/akina.webp',
    redirect: 'https://youtu.be/rLHDL1hEmBw',
    github: 'https://github.com/BRO3886/Project-Hestia',
    link: 'https://akina.dscvit.com',
  },
  {
    title: 'Katamari',
    subtitle: 'A projects page generator for GitHub users and organisations',
    img: 'assets/projects/katamari.webp',
    redirect: 'https://github.com/GDGVIT/katamari',
    github: 'https://github.com/GDGVIT/katamari',
    link: 'https://github.com/GDGVIT/katamari/releases',
  },
  {
    title: 'Gin Template',
    subtitle: 'A fully dockerised template repo for kickstarting Gin REST APIs',
    img: 'assets/projects/gin-template.webp',
    redirect: 'https://github.com/BRO3886/gin-template',
    github: 'https://github.com/BRO3886/gin-template',
    link: 'https://github.com/BRO3886/gin-template',
  },
  {
    title: 'QwickScan',
    subtitle: 'An app for making queues simpler during a pandemic.',
    img: 'assets/projects/qwickscan.webp',
    redirect: 'https://youtu.be/CCXDGFrspcs',
    github: 'https://github.com/BRO3886/Apptitude-QwickScan',
    link: 'https://github.com/BRO3886/qwickscan',
  },
];

export const workInfo = [
  {
    title: 'Zomato',
    url: 'https://zomato.com',
    img: 'assets/work/zomato.webp',
    imgDark: 'assets/work/zomato-dark.webp',
    duration: 'Jul 2022 - Present',
    role: 'Software Development Engineer - 1',
    about: [
      'Zomato is a restaurant aggregator platform in India',
      'Working on Search tech at Zomato as a backend developer',
    ],
  },
  {
    title: 'Groww',
    url: 'https://groww.in',
    img: 'assets/work/groww.webp',
    imgDark: 'assets/work/groww.webp',
    duration: 'Jan 2022 - Present',
    role: 'Software Engineering Intern',
    about: [
      'Groww is an investing platform based in India. ',
      'Currently working on the core platform services as a backend developer.',
    ],
  },
  {
    title: 'Nearcast',
    url: 'https://nearcast.com',
    img: 'assets/work/nearcast-light.webp',
    imgDark: 'assets/work/nearcast-dark.webp',
    duration: 'Apr 2021 - August 2021',
    role: 'Flutter Dev',
    about: [
      'Nearcast is a neighbourhood social media platform, based in Mountain View, California',
      'Worked on the flutter app of the platform, used a lot of native modules for the video capture and processing',
    ],
  },
  {
    title: 'Winuall',
    url: 'https://winuall.com',
    img: 'assets/work/winuall-light.webp',
    imgDark: 'assets/work/winuall-dark.webp',
    duration: 'Jan 2021 - Apr 2021',
    role: 'Backend Dev Intern',
    about: [
      'Winuall is a startup based out of Bangalore. It specialises in helping coaching centers go digital.',
      'Worked on the marketplace backend, jitsi integration and app deployment automation pipeline.',
    ],
  },
  // {
  //   title: 'WY;FY',
  //   url: 'https://www.withyouforyou.co.in/',
  //   img: 'assets/work/wyfy.jfif',
  //   duration: 'May 2020 - Dec 2020',
  //   role: 'Co-Founder and CTO',
  //   about: [
  //     'With You; For You is a SaaS product, which strives to make mental health services easily accessible. ',
  //     'I was handling the tech for WY;FY along with another dev.',
  //   ],
  // },
  {
    title: 'Nirmitee.io',
    url: 'https://www.nirmitee.io/',
    img: 'assets/work/nirmitee.webp',
    imgDark: 'assets/work/nirmitee.webp',
    duration: 'Sep 2020 - Nov 2020',
    role: 'Flutter Intern',
    about: [
      'Nirmitee.io is product development studio, based out of Pune. It offers Web dev, App dev and UX services to clients.',
      'I made the app for one of their clients, Byteseal.',
    ],
  },
  {
    title: 'OYO Rooms',
    url: 'https://www.oyorooms.com/',
    img: 'assets/work/oyo.webp',
    imgDark: 'assets/work/oyo.webp',
    duration: 'June 2019 - July 2019',
    role: 'Intern - Technology',
    about: [
      'Made the internal tech support portal, to raise issues about different technical services being offered to employees.',
      'Used Django for backend, and Freshdesk API to generate a ticket on their existing Freshdesk integration.',
    ],
  },
];
