import { useEffect, useRef, useState } from "react";
import "./Experience.css";

export function Experience() {
  const lineRef1 = useRef<HTMLDivElement>(null);
  const lineRef2 = useRef<HTMLDivElement>(null);
  const dotsRef = useRef<HTMLSpanElement[]>([]);

  const [fill1, setFill1] = useState(0);
  const [fill2, setFill2] = useState(0);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  useEffect(() => {
    const onScroll = () => {
      const vh = window.innerHeight;

      const handleFill = (
        ref: React.RefObject<HTMLDivElement>,
        setter: (v: number) => void
      ) => {
        if (!ref.current) return;
        const rect = ref.current.getBoundingClientRect();
        const progress = Math.min(
          Math.max((vh - rect.top) / rect.height, 0),
          1
        );
        setter(progress);
      };

      handleFill(lineRef1, setFill1);
      handleFill(lineRef2, setFill2);

      dotsRef.current.forEach((dot, index) => {
        const rect = dot.getBoundingClientRect();
        if (rect.top < vh * 0.6 && rect.bottom > vh * 0.4) {
          setActiveIndex(index);
        }
      });
    };

    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const Dot = ({ i }: { i: number }) => (
    <span
      ref={(el) => {
        if (el) dotsRef.current[i] = el;
      }}
      className={`timeline-dot ${activeIndex === i ? "active" : ""}`}
    />
  );

  return (
    <section id="experience" className="experience-section">

      <h2 className="experience-heading">
        My <span>Experience</span>
      </h2>

      {/* ================= AI INTERN ================= */}
      <div className="experience-block">

        <div className="experience-title-glass">
          <h3>AI Developer Intern </h3>
          <h3> Summer of AI (Swecha / ViswamAI)</h3>
          <p>May 2025 – Jun 2025</p>
        </div>

        <div className="timeline-container">
          <div className="timeline-line stop">
            <div
              ref={lineRef1}
              className="timeline-fill"
              style={{ height: `${fill1 * 100}%` }}
            />
          </div>

          <div className="timeline-item left">
            <Dot i={0} />
            <div className={`experience-card ${activeIndex === 0 ? "active" : ""}`}>
              Worked on understanding real-world AI problem statements and
              user-facing NLP applications.
            </div>
          </div>

          <div className="timeline-item right">
            <Dot i={1} />
            <div className={`experience-card ${activeIndex === 1 ? "active" : ""}`}>
              Built strong foundations in NLP pipelines, preprocessing,
              vectorization, model training, and evaluation.
            </div>
          </div>

          <div className="timeline-item left">
            <Dot i={2} />
            <div className={`experience-card ${activeIndex === 2 ? "active" : ""}`}>
              Explored collaborative AI workflows, prompt engineering, and
              iterative experimentation practices.
            </div>
          </div>

          <div className="timeline-item right">
            <Dot i={3} />
            <div className={`experience-card highlight ${activeIndex === 3 ? "active" : ""}`}>
              Built <strong>ChaturGPT</strong>, an AI-powered PDF summarization and
              question-answering system using GenAI workflows.
            </div>
          </div>
        </div>
      </div>

      {/* ================= DATA ASSOCIATE ================= */}
      <div className="experience-block">

        <div className="experience-title-glass">
          <h3>Data Associate L1 Intern </h3>          <h3>Infotact Solutions</h3>
          <p>Nov 2025 – Jan 2026</p>
        </div>

        <div className="timeline-container">
          <div className="timeline-line">
            <div
              ref={lineRef2}
              className="timeline-fill"
              style={{ height: `${fill2 * 100}%` }}
            />
          </div>

          <div className="timeline-item left">
            <Dot i={4} />
            <div className={`experience-card ${activeIndex === 4 ? "active" : ""}`}>
              Worked on real-world datasets involving data cleaning,
              preprocessing, EDA, and feature engineering.
            </div>
          </div>

          <div className="timeline-item right">
            <Dot i={5} />
            <div className={`experience-card ${activeIndex === 5 ? "active" : ""}`}>
              Evaluated machine learning models and applied Explainable AI (XAI)
              techniques.
            </div>
          </div>

          <div className="timeline-item left">
            <Dot i={6} />
            <div className={`experience-card ${activeIndex === 6 ? "active" : ""}`}>
              Improved reproducibility, documentation, and production-readiness
              of ML workflows.
            </div>
          </div>

          {/* ✅ 4th CARD (RESTORED + FINAL) */}
          <div className="timeline-item right">
            <Dot i={7} />
            <div className={`experience-card highlight ${activeIndex === 7 ? "active" : ""}`}>
              Actively contributing to an AI-powered{" "}
              <strong>Transaction Fraud Detection System</strong>, focusing on
              anomaly detection and real-time analysis.
            </div>
          </div>

          <div className="timeline-ongoing">Ongoing</div>
        </div>
      </div>

    </section>
  );
}
