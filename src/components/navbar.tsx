
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const links = [
    { label: "Home", path: "/home" },
    { label: "About Me", path: "/about" },
    { label: "Work Experience", path: "/experiences" },
  ];

  const navigate = (path: string) => {
    setIsOpen(false);
    router.push(path);
  };

  return (
    <nav className="fixed top-0 left-0 z-50 w-full border-b border-white/[0.08] bg-black/70 backdrop-blur-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 sm:px-8">
        {/* Logo kiri */}
        <button
          onClick={() => navigate("/home")}
          aria-label="Go to home"
          className="rounded-lg transition-transform duration-300 hover:scale-105"
        >
          <img
            src="/support/logo.webp"
            alt="Portfolio logo"
            className="h-20 w-20 object-contain"
          />
        </button>

        {/* Tombol Explore kanan */}
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={isOpen}
          className="flex items-center gap-2 rounded-full border border-[#D9B875]/40 px-4 py-2 text-sm text-[#D9B875] transition-colors hover:border-[#D9B875] hover:bg-[#D9B875]/10"
          whileTap={{ scale: 0.96 }}
        >
          <span>{isOpen ? "Close" : "Explore"}</span>
          <motion.span
            animate={{ rotate: isOpen ? 45 : 0 }}
            transition={{ duration: 0.25 }}
            className="text-lg leading-none"
          >
            +
          </motion.span>
        </motion.button>
      </div>

      {/* Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="flex flex-col items-center gap-1 border-t border-white/[0.06] px-6 py-4">
              {links.map((link, index) => (
                <motion.button
                  key={link.path}
                  onClick={() => navigate(link.path)}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.07 }}
                  className="group flex w-full max-w-xs items-center justify-center gap-2 rounded-lg py-3 text-sm text-neutral-300 transition-colors hover:bg-white/[0.04] hover:text-[#D9B875]"
                >
                  <span>{link.label}</span>
                  <span className="text-[#D9B875] opacity-0 transition-opacity group-hover:opacity-100">
                    ↗
                  </span>
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
