import { motion } from "framer-motion";

const educationData = [
  {
    title: "B.E in Electronics & Telecommunication",
    institute: "PES Modern College of Engineering Pune",
    duration: "2022 - 2026",
    description: "Focused on software engineering, DSA, DBMS, and IoT systems.",
  },
  {
    title: "HSC - Science",
    institute: "S.S.D Higher Secondary Education",
    duration: "2021 - 2022",
    description: "Completed with 82.33% in PCM stream, strong fundamentals in Physics & Math.",
  },
  {
    title: "SSC - High School",
    institute: "Nutan Primary School",
    duration: "2019 - 2020",
    description: "Graduated with 80%, introduced to basic computing concepts.",
  },
];

const fadeInVariant = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
};

export const Education = () => {
  return (
    <section className="education-section" id="education">
      <motion.h2
        className="section-title"
        initial="initial"
        whileInView="whileInView"
        viewport={{ once: true }}
        variants={fadeInVariant}
        transition={fadeInVariant.transition}
      >
        🎓 Education Timeline
      </motion.h2>

      <div className="alt-timeline">
        {educationData.map((edu, idx) => (
          <motion.div
            key={idx}
            className={`alt-item ${idx % 2 === 0 ? "left" : "right"}`}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInVariant}
            transition={fadeInVariant.transition}
          >
            <motion.div className="content-box" whileHover={{ scale: 1.02 }}>
              <h3>{edu.title}</h3>
              <h4>{edu.institute}</h4>
              <span>{edu.duration}</span>
              <p>{edu.description}</p>
            </motion.div>
            <motion.div className="circle" />
          </motion.div>
        ))}
        <div className="alt-line" />
      </div>
    </section>
  );
};
