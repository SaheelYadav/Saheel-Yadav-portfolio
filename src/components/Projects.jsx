import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import "./Projects.css";

const PROJECTS = [
  {
    title: "💳 AI-Powered Transaction Fraud Detection System",
    desc: "Real-time fraud detection using machine learning, graph analysis, and explainable AI.",
    ss: "/fraud-detection.jpg",
    tech: ["Python", "Machine Learning", "SHAP"],
    /*live: "#",*/
    code: "https://github.com/SaheelYadav/AI-Powered-Transaction-Fraud-Detection-System",
  },
  {
    title: "📄 ChaturGPT – Document Q&A System",
    desc: "AI-powered PDF summarization and question answering system using NLP.",
    ss: "/ChaturGpt.jpg",
    tech: ["Python", "NLP", "Streamlit"],
    /*live: "#",*/
    code: "https://github.com/SaheelYadav/ChaturGPT-Multilingual-Document-Q-A-App",
  },
  {
    title: "🛡️ Network Intrusion Detection System",
    desc: "ML-based system to detect malicious network traffic using NSL-KDD dataset.",
    ss: "/Nids.jpg",
    tech: ["Python", "Machine Learning", "Cybersecurity"],
    /*live: "#",*/
    code: "https://github.com/SaheelYadav/AI-ML-Based-Network-Intrusion-Detection-System",
  },
  {
    title: "📸 Face Recognition Attendance System",
    desc: "Face recognition based automated attendance system using computer vision.",
    ss: "/facerecognition.jpg",
    tech: ["Python", "OpenCV"],
    /*live: "#",*/
    code: "https://github.com/SaheelYadav/Face-Recognition",
  },
];

export default function Projects({ theme }) {
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, margin: "-20% 0px" });

  return (
    <motion.section
      ref={sectionRef}
      className="projects-container"
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      id="projects"
    >
      <motion.div
        className="projects-card"
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.18 } },
        }}
      >
        <motion.h2
          initial={{ x: -200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="projects-title"
        >
          🚀 My <span className="proj">Projects</span>
        </motion.h2>

        <motion.p
          className="projects-subtitle"
          variants={{
            hidden: { opacity: 0, y: 10 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
          }}
        >
          Real-world AI and Machine Learning projects.
        </motion.p>

        <div className="projects-grid">
          {PROJECTS.map((p, idx) => (
            <motion.div
              key={idx}
              className="project-card"
              variants={{
                hidden: { opacity: 0, y: 40, scale: 0.9 },
                visible: {
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: {
                    duration: 0.45,
                    ease: "easeOut",
                    delay: idx * 0.1,
                  },
                },
              }}
              whileHover={{ scale: 1.04 }}
            >
              <div className="project-image-wrapper">
                <img src={p.ss} alt={p.title} className="project-image" />
              </div>

              <div className="project-content">
                <h3 className="project-heading">{p.title}</h3>
                <p className="project-desc">{p.desc}</p>

                <div className="project-tech">
                  {p.tech.map((t) => (
                    <span key={t} className="tech-badge">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="project-links">
                  <a href={p.code} target="_blank" className="code-btn">
                    <Github size={14} /> Code
                  </a>
                  <a href={p.live} target="_blank" className="live-btn">
                    <ExternalLink size={14} /> Live
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.section>
  );
}
