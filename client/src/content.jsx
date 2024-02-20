const HOBBIES = [
  { text: "Singing", img: "singing" },
  { text: "Live Streaming", img: "live" },
  { text: "Movies", img: "movies" },
  { text: "Travel", img: "travel" },
  { text: "Spin", img: "spin" },
  { text: "Yoga", img: "yoga" },
];

const INFINITE = {
  title: "Infinite: A Game",
  imgAlt: "screenshot of Infinite",
  description:
    "Infinite is a browser game where you can expand the galaxy endlessly by matching the edges of hexagonal tiles.",
  skills: ["JavaScript", "HTML", "CSS", "Express"],
  githubUrl: "//github.com/melody-ho/infinite",
  demoUrl: "//infinite.melodyho.dev",
};

const JOURN = {
  title: "Journ: A Scrapbook",
  imgAlt: "screenshot of Journ",
  description:
    "Journ is a digital scrapbooking web app for capturing life's moments with images, videos, and text.",
  skills: ["React", "Next.js", "Sequelize", "SQL", "AWS S3"],
  githubUrl: "//github.com/melody-ho/journ",
  demoUrl: "//journ.melodyho.dev",
};

const ME =
  "Hello there! I'm Melody Ho, a full-stack software engineer with a specialization in front-end development. I am dedicated to crafting user-centric experiences with code.";

const TOOLBOX_SUBSECTIONS = [
  {
    title: "front end",
    tools: [
      { name: "HTML", img: "html" },
      { name: "CSS", img: "css" },
      { name: "JavaScript", img: "javascript" },
      { name: "React", img: "react" },
    ],
  },
  {
    title: "back end",
    tools: [
      { name: "Node.js", img: "nodedotjs" },
      { name: "Express", img: "express" },
      { name: "Sequelize", img: "sequelize" },
      { name: "MySQL", img: "mysql" },
      { name: "MongoDB", img: "mongodb" },
    ],
  },
  {
    title: "full stack",
    tools: [{ name: "Next.js", img: "nextdotjs" }],
  },
  {
    title: "testing",
    tools: [{ name: "Jest", img: "jest" }],
  },
  {
    title: "design",
    tools: [
      { name: "Figma", img: "figma" },
      { name: "XD", img: "xd" },
      { name: "Illustrator", img: "illustrator" },
      { name: "After Effects", img: "after-effects" },
      { name: "Photoshop", img: "photoshop" },
    ],
  },
];

export { HOBBIES, INFINITE, JOURN, ME, TOOLBOX_SUBSECTIONS };
