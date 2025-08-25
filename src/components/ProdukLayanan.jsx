import React from "react";
import {
  WifiIcon,
  ComputerDesktopIcon,
  WrenchIcon,
} from "@heroicons/react/24/solid";
import { motion, useReducedMotion } from "framer-motion";

const cards = [
  {
    title: "Akses Internet",
    Icon: WifiIcon,
    desc:
      "Internet berkecepatan tinggi via fiber, radio, hingga VSAT. Stabil, fleksibel, dan cakupan nasional. " +
      "Layanan ini dirancang untuk memenuhi kebutuhan rumah, kantor, hingga perusahaan berskala besar dengan jaminan SLA yang jelas dan dukungan teknis 24/7.",
  },
  {
    title: "IT Solution",
    Icon: ComputerDesktopIcon,
    desc:
      "Solusi digital & infrastruktur IT: absensi, manajemen aset, keamanan, hingga pengadaan menyeluruh. " +
      "Kami membantu perusahaan bertransformasi dengan teknologi terbaru agar lebih efisien, aman, dan mudah berkembang sesuai kebutuhan bisnis Anda.",
  },
  {
    title: "Managed Service",
    Icon: WrenchIcon,
    desc:
      "Pengelolaan sistem & infrastruktur oleh tim ahli—hemat biaya, reliabel, dan proaktif 24/7. " +
      "Dengan layanan ini, Anda bisa fokus pada bisnis inti, sementara pemeliharaan, monitoring, dan optimasi performa jaringan maupun server ditangani oleh tenaga profesional berpengalaman.",
  },
];

export default function ProdukLayanan() {
  const prefersReduced = useReducedMotion();

  // Variants animasi
  const fadeUp = {
    hidden: { opacity: 0, y: 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const gridStagger = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.05 },
    },
  };

  const cardIn = {
    hidden: { opacity: 0, y: 14, scale: 0.98 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const pieceIn = {
    hidden: { opacity: 0, y: 6 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3, ease: "easeOut" },
    },
  };

  return (
    <section id="produk" className="relative bg-white">
      {/* Accent halus */}
      <div
        aria-hidden="true"
        className="hidden sm:block pointer-events-none absolute inset-x-0 -top-24 mx-auto h-64 w-[36rem] rounded-full bg-orange-200/30 blur-[100px]"
      />

      <div className="w-full px-4 sm:px-6 lg:px-0 py-20 lg:py-28">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.35 }}
          className="text-center lg:px-16 xl:px-24 2xl:px-32"
        >
          <motion.div
            variants={fadeUp}
            className="inline-flex items-center gap-2 rounded-full border border-orange-200 bg-white px-3 py-1 text-[11px] font-medium text-orange-700"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-orange-500" />
            Produk & Layanan
          </motion.div>
          <motion.h2
            variants={fadeUp}
            className="mt-4 text-[clamp(28px,4vw,40px)] font-semibold leading-tight tracking-tight text-slate-900"
          >
            Solusi lengkap untuk konektivitas & operasional IT
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="mx-auto mt-4 max-w-2xl text-sm text-slate-600 leading-7"
          >
            Kami menyediakan beragam layanan teknologi untuk mendukung bisnis
            Anda: mulai dari akses internet yang andal, solusi IT yang inovatif,
            hingga pengelolaan infrastruktur yang efisien. Fokus pada performa,
            keamanan, dan skalabilitas.
          </motion.p>
        </motion.div>

        {/* Grid cards (bleed offset kiri/kanan) */}
        <motion.div
          variants={gridStagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:pl-16 xl:pl-24 2xl:pl-32 lg:pr-16 xl:pr-24 2xl:pr-32"
        >
          {cards.map(({ title, Icon, desc }) => (
            <motion.article
              key={title}
              variants={cardIn}
              whileHover={prefersReduced ? undefined : { y: -6 }}
              whileTap={prefersReduced ? undefined : { scale: 0.98 }}
              className="group rounded-2xl border border-slate-200 bg-white/70 backdrop-blur p-6 sm:p-7 transition-all hover:shadow-lg"
            >
              <div className="flex flex-col items-center text-center">
                <motion.span
                  initial={false}
                  animate={prefersReduced ? {} : { scale: [1, 1.06, 1] }}
                  transition={
                    prefersReduced
                      ? {}
                      : { duration: 2.2, repeat: Infinity, ease: "easeInOut" }
                  }
                  className="mb-5 inline-grid h-14 w-14 place-items-center rounded-2xl bg-orange-50 text-orange-700 ring-1 ring-orange-100"
                >
                  <Icon className="h-7 w-7" />
                </motion.span>

                <motion.h3
                  variants={pieceIn}
                  className="text-lg font-semibold text-slate-900"
                >
                  {title}
                </motion.h3>
                <motion.p
                  variants={pieceIn}
                  className="mt-3 text-sm leading-6 text-slate-600"
                >
                  {desc}
                </motion.p>

                <motion.div variants={pieceIn} className="mt-6">
                  <a
                    href="#contact"
                    className="inline-flex items-center rounded-xl px-3.5 py-2 text-sm font-semibold text-orange-700 ring-1 ring-inset ring-orange-200 transition-colors hover:ring-orange-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500"
                  >
                    Konsultasi gratis
                    <svg
                      className="ml-1.5 h-4 w-4"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 11-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </motion.div>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* Divider gradient tipis */}
        <div className="mt-16 h-px w-full bg-gradient-to-r from-transparent via-slate-200 to-transparent lg:px-16 xl:px-24 2xl:px-32" />
      </div>
    </section>
  );
}
