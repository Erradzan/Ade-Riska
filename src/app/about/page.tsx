'use client';

import { motion } from 'framer-motion';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import Image from 'next/image';
import ModalPDF from "@/components/modalpdf";
import {
  FaFileWord,
  FaFileExcel,
  FaFilePowerpoint,
  FaShareAlt,
  FaPhotoVideo,
  FaDesktop,
  FaBrain,
  FaSearch,
  FaLanguage,
} from 'react-icons/fa';

export default function AboutPage() {
  return (
    <motion.div
      className="relative isolate flex min-h-screen flex-col overflow-hidden bg-[#050505] pt-40 pb-20 text-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7 }}
    >
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,#29200c_0%,#100e09_28%,#050505_70%)]" />

        <motion.div
          className="absolute -top-32 left-[10%] h-80 w-80 rounded-full bg-[#b8860b]/10 blur-[120px]"
          animate={{
            x: [0, 60, -20, 0],
            y: [0, 40, 80, 0],
            scale: [1, 1.15, 0.9, 1],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />

        <motion.div
          className="absolute right-[-5%] top-[35%] h-96 w-96 rounded-full bg-[#d4a843]/[0.07] blur-[130px]"
          animate={{
            x: [0, -70, 20, 0],
            y: [0, 50, -30, 0],
            scale: [1, 0.9, 1.1, 1],
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />

        <motion.div
          className="absolute left-0 right-0 top-[30%] h-px bg-gradient-to-r from-transparent via-[#c9a24a]/20 to-transparent"
          animate={{ opacity: [0.15, 0.5, 0.15] }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />

        {Array.from({ length: 24 }).map((_, i) => (
          <motion.span
            key={i}
            className="absolute h-1 w-1 rounded-full bg-[#d4af55]"
            style={{
              left: `${(i * 37 + 11) % 100}%`,
              top: `${(i * 53 + 7) % 100}%`,
              opacity: 0.25,
            }}
            animate={{
              y: [0, -15, 0],
              opacity: [0.12, 0.55, 0.12],
            }}
            transition={{
              duration: 4 + (i % 5),
              delay: (i % 7) * 0.4,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>

      <Navbar />

      <motion.main
        className="mx-auto flex w-full max-w-5xl flex-col items-center px-5 sm:px-8"
        initial={{ y: 25, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.15 }}
      >
        {/* Introduction */}
        <section className="w-full text-center">
          <motion.p
            className="mb-3 text-sm font-medium uppercase tracking-[0.35em] text-[#c9a24a]"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Get to know me
          </motion.p>

          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Who am I<span className="text-[#c9a24a]">?</span>
          </h1>

          <motion.div
            className="mx-auto mt-5 h-1 w-20 rounded-full bg-gradient-to-r from-[#80601b] via-[#e5c56b] to-[#80601b]"
            initial={{ width: 0 }}
            animate={{ width: 80 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          />

          <p className="mx-auto mt-8 max-w-3xl text-base leading-8 text-gray-300 sm:text-lg">
            I am a Bachelor of Human Resource Management graduate with
            experience in administration, customer service, inventory control,
            and retail operations. I am adaptable, detail-oriented, and
            comfortable working both independently and as part of a team.
            I am eager to continue learning, improve my skills, and contribute
            to a professional and collaborative work environment.
          </p>
        </section>

        {/* Education */}
        <section
          id="education"
          className="mt-24 grid w-full items-center gap-10 md:grid-cols-2"
        >
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
          >
            <div className="relative w-full max-w-sm">
              <div className="absolute -inset-3 rounded-2xl border border-[#c9a24a]/20" />

              <Image
                src="/support/Graduate.webp"
                alt="Education and professional career illustration"
                width={440}
                height={440}
                className="relative h-auto w-full rounded-2xl object-contain"
              />
            </div>
          </motion.div>

          
<motion.div
  initial={{ opacity: 0, x: 30 }}
  whileInView={{ opacity: 1, x: 0 }}
  viewport={{ once: true, amount: 0.2 }}
  transition={{ duration: 0.7 }}
>
  <p className="mb-2 text-sm font-semibold uppercase tracking-[0.25em] text-[#c9a24a]">
    Academic Background
  </p>

  <h2 className="mb-8 text-3xl font-bold sm:text-4xl">
    Education & Academic Documents
  </h2>

  <div className="relative overflow-hidden rounded-2xl border border-[#c9a24a]/20 bg-gradient-to-br from-[#17140d] via-[#0c0c0c] to-[#080808] p-6 sm:p-8">
    {/* Decorative accent */}
    <div className="absolute right-0 top-0 h-32 w-32 rounded-full bg-[#c9a24a]/[0.07] blur-3xl" />

    <div className="relative">
      <div className="mb-6 flex items-start gap-4">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-[#c9a24a]/30 bg-[#c9a24a]/10">
          <FaDesktop size={22} className="text-[#d8b75d]" />
        </div>

        <div className="min-w-0 flex-1">
          <p className="text-xl font-bold text-white sm:text-2xl">
            Universitas Pamulang
          </p>
          <p className="mt-2 leading-relaxed text-gray-300">
            Bachelor&apos;s Degree in Human Resource Management
          </p>
          <p className="mt-2 text-sm text-gray-500">
            July 2018 — December 2023
          </p>
        </div>
      </div>

      <div className="mb-6 flex items-center justify-between rounded-xl border border-white/[0.08] bg-white/[0.03] px-5 py-4">
        <div>
          <p className="text-xs font-medium uppercase tracking-widest text-gray-500">
            Grade Point Average
          </p>
          <p className="mt-1 text-sm text-gray-300">
            Cumulative GPA
          </p>
        </div>

        <div className="text-right">
          <span className="text-3xl font-bold tracking-tight text-[#d8b75d]">
            3.69
          </span>
          <span className="text-sm text-gray-500"> / 4.00</span>
        </div>
      </div>

      <div>
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-gray-500">
          Academic Documents
        </p>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          <ModalPDF
            buttonLabel="View Diploma"
            pdfUrl="/support/ijazah.pdf"
            title="Bachelor's Degree Diploma"
          />

          <ModalPDF
            buttonLabel="View Transcript"
            pdfUrl="/support/transkrip.pdf"
            title="Academic Transcript"
          />
        </div>
      </div>
    </div>
  </div>
</motion.div>

        </section>

        {/* Skills */}
        <section id="skills" className="mt-28 w-full">
          <motion.div
            className="mb-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-[#c9a24a]">
              What I bring
            </p>

            <h2 className="text-3xl font-bold sm:text-4xl">
              Skills & Expertise
            </h2>

            <p className="mx-auto mt-4 max-w-2xl leading-7 text-gray-400">
              Practical skills and personal strengths that support my work
              in administration, customer service, and daily operations.
            </p>
          </motion.div>

          <div className="grid gap-6 sm:grid-cols-2">
            {/* Computer skills */}
            <motion.div
              className="rounded-xl border border-white/10 bg-white/[0.03] p-6 transition-colors duration-300 hover:border-[#c9a24a]/40"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="mb-5 flex items-center gap-3">
                <div className="rounded-lg bg-[#c9a24a]/10 p-3 text-[#d8b75d]">
                  <FaDesktop size={22} />
                </div>
                <h3 className="text-xl font-semibold">Computer Skills</h3>
              </div>

              <div className="space-y-4">
                {[
                  {
                    icon: <FaFileWord />,
                    name: 'Microsoft Word',
                    level: 'Document preparation',
                  },
                  {
                    icon: <FaFileExcel />,
                    name: 'Microsoft Excel',
                    level: 'Data entry and spreadsheets',
                  },
                  {
                    icon: <FaFilePowerpoint />,
                    name: 'Microsoft PowerPoint',
                    level: 'Presentation preparation',
                  },
                  {
                    icon: <FaShareAlt />,
                    name: 'Social Media',
                    level: 'Content and platform management',
                  },
                  {
                    icon: <FaPhotoVideo />,
                    name: 'Photo & Video Editing',
                    level: 'Basic content production',
                  },
                  {
                    icon: <FaDesktop />,
                    name: 'DMS Software',
                    level: 'Document management systems',
                  },
                ].map((skill, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <span className="mt-1 text-[#c9a24a]">{skill.icon}</span>
                    <div>
                      <p className="font-medium text-gray-200">
                        {skill.name}
                      </p>
                      <p className="text-sm text-gray-500">{skill.level}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Problem solving */}
            {/* Professional & Soft Skills */}

{/* Professional & Soft Skills */}
<motion.div
  className="rounded-xl border border-white/10 bg-white/[0.03] p-6 transition-colors duration-300 hover:border-[#c9a24a]/40"
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.5, delay: 0.1 }}
>
  <div className="mb-5 flex items-center gap-3">
    <div className="rounded-lg bg-[#c9a24a]/10 p-3 text-[#d8b75d]">
      <FaBrain size={22} />
    </div>
    <h3 className="text-xl font-semibold">
      Professional & Soft Skills
    </h3>
  </div>

  <div className="space-y-4">
    {[
      {
        icon: <FaShareAlt />,
        title: "Customer Service & Complaint Handling",
        description:
          "Understanding customer needs, handling complaints, and providing appropriate solutions professionally.",
      },
      {
        icon: <FaLanguage />,
        title: "Communication & Teamwork",
        description:
          "Communicating clearly and working effectively with colleagues and customers.",
      },
      {
        icon: <FaSearch />,
        title: "Problem Solving",
        description:
          "Identifying issues, analyzing situations, and finding practical solutions.",
      },
      {
        icon: <FaDesktop />,
        title: "Time Management & Adaptability",
        description:
          "Prioritizing tasks, meeting deadlines, and adapting to changing work demands.",
      },
    ].map((skill, index) => (
      <div key={index} className="flex items-start gap-3">
        <span className="mt-1 text-[#c9a24a]">
          {skill.icon}
        </span>
        <div>
          <p className="font-medium text-gray-200">
            {skill.title}
          </p>
          <p className="mt-1 text-sm leading-6 text-gray-500">
            {skill.description}
          </p>
        </div>
      </div>
    ))}
  </div>
</motion.div>


            {/* Languages */}
            <motion.div
              className="rounded-xl border border-white/10 bg-white/[0.03] p-6 transition-colors duration-300 hover:border-[#c9a24a]/40 sm:col-span-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="mb-5 flex items-center gap-3">
                <div className="rounded-lg bg-[#c9a24a]/10 p-3 text-[#d8b75d]">
                  <FaLanguage size={22} />
                </div>
                <h3 className="text-xl font-semibold">Languages</h3>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <div className="mb-2 flex items-center justify-between">
                    <span className="font-medium text-gray-200">
                      Indonesian
                    </span>
                    <span className="text-sm text-[#d8b75d]">Native</span>
                  </div>
                  <div className="h-1.5 overflow-hidden rounded-full bg-white/10">
                    <motion.div
                      className="h-full rounded-full bg-gradient-to-r from-[#80601b] to-[#e5c56b]"
                      initial={{ width: 0 }}
                      whileInView={{ width: '100%' }}
                      viewport={{ once: true }}
                      transition={{ duration: 1 }}
                    />
                  </div>
                </div>

                <div>
                  <div className="mb-2 flex items-center justify-between">
                    <span className="font-medium text-gray-200">English</span>
                    <span className="text-sm text-[#d8b75d]">
                      Intermediate
                    </span>
                  </div>
                  <div className="h-1.5 overflow-hidden rounded-full bg-white/10">
                    <motion.div
                      className="h-full rounded-full bg-gradient-to-r from-[#80601b] to-[#e5c56b]"
                      initial={{ width: 0 }}
                      whileInView={{ width: '65%' }}
                      viewport={{ once: true }}
                      transition={{ duration: 1 }}
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>


        {/* Fun Facts */}
        <section id="fun-facts" className="mt-28 w-full">
          <motion.div
            className="mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-[#c9a24a]">
              Outside of work
            </p>

            <h2 className="text-3xl font-bold sm:text-4xl">Fun Facts</h2>
          </motion.div>

          <motion.ul
            className="space-y-4 text-base leading-8 text-gray-300 sm:text-lg"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <li>
              🥾 I enjoy hiking and have climbed Mount Rinjani, Merbabu, Prau,
              Ibu, Cisadon, and several other mountains.
            </li>
            <li>🐈 I have three cats: Liona, Bubu, and Oyen.</li>
          </motion.ul>
        </section>
      </motion.main>

      <div className="mt-24">
        <Footer />
      </div>
    </motion.div>
  );
}