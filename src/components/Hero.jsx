import { motion } from "framer-motion";
import React from "react";
import social from "../animations/social_media_network.json";
import Lottie from "lottie-react";

export default function Hero() {
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.2 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <motion.section
      id="home"
      className="relative isolate overflow-hidden bg-white text-gray-900 h-screen flex items-center"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.35 }}
    >
      {/* Full-bleed container */}
      <div className="w-full px-4 sm:px-6 lg:px-0 py-10 sm:py-14 lg:py-0">
        <motion.div
          variants={container}
          className="grid items-center gap-8 lg:gap-12 lg:grid-cols-2"
        >
          {/* Kiri: Headline + Deskripsi + CTA */}
          <div className="order-2 lg:order-1 lg:pl-16 xl:pl-24 2xl:pl-32">
            {/* Eyebrow / badge */}
            <motion.div
              variants={item}
              className="inline-flex items-center gap-2 rounded-full border border-orange-200 bg-white px-3 py-1 text-xs font-medium text-orange-700 shadow-sm"
            >
              <span className="inline-block h-2 w-2 rounded-full bg-orange-500" />
              ISP &amp; Managed Service • Enterprise Ready
            </motion.div>
            <motion.div variants={item} className="max-w-3xl">
              {/* Title */}
              <motion.h1
                variants={item}
                className="mt-4 text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight text-gray-900"
              >
                <span className="bg-gradient-to-r from-orange-600 to-orange-400 bg-clip-text text-transparent">
                  Solusi Internet & IT
                </span>{" "}
                Terbaik
              </motion.h1>

              {/* Subtitle */}
              <motion.h2
                variants={item}
                className="mt-3 text-lg sm:text-xl lg:text-2xl text-gray-700 font-medium"
              >
                Jaringan stabil, aman, dan siap mendukung pertumbuhan bisnis
                Anda
              </motion.h2>

              {/* Description */}
              <motion.p
                variants={item}
                className="mt-6 text-base sm:text-lg text-gray-600 max-w-2xl leading-relaxed"
              >
                Dengan infrastruktur handal dan dukungan tim profesional,
                operasional perusahaan Anda tetap efisien dan produktif setiap
                saat.
              </motion.p>
            </motion.div>

            <motion.div
              variants={item}
              className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center lg:items-start gap-3 sm:gap-4"
            >
              <motion.a
                href="#about"
                className="group w-full sm:w-auto inline-flex items-center justify-center rounded-xl bg-orange-500 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-orange-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500 transition-colors"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                Pelajari Layanan
                <svg
                  className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5"
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
              </motion.a>
              <motion.a
                href="#contact"
                className="w-full sm:w-auto inline-flex items-center justify-center rounded-xl border border-gray-300 bg-white px-6 py-3 text-sm font-semibold text-gray-800 hover:bg-gray-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-400 transition-colors"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                Hubungi Kami{" "}
                <span className="ml-1" aria-hidden="true">
                  →
                </span>
              </motion.a>
            </motion.div>
            <ul className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-2xl text-sm">
              <motion.li variants={item} className="flex items-start gap-2">
                <span className="text-orange-500">✓</span>
                <div>
                  <p className="text-gray-800 font-medium">SLA Jelas</p>
                  <p className="text-gray-500">Transparan & terukur</p>
                </div>
              </motion.li>
              <motion.li variants={item} className="flex items-start gap-2">
                <span className="text-orange-500">✓</span>
                <div>
                  <p className="text-gray-800 font-medium">Monitoring 24/7</p>
                  <p className="text-gray-500">Proaktif & real-time</p>
                </div>
              </motion.li>
            </ul>
          </div>

          {/* Kanan: Ilustrasi */}
          <motion.div
            variants={item}
            className="order-1 lg:order-2 lg:pr-16 xl:pr-24 2xl:pr-32"
          >
            <motion.div
              className="relative mx-auto w-full max-w-[700px] flex items-center justify-center"
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              whileHover={{ y: -6, rotate: -0.5 }}
            >
              <Lottie
                animationData={social}
                loop
                className="w-full max-w-[600px] h-auto"
              />

              {/* Glow background */}
              <div className="hidden sm:block absolute right-0 top-10 h-[320px] w-[320px] pointer-events-none -z-10 bg-orange-300/40 blur-[120px] rounded-full" />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}
