import { useState, useEffect } from "react";
import IntroVideo from "./components/IntroVideo";
import { Navbar } from "./components/Navbar";
import { FloatingNav } from "./components/FloatingNav";
import { Home } from "./components/Home";
import { About } from "./components/About";
import { Experience} from "./components/Experience";
import Projects from "./components/Projects";
import { Skills } from "./components/Skills";
import Certificates from "./components/Certificates";
import { Resume } from "./components/Resume";
import { Contact } from "./components/Contact";
import { ThemeToggle } from "./components/ThemeToggle";

export default function App() {
  const [theme, setTheme] = useState<"light" | "dark">("dark");
  const [introDone, setIntroDone] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  return (
    <div className="bg-white dark:bg-black min-h-screen">
      <Navbar />
      <FloatingNav />
      <ThemeToggle theme={theme} setTheme={setTheme} />

      {!introDone && <IntroVideo onFinish={() => setIntroDone(true)} />}

      {introDone && (
        <>
          <Home theme={theme} />
          <About />
          <Experience/>
          <Projects />
          <Skills />
          <Resume />
          <Certificates />
          <Contact />
        </>
      )}
    </div>
  );
}
