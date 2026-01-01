import React, { useState } from "react";
import { motion } from "framer-motion";
import "./Certificates.css";

const CERTS = {
  tech: [
    {
      title: "AI Developer - (Intern Summer of AI)",
      org: "ViswamAI",
      date: "2025",
      img: "/certs/viswamai.png",
    },
    {
      title: "Artificial Intelligence Fundamentals",
      org: "IBM SkillsBuild",
      date: "2025",
      img: "/certs/ibm-1.png",
    },
    {
      title: "AI Vector Search",
      org: "Oracle",
      date: "2025",
      img: "/certs/AI-VEC.jpg",
    },
    {
      title: "Oracle AI Foundations Associate",
      org: "Oracle",
      date: "2025",
      img: "/certs/AIFA.jpg",
    },
    {
      title: "Data Science",
      org: "Oracle",
      date: "2025",
      img: "/certs/DS.jpg",
    },
    {
      title: "Generative AI",
      org: "Oracle",
      date: "2025",
      img: "/certs/GEN-AI.jpg",
    },
    {
      title: "Agentic AI",
      org: "Great learning",
      date: "2025",
      img: "/certs/great-learning.png",
    },
  ],

  other: [
    {
      title: "Deloitte STEM Virtual Experience",
      org: "Deloitte",
      date: "2025",
      img: "/certs/deloitte.png",
    },
    {
      title: "Walmart Advanced Software Engineering",
      org: "Walmart",
      date: "2025",
      img: "/certs/walmart.png",
    },
    {
      title: "Zignasa 2K24 National Hackathon (24 hrs)",
      org: "Zignasa",
      date: "2024",
      img: "/certs/zignasa.png",
    },
    {
      title: "Web Development",
      org: "Training Program",
      date: "2024",
      img: "/certs/webdev.png",
    },
  ],
};

export default function Certificates() {
  const [tab, setTab] = useState("tech");

  return (
    <section id="certificates" className="cert-section">
      <motion.div
        className="cert-wrapper"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="cert-title">
          <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Certificates
          </span>
        </h2>

        <p className="cert-subtitle">
          Verified certifications & achievements.
        </p>

        {/* Tabs */}
        <div className="cert-tabs">
          <button
            className={`cert-tab ${tab === "tech" ? "active" : ""}`}
            onClick={() => setTab("tech")}
          >
            Technical
          </button>
          <button
            className={`cert-tab ${tab === "other" ? "active" : ""}`}
            onClick={() => setTab("other")}
          >
            Other
          </button>
        </div>

        {/* Grid */}
        <div className="certs-grid">
          {CERTS[tab].map((c, i) => (
            <motion.div
              key={i}
              className="cert-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <img src={c.img} alt={c.title} className="cert-img" />
              <strong>{c.title}</strong>
              <span className="cert-meta">
                {c.org} • {c.date}
              </span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
