import { useEffect, useRef, useState } from "react";
import { Code, Timer, Cpu, Trophy } from "lucide-react";
import "./About.css";

export function About() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [titleVisible, setTitleVisible] = useState(false);
  const [infoVisible, setInfoVisible] = useState(false);
  const [extraVisible, setExtraVisible] = useState(false);
  const [hobbiesVisible, setHobbiesVisible] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);
  const infoRef = useRef<HTMLDivElement>(null);
  const extraRef = useRef<HTMLDivElement>(null);

  /* ===== TITLE REVEAL ===== */
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setTitleVisible(true),
      { threshold: 0.5 }
    );
    const intro = document.querySelector(".about-intro-screen");
    if (intro) observer.observe(intro);
    return () => observer.disconnect();
  }, []);

  /* ===== IMAGE SCROLL (POSITION ONLY, NO ZOOM) ===== */
  useEffect(() => {
    const NAVBAR_HEIGHT = 80;
    const IMAGE_STOP_OFFSET = 60;

    const handleScroll = () => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const scrolled = Math.max(
        0,
        NAVBAR_HEIGHT + IMAGE_STOP_OFFSET - rect.top
      );
      const progress = Math.min(scrolled / (window.innerHeight * 0.25), 1);
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* ===== WHO AM I REVEAL ===== */
  useEffect(() => {
    let triggered = false;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !triggered) {
          triggered = true;

          setTimeout(() => {
            setInfoVisible(true);

            setTimeout(() => {
              document
                .querySelector(".whoami-title")
                ?.classList.add("type");
            }, 200);
          }, 1000);
        }
      },
      { threshold: 0.7 }
    );

    if (infoRef.current) observer.observe(infoRef.current);
    return () => observer.disconnect();
  }, []);

  /* ===== EXTRA REVEAL ===== */
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setExtraVisible(true),
      { threshold: 0.3 }
    );
    if (extraRef.current) observer.observe(extraRef.current);
    return () => observer.disconnect();
  }, []);

  /* ===== HOBBIES REVEAL ===== */
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setHobbiesVisible(true),
      { threshold: 0.3 }
    );
    const el = document.querySelector(".about-hobbies");
    if (el) observer.observe(el);
    return () => observer.disconnect();
  }, []);

  /* ===== COUNTERS ===== */
  const counters = [
    { icon: Code, label: "Projects Completed", value: 7 },
    { icon: Timer, label: "Years in AI & ML", value: 2 },
    { icon: Cpu, label: "Core Technologies", value: 10 },
    { icon: Trophy, label: "Certifications", value: 6 },
  ];

  const [countValues, setCountValues] = useState(counters.map(() => 0));

  useEffect(() => {
    if (!extraVisible) return;

    counters.forEach((counter, index) => {
      let start = 0;
      const interval = setInterval(() => {
        start++;
        setCountValues((prev) => {
          const updated = [...prev];
          updated[index] = start;
          return updated;
        });
        if (start === counter.value) clearInterval(interval);
      }, 1200 / counter.value);
    });
  }, [extraVisible]);

  /* ===== FIXED IMAGE WIDTH (NO ZOOM) ===== */
  const IMAGE_WIDTH = "50%";

  const NAVBAR_HEIGHT = 80;

  const getImageTransform = () =>
    scrollProgress < 0.2
      ? `translateY(${100 - (scrollProgress / 0.2) * 100 + NAVBAR_HEIGHT}px)`
      : `translateY(${NAVBAR_HEIGHT}px)`;

  const getTextOpacity = () =>
    scrollProgress < 0.4
      ? 0
      : scrollProgress < 0.6
      ? (scrollProgress - 0.4) / 0.2
      : 1;

  return (
    <section id="about" className="about-wrapper">
      {/* INTRO TITLE */}
      <div className={`about-intro-screen ${titleVisible ? "show-title" : ""}`}>
        <h1>
          About <span className="grad">me?</span>
        </h1>
      </div>

      {/* MAIN SCROLL AREA */}
      <div ref={containerRef} className="about-scroll">
        <div className="about-sticky">
          {/* IMAGE */}
          <div
            className="about-image"
            style={{
              width: IMAGE_WIDTH,
              transform: getImageTransform(),
            }}
          >
            <img src="/saheel.jpg" alt="Saheel Yadav" />
          </div>

          {/* INFO PANEL */}
          <div
            ref={infoRef}
            className={`about-info ${infoVisible ? "info-show" : ""}`}
            style={{
              opacity: infoVisible ? getTextOpacity() : 0,
              width: infoVisible ? "50%" : "0%",
            }}
          >
            <div className="info-inner">
              <h2 className="whoami-title">
                <span>Who am I?</span>
              </h2>

              <p>
                I’m <strong>Saheel Yadav</strong>, an AI & Machine Learning
                Engineer focused on building real-world, explainable, and
                reliable intelligent systems.
              </p>

              <p>
                My work spans fraud detection, applied machine learning,
                cybersecurity, and generative AI — with strong emphasis on
                production-ready solutions.
              </p>

              <p>
                I’m currently pursuing my B.Tech in Computer Science and actively
                seeking opportunities in AI, ML, and applied data science roles.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* EXTRA SECTION */}
      <div
        ref={extraRef}
        className={`about-extra ${extraVisible ? "extra-show" : ""}`}
      >
        <div className="about-counters">
          {counters.map((c, i) => (
            <div key={i} className="counter-box">
              <c.icon size={42} className="counter-icon" />
              <h3>{countValues[i]}+</h3>
              <p>{c.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* HOBBIES */}
      <div
        className={`about-hobbies ${
          hobbiesVisible ? "hobbies-show" : "hobbies-hidden"
        }`}
      >
        <h2>Interests</h2>
        <div className="hobby-grid">
          <div className="hobby">🤖 Applied Machine Learning</div>
          <div className="hobby">🔐 Fraud Detection</div>
          <div className="hobby">📄 NLP & Generative AI</div>
          <div className="hobby">🚀 Scalable AI Systems</div>
        </div>
      </div>
    </section>
  );
}
