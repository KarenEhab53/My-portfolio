import React from "react";
import img1 from "../assets/doctor-appointment.jpg";
import img2 from "../assets/E-commerce.jpg";
import img3 from "../assets/travel.jpg";
import img4 from "../assets/handmade.jpg";
import img5 from "../assets/graduation.png"
import img6 from "../assets/restaurant.jpg"
import img7 from "../assets/ecommerce.jpg"
import { motion } from "framer-motion";

const projectData = [
  {
    image: img1,
  title: "Appointment Application",
  description: "A complete appointment booking system with user/doctor dashboards, availability slots, and profile management built with React and Context API.",
  technologies: ["React", "Context API", "CSS", "React Router"],
  demo: "https://appointmrnt-h28g.vercel.app/",
  github: "https://github.com/KarenEhab53/appointment-application",
  },
  
   {
  image: img2,
  title: "Users & Products Dashboard",
  description: "A simple landing page, React web app that displays users and their products using Context API for global state management.",
  technologies: ["React", "Context API", "CSS"],
  demo: "https://context-api-in-users-products.vercel.app/",
  github: "https://github.com/KarenEhab53/context-api-in-users-products",
}
,
  {
    image: img3,
    title: "Travel",
    description: "A landing responsive web page for booking travel packages using React and SASS",
    technologies: ["React", "SASS"],
      github: "https://github.com/KarenEhab53/travel",

  },{
  image: img4, 
  title: "Handmade Store",
  description: "An e-commerce front-end for showcasing and promoting handmade products, designed with responsive layout and checkout functionality.",
  technologies: ["React", "Context API", "CSS"],
  github: "https://github.com/KarenEhab53/Handmade",
}
,{
  image: img5, 
  title: "Graduation Project – Swift Savers",
  description: "A full-stack medical system for managing doctor and patient interactions, including appointment scheduling, profiles,emergency system , and real-time updates.",
  technologies: ["React", "Context API","CSS"],
  github: "https://github.com/johnsame1/Graduation-Project",
}

,
  {
  image: img6, 
  title: "Restaurant Bistro",
  description: "A visually appealing restaurant website featuring a menu, booking section, and responsive design built with React.",
  technologies: ["React", "CSS", "React Router","Context API"],
  demo: "https://bistro-wheat.vercel.app/",
  github: "https://github.com/KarenEhab53/restaurant-bistro",
}
,{
    image: img7, // 🆕 your uploaded ecommerce screenshot
    title: "E-Commerce Dropshipping Platform",
    description: "A professional landing page for a dropshipping service platform specialized in global e-commerce trading.",
    technologies: ["React", "CSS"],
    demo: "https://ecomerce-egy.vercel.app/",
  }
];

const ScrollReveal = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      {children}
    </motion.div>
  );
};

const ProjectCard = ({ project }) => {
  return (
    <ScrollReveal>
      <div className="flex flex-col items-center gap-8 md:flex-row md:gap-24">
        <img
          src={project.image}
          alt={project.title}
          className="w-full cursor-pointer rounded-2xl transition-all duration-300 hover:scale-105 md:w-[300px]"
        />
        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-3">
            <div className="text-xl font-semibold">{project.title}</div>
            <p className="text-gray-400">{project.description}</p>
          </div>

          <div className="flex flex-wrap gap-5">
            {project.technologies.map((tech, index) => (
              <span key={index} className="rounded-lg bg-black p-3 text-white">
                {tech}
              </span>
            ))}
          </div>

          {/* 💡 New: Project Links */}
          <div className="flex gap-4 mt-2">
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-md bg-green-600 px-4 py-2 text-sm text-white hover:bg-green-700 transition"
              >
                Live Demo
              </a>
            )}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-md bg-gray-700 px-4 py-2 text-sm text-white hover:bg-gray-800 transition"
              >
                GitHub
              </a>
            )}
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
};
const Projects = () => {
  return (
    <div
      id="project"
      className="flex min-h-screen w-full flex-col items-center justify-center gap-16 p-4 md:px-14 md:py-24"
    >
      <ScrollReveal>
        <h1 className="text-4xl font-light text-white md:text-6xl">My Projects</h1>
      </ScrollReveal>
      <div className="flex w-full max-w-[1000px] flex-col gap-16 text-white">
        {projectData.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
