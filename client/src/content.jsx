/// Imports ///
// svgs
import AfterEffectsIcon from "./svgs/AfterEffectsIcon";
import CssIcon from "./svgs/CssIcon";
import ExpresIcon from "./svgs/ExpressIcon";
import FigmaIcon from "./svgs/FigmaIcon";
import HtmlIcon from "./svgs/HtmlIcon";
import IllustratorIcon from "./svgs/IllustratorIcon";
import JavaScriptIcon from "./svgs/JavaScriptIcon";
import JestIcon from "./svgs/JestIcon";
import LiveIcon from "./svgs/LiveIcon";
import MongoDbIcon from "./svgs/MongoDbIcon";
import MoviesIcon from "./svgs/MoviesIcon";
import MySqlIcon from "./svgs/MySqlIcon";
import NextDotJsIcon from "./svgs/NextDotJsIcon";
import NodeDotJsIcon from "./svgs/NodeDotJsIcon";
import PhotoshopIcon from "./svgs/PhotoshopIcon";
import ReactIcon from "./svgs/ReactIcon";
import SequelizeIcon from "./svgs/SequelizeIcon";
import SingingIcon from "./svgs/SingingIcon";
import SpinIcon from "./svgs/SpinIcon";
import TravelIcon from "./svgs/TravelIcon";
import XdIcon from "./svgs/XdIcon";
import YogaIcon from "./svgs/YogaIcon";

/// Public ///
const HOBBIES = [
  { text: "Singing", icon: <SingingIcon /> },
  { text: "Live Streaming", icon: <LiveIcon /> },
  { text: "Movies", icon: <MoviesIcon /> },
  { text: "Travel", icon: <TravelIcon /> },
  { text: "Spin", icon: <SpinIcon /> },
  { text: "Yoga", icon: <YogaIcon /> },
];

const INFINITE = {
  title: "Infinite: A Game",
  imgAlt: "screenshot of Infinite",
  description:
    "Infinite is a browser puzzle game in which users can continuously expand the galaxy by matching edges of hexagonal tiles, designed to always give valid moves.",
  skills: ["HTML", "CSS", "JavaScript", "Express", "Jest"],
  githubUrl: "//github.com/melody-ho/infinite",
  demoUrl: "//infinite.melodyho.dev",
};

const JOURN = {
  title: "Journ: A Scrapbook",
  imgAlt: "screenshot of Journ",
  description:
    "Journ is a digital scrapbooking web app that enables users to document moments using images, videos, and text, with tagging and filtering functionality.",
  skills: ["CSS Modules", "React", "Next.js", "Sequelize", "AWS S3"],
  githubUrl: "//github.com/melody-ho/journ",
  demoUrl: "//journ.melodyho.dev",
};

const ME =
  "Hello there! I'm Melody Ho, a full-stack software engineer with a specialization in front-end development. I am dedicated to crafting user-centric experiences with code.";

const TOOLBOX_SUBSECTIONS = [
  {
    title: "front end",
    tools: [
      { name: "HTML", icon: <HtmlIcon /> },
      { name: "CSS", icon: <CssIcon /> },
      { name: "JavaScript", icon: <JavaScriptIcon /> },
      { name: "React", icon: <ReactIcon /> },
    ],
  },
  {
    title: "back end",
    tools: [
      { name: "Node.js", icon: <NodeDotJsIcon /> },
      { name: "Express", icon: <ExpresIcon /> },
      { name: "Sequelize", icon: <SequelizeIcon /> },
      { name: "MySQL", icon: <MySqlIcon /> },
      { name: "MongoDB", icon: <MongoDbIcon /> },
    ],
  },
  {
    title: "full stack",
    tools: [{ name: "Next.js", icon: <NextDotJsIcon /> }],
  },
  {
    title: "testing",
    tools: [{ name: "Jest", icon: <JestIcon /> }],
  },
  {
    title: "design",
    tools: [
      { name: "Figma", icon: <FigmaIcon /> },
      { name: "XD", icon: <XdIcon /> },
      { name: "Illustrator", icon: <IllustratorIcon /> },
      { name: "After Effects", icon: <AfterEffectsIcon /> },
      { name: "Photoshop", icon: <PhotoshopIcon /> },
    ],
  },
];

export { HOBBIES, INFINITE, JOURN, ME, TOOLBOX_SUBSECTIONS };
