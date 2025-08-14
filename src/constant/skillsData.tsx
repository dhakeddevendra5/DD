import React from "react";

import {FaCss3, FaGitAlt, FaGithub, FaHtml5, FaJava, FaLaptopCode, FaMobile, FaPython,
        FaReact, FaGaugeHigh, FaTruckMoving, FaWheelchair, FaBookOpen, FaCodeBranch,
        FaRobot, FaBootstrap, FaSearchengin, FaSquareJs,} from "react-icons/fa6";

import {SiDocker, SiExpress, SiFirebase, SiFramer, SiMongodb, SiMysql, SiNetlify,
        SiNextdotjs, SiPostgresql, SiPostman, SiRender, SiReplit, SiTailwindcss,
        SiVercel, SiOpenai} from "react-icons/si";

import { GiBrain } from "react-icons/gi";
import { MdApi } from "react-icons/md";
import { TbBrandCpp , TbCube3dSphere} from "react-icons/tb";
import { GrOracle } from "react-icons/gr";
import { BiLogoSpringBoot } from "react-icons/bi";
import { RiPerplexityLine, RiCopilotFill,  } from "react-icons/ri";

interface LogoProps {
  title: string;
  logoComponent: React.FC;
  color?: string;
}

interface SkillsDataProps {
  title: string;
  data: LogoProps[];
}

export const skillsData: SkillsDataProps[] = [
  {
    title: "Languages",
    data: [
      { title: "Java", logoComponent: FaJava, color: "#007396" },
      { title: "Python", logoComponent: FaPython, color: "#3776AB" },
      { title: "C/C++", logoComponent: TbBrandCpp, color: "#00599C" },
      { title: "JavaScript", logoComponent: FaSquareJs, color: "#F7DF1E" },
      { title: "HTML5", logoComponent: FaHtml5, color: "#E34F26" },
      { title: "CSS3", logoComponent: FaCss3, color: "#1572B6" },
    ],
  },
  {
    title: "Databases",
    data: [
      { title: "MongoDB", logoComponent: SiMongodb, color: "#47A248" },
      { title: "MySQL", logoComponent: SiMysql, color: "#4479A1" },
      { title: "Oracle SQL", logoComponent: GrOracle, color: "#F80000" },
      { title: "PostgreSQL", logoComponent: SiPostgresql, color: "#336791" },
    ],
  },
  {
    title: "Frameworks & Libraries",
    data: [
      { title: "Spring Boot", logoComponent: BiLogoSpringBoot, color: "#6DB33F" },
      { title: "Bootstrap", logoComponent: FaBootstrap, color: "#7952B3" },
      { title: "Express.js", logoComponent: SiExpress, color: "#d4d4d8" },
      { title: "Framer Motion", logoComponent: SiFramer, color: "#0055FF" },
      { title: "Next.js", logoComponent: SiNextdotjs, color: "#d4d4d8" },
      { title: "React", logoComponent: FaReact, color: "#61DAFB" },
      { title: "Tailwind CSS", logoComponent: SiTailwindcss, color: "#06B6D4" },
    ],
  },
  {
    title: "Dev Tools & Platforms",
    data: [
      { title: "Git", logoComponent: FaGitAlt, color: "#F05032" },
      { title: "GitHub", logoComponent: FaGithub, color: "#d4d4d8" },
      { title: "Netlify", logoComponent: SiNetlify, color: "#00C7B7" },
      { title: "Postman", logoComponent: SiPostman, color: "#FF6C37" },
      { title: "Replit", logoComponent: SiReplit, color: "#667881" },
      { title: "Vercel", logoComponent: SiVercel, color: "#d4d4d8" },
      { title: "Docker", logoComponent: SiDocker, color: "#2496ED" },
      { title: "Render", logoComponent: SiRender, color: "#0055FF" },
    ],
  },
  {
    title: "AI",
    data: [
      { title: "Copilot", logoComponent: RiCopilotFill, color: "#00A4FF" },
      { title: "Cursor", logoComponent: TbCube3dSphere, color: "#000000ff" },
      { title: "ChatGpt", logoComponent: SiOpenai, color: "rgb(0, 255, 5)" },
      { title: "Perplexity", logoComponent: RiPerplexityLine, color: "#4CAF50" },
    ],
  },
  {
    title: "Concepts & Technologies",
    data: [
      { title: "Restful APIs", logoComponent: MdApi, color: "#4CAF50" },
      { title: "Agile Methodologies", logoComponent: FaTruckMoving, color: "#FBBF24" },
      { title: "API Design", logoComponent: MdApi, color: "#5C2D91" },
      { title: "Microservices", logoComponent: FaLaptopCode, color: "#FF9800" },
      { title: "Cloud Computing", logoComponent: SiFirebase, color: "#FFCA28" },
      { title: "CI/CD", logoComponent: FaTruckMoving, color: "#0A66C2" },
      { title: "Accessibility", logoComponent: FaWheelchair, color: "#1E88E5" },
      { title: "Web Performance", logoComponent: FaGaugeHigh, color: "#388E3C" },
      { title: "Responsive Design", logoComponent: FaMobile, color: "#009688" },
      { title: "SEO Optimization", logoComponent: FaSearchengin, color: "#FF5722" },
      { title: "BERT", logoComponent: FaBookOpen, color: "#2196F3" },
      { title: "CI/CD", logoComponent: FaTruckMoving, color: "#0A66C2" },
      
      { title: "Machine Learning", logoComponent: GiBrain, color: "#3F51B5" },
      { title: "Performance Optimization", logoComponent: FaGaugeHigh, color: "#388E3C"},
      { title: "Responsive Design", logoComponent: FaMobile, color: "#009688" },
      { title: "SEO Optimization", logoComponent: FaSearchengin, color: "#FF5722" },
      { title: "Software Development", logoComponent: FaLaptopCode, color: "#607D8B" },
      { title: "Test Automation", logoComponent: FaRobot, color: "#9C27B0" },
      { title: "Version Control", logoComponent: FaCodeBranch, color: "#4CAF50"},
    ],
  },
];
