import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = ["Home", "About","Experience", "Projects", "Skills","Certificates", "Resume", "Contact"];

  const scrollToSection = (item: string) => {
    const id = item.toLowerCase();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-3 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-white/90 dark:bg-black/80 backdrop-blur-xl border-b border-gray-200 dark:border-white/10"
            : "bg-transparent"
        }`}
      >
        <div className="relative w-full px-6 py-4 flex items-center justify-center">

          {/* LEFT: LOGO + NAME */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="absolute left-4 top-1/2 -translate-y-1/2 flex items-center gap-3"
          >
            {/* Logo */}
            <div className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shrink-0">
              <span className="text-white font-bold text-lg">SY</span>
            </div>

            {/* Name + Tagline */}
            <div className="flex flex-col leading-tight">
              <span className="text-gray-900 dark:text-white font-semibold text-base">
                Saheel Yadav
              </span>
              <span className="text-blue-500 dark:text-purple-300 text-xs font-medium">
                AI • ML Engineer
              </span>
            </div>
          </motion.div>

          {/* CENTER: Nav Links */}
          <div className="hidden md:flex justify-center gap-12">
            {navItems.map((item, idx) => (
              <motion.button
                key={item}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.05 }}
                onClick={() => scrollToSection(item)}
                className="text-gray-900 dark:text-white/80 hover:text-blue-500 dark:hover:text-purple-400 transition-colors text-lg font-semibold relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-600 group-hover:w-full transition-all duration-300" />
              </motion.button>
            ))}
          </div>

          {/* RIGHT: Mobile menu button */}
          <button
            className="md:hidden absolute right-4 top-1/2 -translate-y-1/2 text-gray-900 dark:text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, x: "100%" }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: "100%" }}
          className="fixed inset-0 z-40 bg-white dark:bg-black/95 backdrop-blur-xl md:hidden flex flex-col items-center justify-center gap-8"
        >
          {navItems.map((item, idx) => (
            <motion.button
              key={item}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.05 }}
              onClick={() => scrollToSection(item)}
              className="text-gray-900 dark:text-white text-2xl hover:text-blue-500 dark:hover:text-purple-400 transition-colors font-semibold"
            >
              {item}
            </motion.button>
          ))}
        </motion.div>
      )}
    </>
  );
}
