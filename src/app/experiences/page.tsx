
"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import {
  FaBriefcase,
  FaCar,
  FaClipboardCheck,
  FaFileInvoiceDollar,
  FaBoxes,
  FaGasPump,
  FaUserFriends,
  FaVideo,
  FaComments,
  FaRegHeart,
  FaHandsHelping,
  FaArrowRight,
  FaLightbulb,
} from "react-icons/fa";

const experienceGroups = [
  {
    title: "Professional Experience",
    subtitle: "Career journey & professional responsibilities",
    icon: <FaBriefcase />,
    experiences: [
      {
        company: "PT. Penta Artha Impressi",
        role: "Service Reception & Part Inventory Administration Control",
        period: "January 2020 – Present",
        category: "Automotive Industry",
        icon: <FaCar />,
        description:
          "Responsible for service reception, inventory administration, financial reporting, and supporting daily operational activities.",
        responsibilities: [
          {
            icon: <FaClipboardCheck />,
            title: "Service Reception",
            description:
              "Handle vehicle service reception and analyze customer complaints to support the service process.",
          },
          {
            icon: <FaFileInvoiceDollar />,
            title: "Financial Reporting",
            description:
              "Prepare daily omzet reports, petty cash reports, and bank statement reports while maintaining accurate documentation.",
          },
          {
            icon: <FaBoxes />,
            title: "Inventory Control",
            description:
              "Perform stock opname, manage Goods Receipt (GR), and support inventory administration and stock accuracy.",
          },
          {
            icon: <FaBriefcase />,
            title: "Administrative Operations",
            description:
              "Manage document archiving, prepare Purchase Requisitions (PR), process petty cash reimbursements and cash advice, and offer products through up-selling.",
          },
        ],
      },
      {
        company: "PT. Pertamina",
        role: "SPBU Operator",
        period: "July 2019 – January 2020",
        category: "Customer Service & Retail",
        icon: <FaGasPump />,
        description:
          "Supported fuel station operations by providing customer service and assisting with shift-based cash handling.",
        responsibilities: [
          {
            icon: <FaUserFriends />,
            title: "Customer Service",
            description:
              "Serve customers during fuel transactions and help maintain a smooth and professional service experience.",
          },
          {
            icon: <FaFileInvoiceDollar />,
            title: "Cash Reconciliation",
            description:
              "Count and reconcile cash during shift handovers to support accurate transaction records and accountability.",
          },
        ],
      },
    ],
  },
  {
    title: "Entrepreneurial Experience",
    subtitle: "Independent business & customer care",
    icon: <FaRegHeart />,
    experiences: [
      {
        company: "Ara Eyelash",
        role: "Freelance Eyelash Extension",
        period: "October 2025 – January 2026",
        category: "Entrepreneurship",
        icon: <FaRegHeart />,
        description:
          "Provided personalized eyelash extension services with a focus on customer consultation, comfort, and satisfaction.",
        responsibilities: [
          {
            icon: <FaComments />,
            title: "Customer Consultation",
            description:
              "Consulted with customers to determine eyelash styles that matched their needs and preferences.",
          },
          {
            icon: <FaHandsHelping />,
            title: "Customer Experience",
            description:
              "Maintained customer comfort and satisfaction throughout the service process.",
          },
          {
            icon: <FaUserFriends />,
            title: "Customer Relationships",
            description:
              "Built customer trust through friendly, attentive, and careful service.",
          },
          {
            icon: <FaRegHeart />,
            title: "Product Selection",
            description:
              "Selected suitable products based on each customer's condition and preferences.",
          },
        ],
      },
    ],
  },
  {
    title: "Organizational Experience",
    subtitle: "Teamwork, creativity & content production",
    icon: <FaVideo />,
    experiences: [
      {
        company: "Bella Adventure",
        role: "Team Content Creator",
        period: "December 2024 – Present",
        category: "Content & Social Media",
        icon: <FaVideo />,
        description:
          "Collaborated with the team to develop creative content and support social media audience engagement.",
        responsibilities: [
          {
            icon: <FaUserFriends />,
            title: "Content Collaboration",
            description:
              "Collaborated in planning and producing social media content.",
          },
          {
            icon: <FaVideo />,
            title: "Video Editing",
            description:
              "Managed video editing for publication on social media platforms.",
          },
          {
            icon: <FaLightbulb />,
            title: "Creative Development",
            description:
              "Contributed creative ideas to improve audience engagement.",
          },
        ],
      },
    ],
  },
];

