import { motion } from "framer-motion";
import { Download, GraduationCap, Laptop, Layers } from "lucide-react";
import "./Resume.css";

export function Resume() {
  const fadeRight = {
    hidden: { opacity: 0, x: 80 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } },
  };

  const fadeLeft = {
    hidden: { opacity: 0, x: -80 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
  };

  return (
    <section id="resume" className="resume-section">
      <div className="resume-container">

        {/* TITLE */}
        <motion.h2
          variants={fadeRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="resume-title"
        >
          My{" "}
          <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Resume
          </span>
        </motion.h2>

        {/* DOWNLOAD BUTTON */}
        <motion.div
          variants={fadeRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="resume-download-top"
        >
          <a href="/resume_1_.pdf" download className="download-btn">
            <Download size={20} />
            Download Resume
          </a>
        </motion.div>

        {/* PROFILE BOX */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="profile-box"
        >
          <motion.h3 className="profile-name">
            Saheel Yadav
          </motion.h3>

          <motion.p className="profile-info">
            📚 B.Tech — Computer Science & Engineering<br />
            📍 Hyderabad, India<br />
            📩 saheelyadav67@gmail.com
          </motion.p>

          <motion.p className="profile-summary">
            AI & Machine Learning Engineer focused on building real-world,
            explainable, and production-ready intelligent systems.
            Experienced in fraud detection, NLP, graph-based ML, and
            applied AI solutions.
          </motion.p>
        </motion.div>

        {/* EDUCATION */}
        <motion.div
          variants={fadeLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="resume-section-block"
        >
          <div className="resume-heading">
            <div className="icon-box education-icon">
              <GraduationCap className="icon" />
            </div>
            <h3>Education</h3>
          </div>

          <div className="resume-list">
            {[
              {
                degree: "Bachelor of Technology (Computer Science)",
                school: "DRK Institute Of Science And Technology, Hyderabad",
                period: "2022 – 2026",
                detail: "GPA: 7.8 / 10",
              },
              {
                degree: "Intermediate School (PCM – CBSE)",
                school: "Children's Modern Academy, Dehradun",
                period: "2020 – 2022",
                detail: "GPA: 8.2 / 10",
              },
              {
                degree: "SSC – 10th Board",
                school: "C.M Academy High School, Hyderabad",
                period: "2020",
                detail: "GPA: 10 / 10",
              },
            ].map((edu, i) => (
              <motion.div key={i} className="resume-card">
                <h4>{edu.degree}</h4>
                <p className="resume-card-school">{edu.school}</p>
                <p className="resume-card-period">
                  {edu.period} — <span>{edu.detail}</span>
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* PROJECTS */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="resume-heading">
            <div className="icon-box project-icon">
              <Laptop className="icon" />
            </div>
            <h3>Projects</h3>
          </div>

          <ul className="project-list">
            {[
              "- AI-Powered Transaction Fraud Detection System",
              "- ChaturGPT – Document Q&A and PDF Summarization",
              "- Network Intrusion Detection System (NSL-KDD)",
              "- Face Recognition Based Attendance System",
              "- Smart Cart Predictor (Amazon Hackathon)",
            ].map((project, i) => (
              <motion.li key={i}>{project}</motion.li>
            ))}
          </ul>
        </motion.div>

        {/* SKILLS */}
        <motion.div
          variants={fadeRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="resume-skills"
        >
          <div className="resume-heading">
            <div className="icon-box skills-icon">
              <Layers className="icon" />
            </div>
            <h3>Skills</h3>
          </div>

          <div className="skill-tags">
            {[
              "Python",
              "C",
              "Java",
              "SQL",
              "Machine Learning",
              "Artificial Intelligence",
              "Deep Learning",
              "Explainable AI",
              "TensorFlow",
              "OpenCV",
              "Git & GitHub",
              "Jupyter Notebook",
              "VS Code",
              "NLP",
            ].map((skill) => (
              <span key={skill} className="skill-chip">
                {skill}
              </span>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
