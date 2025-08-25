import React from "react";
import { motion, useReducedMotion } from "framer-motion";

const testimonials = [
  {
    id: 1,
    name: "John Doe",
    role: "CEO, Example Corp.",
    testimonial:
      "Nusanet Media Mandiri telah menjadi mitra tepercaya kami dalam mengelola infrastruktur teknologi dan sistem manajemen perusahaan selama bertahun-tahun. Solusi dan inovasi yang diberikan selalu tepat guna.",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    id: 2,
    name: "Jane Smith",
    role: "COO, Tech Innovations",
    testimonial:
      "Terima kasih Nusanet yang selalu mendampingi kami. Menjadi konsultan sekaligus penyedia solusi IT terbaik, terutama di era digital—layanan internet dan solusi IT-nya sangat bisa diandalkan.",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    id: 3,
    name: "Alex Johnson",
    role: "Founder, Creative Solutions",
    testimonial:
      "Kami merasakan peningkatan stabilitas dan efisiensi operasional. Tim Nusanet responsif dan proaktif dalam memastikan layanan tetap optimal di semua cabang.",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
];

export default function Testimoni() {
  const prefersReduced = useReducedMotion();

  const fadeUp = {
    hidden: { opacity: 0, y: 14 },
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
      transition: { staggerChildren: 0.08, delayChildren: 0.08 },
    },
  };
  const cardIn = {
    hidden: { opacity: 0, y: 10, scale: 0.98 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section id="testimoni" className="relative bg-white">
      {/* accent halus */}
      <div
        aria-hidden="true"
        className="hidden sm:block pointer-events-none absolute inset-x-0 -top-24 mx-auto h-64 w-[36rem] rounded-full bg-orange-200/30 blur-[100px]"
      />

      {/* BLEED container sama seperti section lain */}
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
            Testimoni
          </motion.div>

          <motion.h2
            variants={fadeUp}
            className="mt-4 text-[clamp(28px,4vw,40px)] font-semibold leading-tight tracking-tight text-slate-900"
          >
            Cerita Keberhasilan dari Mitra Kami
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="mx-auto mt-4 max-w-2xl text-sm text-slate-600 leading-7"
          >
            Dukungan yang responsif, solusi yang relevan, dan jaringan yang
            stabil membuat banyak bisnis tumbuh lebih cepat bersama kami.
          </motion.p>
        </motion.div>

        {/* Grid cards */}
        <motion.div
          variants={gridStagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:pl-16 xl:pl-24 2xl:pl-32 lg:pr-16 xl:pr-24 2xl:pr-32"
        >
          {testimonials.map((t) => (
            <motion.article
              key={t.id}
              variants={cardIn}
              whileHover={prefersReduced ? undefined : { y: -6 }}
              className="relative rounded-2xl border border-slate-200 bg-white/70 backdrop-blur p-6 sm:p-7 hover:shadow-lg transition-all"
            >
              {/* quote icon dekoratif */}
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                className="absolute right-6 top-6 h-6 w-6 text-orange-200"
              >
                <path
                  d="M7 11c0-2.761 2.239-5 5-5v2c-1.654 0-3 1.346-3 3h3v5H7v-5zm8 0c0-2.761 2.239-5 5-5v2c-1.654 0-3 1.346-3 3h3v5h-5v-5z"
                  fill="currentColor"
                />
              </svg>

              {/* avatar + nama */}
              <div className="flex flex-col items-center text-center">
                <img
                  src={t.image}
                  alt={t.name}
                  className="h-16 w-16 rounded-full object-cover ring-2 ring-orange-200"
                />
                <h3 className="mt-4 text-base font-semibold text-slate-900">
                  {t.name}
                </h3>
                <p className="text-xs text-slate-500">{t.role}</p>
              </div>

              {/* isi testimoni */}
              <p className="mt-5 text-sm leading-6 text-slate-600 italic">
                “{t.testimonial}”
              </p>
            </motion.article>
          ))}
        </motion.div>

        {/* Divider tipis */}
        <div className="mt-16 h-px w-full bg-gradient-to-r from-transparent via-slate-200 to-transparent lg:px-16 xl:px-24 2xl:px-32" />
      </div>
    </section>
  );
}