export default function ProjectsPage() {
  return (
    <motion.div className="relative isolate flex min-h-screen flex-col overflow-hidden bg-[#050505] pt-32 text-white sm:pt-36">
      {/* Background: same visual style as Home */}

      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_50%_0%,#29200c_0%,#100e09_28%,#050505_70%)]" />

      {/* Gold glow - top left */}
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

      {/* Gold glow - bottom right */}
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

      {/* Floating gold particles */}
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
            x: [
              0,
              (i % 2 === 0 ? 1 : -1) * (10 + (i % 4) * 8),
              0,
            ],
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

      {/* Animated horizontal light */}
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

      {/* Animated orbital ring */}
      <motion.div
        className="pointer-events-none absolute -z-10 h-[600px] w-[600px] rounded-full border border-[#d4af37]/[0.07]"
        style={{
          top: "12%",
          left: "50%",
          translateX: "-50%",
        }}
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

      {/* Main Content */}
      <main className="relative mx-auto w-full max-w-5xl flex-1 px-5 pb-24 sm:px-8">
        {/* Hero */}
        <motion.header
          className="mb-20 pt-8 text-center"
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.35em] text-[#D4AF37]">
            Career Journey
          </p>

          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Work{" "}
            <span className="bg-gradient-to-r from-[#D4AF37] via-[#FFF0BE] to-[#B8860B] bg-clip-text text-transparent">
              Experience
            </span>
          </h1>

          <div className="mx-auto mt-6 h-1 w-20 rounded-full bg-gradient-to-r from-[#8F6B25] to-[#FFF0BE]" />

          <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-gray-400 sm:text-base">
            My journey across customer service, administration, inventory
            control, entrepreneurship, and creative collaboration. Each
            experience has helped me develop stronger communication,
            organizational, and problem-solving skills.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {[
              "Frontliner",
              "Administration",
              "Inventory Control",
              "Beauty Consultant",
              "Content Creator",
            ].map((item) => (
              <span
                key={item}
                className="rounded-full border border-[#8F6B25]/60 bg-white/[0.03] px-4 py-2 text-xs font-medium tracking-wide text-[#E8D9B5] transition-all duration-300 hover:border-[#D4AF37] hover:bg-[#D4AF37]/10 hover:text-[#D4AF37] sm:text-sm"
              >
                {item}
              </span>
            ))}
          </div>
        </motion.header>

        {/* Experience Sections */}
        <div className="space-y-20">
          {experienceGroups.map((group, groupIndex) => (
            <section key={group.title}>
              <motion.div
                className="mb-10 flex items-center gap-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6 }}
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-[#D4AF37]/30 bg-[#D4AF37]/10 text-xl text-[#D4AF37]">
                  {group.icon}
                </div>

                <div>
                  <h2 className="text-xl font-bold sm:text-2xl">
                    {group.title}
                  </h2>
                  <p className="mt-1 text-sm text-gray-500">
                    {group.subtitle}
                  </p>
                </div>
              </motion.div>

              {/* Timeline */}
              <div className="relative space-y-8 before:absolute before:bottom-8 before:left-[19px] before:top-8 before:w-px before:bg-gradient-to-b before:from-[#D4AF37]/70 before:via-[#D4AF37]/30 before:to-transparent">
                {group.experiences.map((experience, index) => (
                  <motion.article
                    key={`${experience.company}-${experience.role}`}
                    className="relative pl-12"
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.1 }}
                    transition={{
                      duration: 0.6,
                      delay: index * 0.12 + groupIndex * 0.08,
                    }}
                  >
                    {/* Timeline Marker */}
                    <div className="absolute left-0 top-6 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-[#D4AF37]/50 bg-[#080704] text-[#D4AF37] shadow-[0_0_20px_rgba(212,175,55,0.08)]">
                      {experience.icon}
                    </div>

                    {/* Experience Card */}
                    <div className="rounded-2xl border border-[#8F6B25]/40 bg-white/[0.03] p-5 transition-all duration-300 hover:border-[#D4AF37]/80 hover:bg-[#D4AF37]/[0.04] sm:p-8">
                      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                        <div>
                          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.15em] text-[#D4AF37]">
                            {experience.category}
                          </p>

                          <h3 className="text-xl font-bold leading-snug sm:text-2xl">
                            {experience.company}
                          </h3>

                          <p className="mt-2 font-medium leading-6 text-[#E8D9B5]">
                            {experience.role}
                          </p>
                        </div>

                        <span className="w-fit shrink-0 rounded-full border border-[#8F6B25]/50 bg-black/30 px-3 py-2 text-xs text-gray-300">
                          {experience.period}
                        </span>
                      </div>

                      <p className="mt-5 text-sm leading-7 text-gray-400">
                        {experience.description}
                      </p>

                      <div className="my-6 h-px bg-gradient-to-r from-[#D4AF37]/30 via-white/10 to-transparent" />

                      <h4 className="mb-5 text-xs font-semibold uppercase tracking-[0.15em] text-gray-300">
                        Key Responsibilities
                      </h4>

                      <div className="space-y-5">
                        {experience.responsibilities.map((item) => (
                          <div
                            key={item.title}
                            className="flex items-start gap-4"
                          >
                            <div className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-[#D4AF37]/20 bg-[#D4AF37]/[0.07] text-sm text-[#D4AF37]">
                              {item.icon}
                            </div>

                            <div>
                              <h5 className="text-sm font-semibold text-gray-100">
                                {item.title}
                              </h5>

                              <p className="mt-1 text-sm leading-6 text-gray-400">
                                {item.description}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.article>
                ))}
              </div>
            </section>
          ))}
        </div>

        {/* Closing */}
        <motion.div
          className="mt-24 rounded-2xl border border-[#8F6B25]/40 bg-white/[0.03] p-6 text-center transition-colors duration-300 hover:border-[#D4AF37]/60 sm:p-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-[#D4AF37]">
            Looking Ahead
          </p>

          <h2 className="text-2xl font-bold sm:text-3xl">
            Ready for the Next Chapter
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-gray-400 sm:text-base">
            I look forward to applying my experience, developing new
            capabilities, and contributing to a team that values
            collaboration, customer satisfaction, and continuous improvement.
          </p>
        </motion.div>
      </main>

      <Footer />
    </motion.div>
  );
}
