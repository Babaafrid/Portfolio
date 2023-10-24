import {
  klu,
  focus,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  ekart,
  hli,
  awscp,
  awsda,
  az900,
  ai900,
  threejs,
  redhat,
  afrid,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: afrid,
  }

];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "MSWD Peer Mentor",
    company_name: "KL University",
    icon: klu,
    iconBg: "#383E56",
    date: "Jul 2022 - Dec 2022",
    points: [
      "Developed a car rental system project using MERN stack.",
      "Earned the Full Stack Open certificate by successfully completing all tasks and projects, showcasing a deep understanding of modern web development.",
      "Earned React and Node certificates on HackerRank by successfully passing exams, validating a strong command of these technologies.",
    ],
  },
  {
    title: "IRP and Alumni Lead",
    company_name: "FOCUS",
    icon: focus,
    iconBg: "#E6DEDD",
    date: "Sep 2022 - Oct 2023",
    points: [
      "Assisted on making video resumes for senior students, offering an innovative approach to help them showcase their skills and experiences to potential employers.",
      "Assisted in maintaining and updating the senior students placement analysis Excel data.",
      "Gathered data on companies and educational platforms offering placement opportunities for senior students",
      "Assisted in shooting videos featuring students who achieved the highest placement packages, showcasing their success stories and experiences.",
    ],
  },
  {
    title: "AOOP & AIDS Peer Mentor",
    company_name: "KL University",
    icon: klu,
    iconBg: "#383E56",
    date: "Dec 2022 - May 2023",
    points: [
      "Earned the AI 900 certificate, demonstrating a strong understanding of fundamental Artificial Intelligence concepts",
      "Earned a 3-star rating on CodeChef, showcasing strong problem-solving and coding skills.",
      "Achieved an NPTEL Elite Certificate in Python for Data Science, underlining a strong foundation in Python programming",
      "Participated in Kaggle challenges, competing in real-world data science and machine learning projects.",
    ],
  },
  {
    title: "ML Peer Mentor",
    company_name: "KL University",
    icon: klu,
    iconBg: "#E6DEDD",
    date: "Jul 2023 - Present",
    points: [
      "Wrote an article on K-Means clustering algorithm and published it on Medium",
      "Worked on the machine learning project focused on eye disease classification, contributing to the development and implementation of algorithms for accurate disease detection.",
      "Participated in Kaggle challenges, competing in real-world data science and machine learning projects.",
    ],
  },
  // {
  //   title: "IRP and Alumni Director",
  //   company_name: "FOCUS",
  //   icon: meta,
  //   iconBg: "#383E56",
  //   date: "Oct 2023 - Present",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
];

const projects = [
  {
    name: "Car Rental System",
    description:
      "This project is car rental website developed using the MERN stack, enabling users to rent vehicles and check their availability for specific dates. It features Booked Cars page for users to manage their reservations, enhancing the overall car rental experience.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "pink-text-gradient",
      },
      {
        name: "express",
        color: "blue-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/Babaafrid/Car_Rental",
  },
  {
    name: "Health and Life Insurance System",
    description:
      "This project is Health and Life Insurance system developed using the MERN stack that enables users to book insurance policies. Users can manage their policies through the 'Your Policies' page, and a search bar is provided for retrieval of specific policies.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "pink-text-gradient",
      },
      {
        name: "express",
        color: "blue-text-gradient",
      },
    ],
    image: hli,
    source_code_link: "https://github.com/Babaafrid/HLI",
  },
  {
    name: "Supply Chain Management",
    description:
      "This project is Supply Chain Management website, built on the Django framework. Customers can easily place orders for products, while admins can access order data, update delivery statuses and track the number of orders for each product.",
    tags: [
      {
        name: "django",
        color: "blue-text-gradient",
      },
      {
        name: "mysql",
        color: "green-text-gradient",
      },
      {
        name: "html",
        color: "pink-text-gradient",
      },
    ],
    image: ekart,
    source_code_link: "https://github.com/Babaafrid/Supply-Chain-Management",
  },
];

const certificates = [
  {
    image: awscp,
    source_code_link: "https://www.credly.com/badges/2ee4642a-15c6-4273-b43b-a2722acd79bc/public_url",
  },
  {
    image: awsda,
    source_code_link: "https://www.credly.com/badges/1e1b121d-8b6e-4e78-9cb2-656324adde7f/public_url",
  },
  {
    image: redhat,
    source_code_link: "https://www.credly.com/badges/7461ab88-77bc-4757-8760-b3d7fb22c8da/public_url",
  },
  {
    image: az900,
    source_code_link: "https://www.credly.com/badges/521a7448-5162-4118-be3b-8cfc67afa531/public_url",
  },
  {
    image: ai900,
    source_code_link: "https://www.credly.com/badges/aab2c696-7d6d-4a5a-be2d-98014b1d5f19/public_url",
  },
];

export { services, technologies, experiences, certificates, projects };
