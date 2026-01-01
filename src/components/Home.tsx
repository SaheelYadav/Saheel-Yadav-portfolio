import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import "./Home.css";

const githubLogo = "/github.png";
const linkedinLogo = "/linkedin.png";
const gmailLogo = "/gmail.png";
const whatsappLogo = "/whatsapp.png";

interface HeroProps {
  theme: "light" | "dark";
}

export function Home({ theme }: HeroProps) {
  const roles = [
    "AI & Machine Learning Engineer",
    "Fraud Detection Specialist",
    "Generative AI Developer",
    "Explainable AI Practitioner",
  ];

  const connectLinks = [
    {
      img: linkedinLogo,
      link: "https://www.linkedin.com/in/saheel-yadav-ai-ml",
    },
    {
      img: gmailLogo,
      link: "mailto:saheelyadav67@gmail.com",
    },
    {
      img: whatsappLogo,
      link: "https://wa.me/917794028842",
    },
  ];

  const workLinks = [
    {
      img: githubLogo,
      link: "https://github.com/SaheelYadav",
    },
  ];

  const [typedRoles, setTypedRoles] = useState("");

  const rolesText =
    "AI & Machine Learning Engineer | Fraud Detection | Generative AI | Explainable AI";

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setTypedRoles(rolesText.slice(0, i + 1));
      i++;
      if (i === rolesText.length) clearInterval(interval);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, when: "beforeChildren" },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 80 },
    },
  };

  return (
    <section id="home" className="hero">
      <div
        className="hero-bg"
        style={{
          backgroundImage: `url(${theme === "light" ? "/Hero-light.jpg" : "/Hero-dark.jpg"})`,
        }}
      />

      <motion.div
        className="hero-content"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1 className="hero-name" variants={itemVariants}>
          Hi! I’m <br />
          <span className="gradient-text hero-name-line">
            SAHEEL YADAV
          </span>
          <motion.div className="hero-line" variants={itemVariants} />
        </motion.h1>

        <motion.p
          className="hero-intro typing-effect"
          variants={itemVariants}
        >
          {typedRoles}
        </motion.p>

        <motion.p className="hero-intro" variants={itemVariants}>
          Building real-world, explainable, and reliable AI systems.
          <br />
          Specializing in fraud detection, machine learning, and generative AI.
        </motion.p>

        <motion.div className="hero-roles" variants={itemVariants}>
          {roles.map((r, i) => (
            <motion.div
              key={i}
              className="role-tag"
              variants={itemVariants}
            >
              {r}
            </motion.div>
          ))}
        </motion.div>

        <motion.div className="hero-socials" variants={itemVariants}>
          <div className="social-group">
            <h5>Connect with me</h5>
            <div className="social-icons">
              {connectLinks.map((s, i) => (
                <motion.a
                  key={i}
                  href={s.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2 }}
                >
                  <img src={s.img} className="social-icon" alt="" />
                </motion.a>
              ))}
            </div>
          </div>

          <div className="social-group">
            <h5>My Work</h5>
            <div className="social-icons">
              {workLinks.map((s, i) => (
                <motion.a
                  key={i}
                  href={s.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2 }}
                >
                  <img src={s.img} className="social-icon" alt="" />
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          className="hero-arrow"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ArrowDown size={28} />
        </motion.div>
      </motion.div>
    </section>
  );
}
