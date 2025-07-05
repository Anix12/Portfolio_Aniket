import { motion } from "framer-motion";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export const Projects = () => {
  return (
    <motion.section
      id="projects"
      className="projects"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <motion.h2
        variants={fadeInUp}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        My Projects
      </motion.h2>
      <motion.div
        className="project-grid"
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        <motion.div
          className="project-card"
          variants={fadeInUp}
          whileHover={{ y: -10, transition: { duration: 0.2 } }}
        >
          <motion.div
            className="project-image"
            style={{ backgroundImage: "url('/projects/Freelancer.jpg')" }}
            whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
          />
          <h3> Freelancer Hub</h3>
          <p>
            A dynamic freelancer marketplace platform powered by the MERN stack, featuring job listings, user authentication, job applications, and real-time updates for seamless project management.
          </p>
          <div className="project-tech">
            <span>Ejs</span>
            <span>Node.js</span>
            <span>MongoDB</span>
            <span>TailwindCSS</span>
          </div>
          <div className="project-buttons">
            {/* <a href="https://your-live-demo-link.com" target="_blank" rel="noopener noreferrer">
              Live Demo
            </a> */}
            <a href="https://github.com/Anix12/FreelancerHub" target="_blank" rel="noopener noreferrer">
              GitHub Link
            </a>
          </div>
        </motion.div>

        <motion.div
          className="project-card"
          variants={fadeInUp}
          whileHover={{ y: -10, transition: { duration: 0.2 } }}
        >
          <motion.div
            className="project-image"
            style={{
              backgroundImage: "url('/projects/airbnb.png')",
            }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          />
          <h3>Wanderlust clone</h3>
          <p>
            A full-featured Airbnb-inspired web app using MongoDB, Express, Node.js, EJS, and Render. Includes listing creation, single-property pages, and secure booking-like interactions.
          </p>
          <div className="project-tech">
            <span>Ejs templet</span>
            <span>Node.js</span>
            <span>Bootstrap</span>
            <span>MongoDB</span>
          </div>
          <div className="project-buttons">
            <a href="https://wanderlust-tjf3.onrender.com/listings" target="_blank" rel="noopener noreferrer">
              Live Demo
            </a>
            <a href="https://github.com/Anix12/Wanderlust" target="_blank" rel="noopener noreferrer">
              GitHub Link
            </a>
          </div>
        </motion.div>

        <motion.div
          className="project-card"
          variants={fadeInUp}
          whileHover={{ y: -10, transition: { duration: 0.2 } }}
        >
          <motion.div
            className="project-image"
            style={{
              backgroundImage: "url('/projects/UrlShortner.png')",
            }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          />
          <h3>Url Shortner </h3>
          <p>
            A sleek and responsive URL shortener built with the MERN stack, offering custom short links, click analytics, and user authentication for managing URLs effectively.
          </p>
          <div className="project-tech">
            <span>React</span>
            <span>Node.js</span>
            <span>TailwindCSS</span>
            <span>MongoDB</span>
          </div>
          <div className="project-buttons">
            <a href="https://url-shortner-ochre-phi.vercel.app/" target="_blank" rel="noopener noreferrer">
              Live Demo
            </a>
            <a href="https://github.com/Anix12/Url-Shortner" target="_blank" rel="noopener noreferrer">
              GitHub Link
            </a>
          </div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};
