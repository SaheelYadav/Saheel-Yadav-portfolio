import { motion } from "motion/react";
import {
  Mail,
  MapPin,
  Github,
  Linkedin,
  MessageCircle,
} from "lucide-react";

export function Contact() {
  const contactInfo = [
    { icon: Mail, label: "Email", value: "saheelyadav67@gmail.com" },
    { icon: MapPin, label: "Location", value: "Hyderabad, India" },
  ];

  const quickLinks = [
    { icon: Github, url: "https://github.com/SaheelYadav" },
    { icon: Linkedin, url: "https://www.linkedin.com/in/saheel-yadav-ai-ml" },
    { icon: Mail, url: "mailto:saheelyadav67@gmail.com" },
    { icon: MessageCircle, url: "https://wa.me/917794028842" },
  ];

  return (
    <section id="contact" className="relative min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* TITLE */}
        <motion.h2
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl text-gray-900 dark:text-white mb-12 
                     lg:text-right lg:pr-6"
        >
          Get In{" "}
          <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Touch
          </span>
        </motion.h2>

        <div className="grid lg:grid-cols-2 gap-12 items-start">

          {/* LEFT SECTION */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl dark:text-white mb-6">
              Let’s Connect & Collaborate 🤝
            </h3>

            <p className="text-gray-600 dark:text-white/70 mb-8">
              Interested in AI, Machine Learning, or real-world projects?
              Feel free to reach out — I’m always open to opportunities.
            </p>

            {/* CONTACT INFO */}
            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ x: -40, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-4 bg-white/50 dark:bg-white/5
                             backdrop-blur-xl border border-gray-300 dark:border-white/10
                             rounded-xl p-4"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-gray-600 dark:text-white/60 text-sm">
                      {item.label}
                    </p>
                    <p className="text-gray-900 dark:text-white">
                      {item.value}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* SOCIAL ICONS */}
            <div className="flex gap-6 mt-12">
              {quickLinks.map((item, index) => (
                <motion.a
                  key={index}
                  href={item.url}
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ scale: 1.15 }}
                  className="w-12 h-12 flex items-center justify-center rounded-xl
                             bg-white/50 dark:bg-white/5
                             border border-gray-300 dark:border-white/10"
                >
                  <item.icon className="text-blue-500 dark:text-blue-400 w-6 h-6" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* RIGHT CARD */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="flex justify-center lg:justify-end"
          >
            <div className="p-12 rounded-2xl bg-white/60 dark:bg-white/5
                            border border-gray-300 dark:border-white/10
                            text-center max-w-md w-full">
              <h4 className="text-2xl dark:text-white mb-4">
                Open for Opportunities 🚀
              </h4>
              <p className="text-gray-700 dark:text-white/70">
                AI • Machine Learning • Data Science • Applied AI Systems
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
