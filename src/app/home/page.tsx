"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { FaReact, FaGitAlt, FaHtml5, FaCss3Alt } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiFramer, SiJavascript, SiPostman } from "react-icons/si";
import RunningImage from "@/components/runningimage";
import Image from "next/image";

export default function HomePage() {
  return (
    <motion.div
  className="relative isolate flex min-h-screen flex-col items-center justify-center overflow-hidden bg-[#050505] pt-40 pb-20"
>
  <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_50%_0%,#29200c_0%,#100e09_28%,#050505_70%)]" />

  <motion.div
    className="pointer-events-none absolute -z-10 h-[450px] w-[450px] rounded-full bg-[#c9a44c]/10 blur-[120px]"
    style={{ top: "-10%", left: "-10%" }}
    animate={{
      x: [0, 100, 30, 0],
      y: [0, 60, 120, 0],
      scale: [1, 1.2, 0.9, 1],
      opacity: [0.4, 0.8, 0.5, 0.4],
    }}
    transition={{
      duration: 18,
      repeat: Infinity,
      ease: "easeInOut",
    }}
  />

  <motion.div
    className="pointer-events-none absolute -z-10 h-[500px] w-[500px] rounded-full bg-[#8f6b25]/10 blur-[140px]"
    style={{ bottom: "0%", right: "-15%" }}
    animate={{
      x: [0, -100, -40, 0],
      y: [0, -100, -30, 0],
      scale: [1, 0.85, 1.15, 1],
      opacity: [0.3, 0.7, 0.4, 0.3],
    }}
    transition={{
      duration: 22,
      repeat: Infinity,
      ease: "easeInOut",
    }}
  />

  {Array.from({ length: 24 }).map((_, i) => (
    <motion.div
      key={i}
      className="pointer-events-none absolute -z-10 rounded-full bg-[#e4c778]"
      style={{
        width: i % 4 === 0 ? 3 : 2,
        height: i % 4 === 0 ? 3 : 2,
        left: `${(i * 37 + 11) % 100}%`,
        top: `${(i * 53 + 17) % 100}%`,
        boxShadow: "0 0 8px 1px rgba(212,175,55,0.35)",
      }}
      animate={{
        y: [0, -35 - (i % 5) * 12, 0],
        x: [0, (i % 2 === 0 ? 1 : -1) * (10 + (i % 4) * 8), 0],
        opacity: [0.15, 0.8, 0.2],
        scale: [0.8, 1.3, 0.8],
      }}
      transition={{
        duration: 4 + (i % 5) * 2,
        delay: (i % 7) * 0.6,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  ))}

  <motion.div
    className="pointer-events-none absolute -z-10 h-[1px] w-[80%] bg-gradient-to-r from-transparent via-[#d4af37]/30 to-transparent"
    style={{ top: "30%", left: "10%" }}
    animate={{
      opacity: [0.1, 0.65, 0.1],
      scaleX: [0.6, 1, 0.7],
      x: ["-5%", "5%", "-5%"],
    }}
    transition={{
      duration: 12,
      repeat: Infinity,
      ease: "easeInOut",
    }}
  />

  <motion.div
    className="pointer-events-none absolute -z-10 h-[600px] w-[600px] rounded-full border border-[#d4af37]/[0.07]"
    style={{ top: "12%", left: "50%", translateX: "-50%" }}
    animate={{ rotate: 360 }}
    transition={{
      duration: 90,
      repeat: Infinity,
      ease: "linear",
    }}
  >
    <div className="absolute left-[15%] top-[18%] h-1.5 w-1.5 rounded-full bg-[#e4c778]/70 shadow-[0_0_12px_3px_rgba(212,175,55,0.2)]" />
  </motion.div>

  <Navbar />

      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}     
        className="flex flex-col items-center w-auto"
      >
        <RunningImage />
        
        <motion.h1
          className="text-center text-3xl font-bold tracking-[0.02em] sm:text-4xl md:text-5xl lg:text-6xl"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
        >
          <span className="block text-lg font-normal tracking-normal text-gray-400 sm:text-xl md:text-2xl">
            Hi, my name is
          </span>

          <motion.span
            className="mt-2 block cursor-default bg-gradient-to-r from-[#D4AF37] via-[#FFF0BE] to-[#B8860B] bg-clip-text text-transparent"
            whileHover={{
              filter:
                "drop-shadow(0 0 4px rgba(255,223,120,0.9)) drop-shadow(0 0 12px rgba(212,175,55,0.8)) drop-shadow(0 0 25px rgba(212,175,55,0.5))",
            }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            Ade Riska Aulia
          </motion.span>
        </motion.h1>
        
        <div className="mt-6 flex max-w-4xl flex-wrap justify-center gap-3 px-4">
          {[
            "Frontliner",
            "Content Creator",
            "Inventory Control",
            "Beauty Consultant",
            "Administration",
            "Hiker",
          ].map((item) => (
            <span
              key={item}
              className="rounded-full border border-[#8F6B25]/60 bg-white/[0.03] px-4 py-2 text-xs font-medium tracking-wide text-[#E8D9B5] transition-all duration-300 hover:border-[#D4AF37] hover:bg-[#D4AF37]/10 hover:text-[#D4AF37] sm:text-sm"
            >
              {item}
            </span>
          ))}
        </div>
        
<div className="mt-12 mb-10 flex flex-col items-center gap-6">
  <motion.h2
    className="text-2xl font-bold tracking-wide bg-gradient-to-r from-[#B8860B] via-[#FFF0BE] to-[#D4AF37] bg-clip-text text-transparent md:text-3xl"
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7 }}
  >
    Download My CV
  </motion.h2>

  <div className="flex flex-wrap justify-center gap-4">
    <motion.a
      href="/support/ATS CV Ade Riska.pdf"
      download
      whileHover={{
        y: -3,
        boxShadow: "0 0 22px rgba(212,175,55,0.25)",
      }}
      whileTap={{ scale: 0.97 }}
      transition={{ duration: 0.25 }}
      className="group flex items-center gap-3 rounded-lg border border-[#8F6B25] bg-[#11100B] px-6 py-3 text-sm font-semibold tracking-wide text-[#E8D9B5] transition-colors duration-300 hover:border-[#F5DE9A] hover:bg-[#D4AF37]/10 sm:text-base"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="transition-transform duration-300 group-hover:translate-y-0.5"
      >
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
        <path d="m7 10 5 5 5-5" />
        <path d="M12 15V3" />
      </svg>
      <span>Download ATS CV</span>
    </motion.a>

    <motion.a
      href="/support/CV ADE RISKA.pdf"
      download
      whileHover={{
        y: -3,
        boxShadow: "0 0 22px rgba(212,175,55,0.25)",
      }}
      whileTap={{ scale: 0.97 }}
      transition={{ duration: 0.25 }}
      className="group flex items-center gap-3 rounded-lg border border-[#D4AF37] bg-gradient-to-r from-[#8F6B25] to-[#D4AF37] px-6 py-3 text-sm font-bold tracking-wide text-black transition-all duration-300 hover:from-[#F5DE9A] hover:to-[#D4AF37] sm:text-base"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="transition-transform duration-300 group-hover:translate-y-0.5"
      >
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
        <path d="m7 10 5 5 5-5" />
        <path d="M12 15V3" />
      </svg>
      <span>Download CV</span>
    </motion.a>
  </div>

  <p className="text-center text-xs tracking-wide text-gray-500">
    Available in PDF format
  </p>
</div>

        <section className="text-white text-center mt-20 max-w-4xl px-4">
          <h2 className="text-3xl font-bold mb-6">Skills</h2>
          
          <div className="flex flex-wrap justify-center gap-8">
            {[
              { icon: <FaReact />, title: "React.js" },
              { icon: <SiNextdotjs />, title: "Next.js" },
              { icon: <SiTailwindcss />, title: "Tailwind CSS" },
              { icon: <FaHtml5 />, title: "HTML5" },
              { icon: <FaCss3Alt />, title: "CSS3" },
              { icon: <SiJavascript />, title: "JavaScript" },
              { icon: <SiPostman />, title: "Postman" },
              { icon: <FaGitAlt />, title: "Git" },
              { icon: <SiFramer />, title: "Framer Motion" },
            ].map((skill, index) => (
              <div 
                key={index}
                className="relative w-24 h-24 flex flex-col items-center justify-center transition-transform transform hover:scale-110 group"
              >
                <div className="text-5xl flex items-center justify-center transition-all duration-300">
                  {skill.icon}
                </div>
                
                <p className="absolute bottom-0 translate-y-full text-xs text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {skill.title}
                </p>
                
                <div className="absolute inset-0 rounded-full border-2 border-white opacity-0 group-hover:opacity-100 group-hover:border-4 transition-all duration-300"></div>
              </div>
            ))}
          </div>
        </section>
        <section className="mt-20 text-center px-4 max-w-4xl">
          <motion.h2 
            className="text-3xl font-bold text-white mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Achieve Greatness Together
          </motion.h2>

          <motion.p 
            className="text-gray-300 mb-4 text-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Collaboration is one of the best tools for innovation. If we work together, we can build something truly amazing. Can not wait to hear from you.
          </motion.p>

          <motion.div 
            className="rounded-lg overflow-hidden shadow-lg mx-auto flex justify-center items-center max-w-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.8 }}
          >
            <Image
              src="/support/giphy.gif"
              alt="Teamwork GIF"
              width={320}
              height={240}
              className="w-80 h-auto justify-center items-center"
            />
          </motion.div>

          <motion.p 
            className="text-white font-semibold mt-16 mb-10 text-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            Thank you for visiting my portfolio.<br></br> If you have any questions or want to work together, please do not hesitate to contact me.
          </motion.p>

          <motion.p 
            className="text-white font-semibold mt-16 mb-10 text-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            Have a nice day!
          </motion.p>
        </section>
      </motion.div>
      <Footer />
    </motion.div>
  );
}