import React from "react";
import { motion } from "framer-motion";
import mobile from "../animations/No_Mobile_Internet.json";
import Lottie from "lottie-react";

/**
 * Tentang.jsx — Minimal • Modern (Who We Are + Ilustrasi + Visi & Misi)
 * - Bleed container sama seperti Hero (px-4 sm:px-6 lg:px-0)
 * - Aksen gradient tipis (tanpa foto/hero)
 * - Micro-interaction halus (hover & reveal)
 */

export default function Tentang() {
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.05 },
    },
  };
  const item = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section id="about" className="bg-white text-slate-900">
      <main className="w-full px-4 sm:px-6 lg:px-0 py-20 lg:py-28 space-y-24">
        {/* ========== 1) WHO WE ARE ========== */}
        <section className="relative">
          {/* Decorative ring gradient (lebih modern dari blob) */}
          <motion.div
            aria-hidden
            className="pointer-events-none absolute -top-24 -right-24 h-80 w-80 rounded-full bg-[conic-gradient(from_180deg,theme(colors.orange.200/30),transparent_50%)] blur-[80px]"
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-10 lg:gap-16">
            {/* Kiri — Siapa Kita */}
            <motion.div
              variants={container}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.35 }}
              className="order-2 lg:order-1 lg:pl-16 xl:pl-24 2xl:pl-32"
            >
              <motion.div
                variants={item}
                className="inline-flex items-center gap-2 rounded-full border border-orange-200/70 bg-white px-3 py-1 text-[11px] font-medium text-orange-700"
              >
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-orange-500" />
                Siapa Kita?
              </motion.div>

              <motion.h2
                variants={item}
                className="mt-4 text-[clamp(28px,4vw,40px)] font-semibold leading-tight tracking-tight"
              >
                Solusi jaringan yang{" "}
                <span className="bg-gradient-to-r from-orange-600 to-orange-400 bg-clip-text text-transparent">
                  andal & skalabel
                </span>{" "}
                untuk pertumbuhan bisnis.
              </motion.h2>

              <motion.p
                variants={item}
                className="mt-5 max-w-xl text-base text-slate-600 leading-7"
              >
                PT Nusanet Media Mandiri menyediakan solusi IT dan
                telekomunikasi yang fokus pada kinerja, keamanan, dan
                skalabilitas. Dipercaya organisasi yang mengutamakan
                reliabilitas layanan.
              </motion.p>

              {/* Stats — pill minimal */}
              <motion.ul
                variants={item}
                className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-3 text-sm"
              >
                {[
                  { k: "Tim ahli", v: "Berpengalaman" },
                  { k: "Support", v: "Respon cepat" },
                  { k: "Keandalan", v: "SLA jelas" },
                  { k: "Skalabilitas", v: "Siap tumbuh" },
                ].map((it) => (
                  <li
                    key={it.k}
                    className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-3 py-1.5 hover:border-orange-200 transition-colors"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-orange-500" />
                    <span className="font-semibold text-slate-900">{it.v}</span>
                    <span className="text-slate-500">{it.k}</span>
                  </li>
                ))}
              </motion.ul>
            </motion.div>

            {/* Kanan — Ilustrasi */}
            {/* Kanan — Ilustrasi */}
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.9 }}
              className="order-1 lg:order-2 lg:pr-16 xl:pr-24 2xl:pr-32"
            >
              <div className="relative mx-auto w-full max-w-[680px]">
                <div className="aspect-square w-full rounded-2xl   flex items-center justify-center p-6">
                  <Lottie
                    animationData={mobile}
                    loop={true}
                    className="w-full h-full"
                  />
                </div>
              </div>
            </motion.div>
          </div>

          {/* Divider gradient tipis */}
          <div className="mt-16 h-px w-full bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
        </section>

        {/* ========== 2) VISION & MISSION ========== */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:pl-16 xl:pl-24 2xl:pl-32 lg:pr-16 xl:pr-24 2xl:pr-32">
          {/* Misi */}
          <motion.article
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="relative ps-5"
          >
            {/* Accent line kiri */}
            <span className="absolute inset-y-0 left-0 w-[3px] rounded-full bg-gradient-to-b from-orange-500 to-orange-300" />
            <motion.h3
              variants={item}
              className="text-xl font-semibold text-slate-900"
            >
              Misi Kami
            </motion.h3>
            <motion.p
              variants={item}
              className="mt-2 text-sm text-slate-600 leading-7"
            >
              Investasi berkelanjutan pada R&amp;D dan kapabilitas tim agar
              selalu unggul mengikuti perkembangan teknologi.
            </motion.p>
            <motion.ul
              variants={item}
              className="mt-3 space-y-2.5 text-sm text-slate-700"
            >
              <Li>Riset dan pengembangan berkelanjutan</Li>
              <Li>Peningkatan kompetensi SDM</Li>
              <Li>Penerapan teknologi terbaru</Li>
            </motion.ul>
          </motion.article>

          {/* Visi */}
          <motion.article
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="relative ps-5"
          >
            <span className="absolute inset-y-0 left-0 w-[3px] rounded-full bg-gradient-to-b from-orange-500 to-orange-300" />
            <motion.h3
              variants={item}
              className="text-xl font-semibold text-slate-900"
            >
              Visi Kami
            </motion.h3>
            <motion.p
              variants={item}
              className="mt-2 text-sm text-slate-600 leading-7"
            >
              Menjadi penggerak adopsi teknologi mutakhir dan bagian dari
              ekosistem digital Indonesia yang berkelanjutan.
            </motion.p>
            <motion.ul
              variants={item}
              className="mt-3 space-y-2.5 text-sm text-slate-700"
            >
              <Li>Mendorong adopsi teknologi mutakhir</Li>
              <Li>Berperan dalam ekosistem digital berkelanjutan</Li>
              <Li>Menjadi pemimpin inovatif</Li>
            </motion.ul>
          </motion.article>
        </section>
      </main>
    </section>
  );
}

/* Bullet minimalis dengan hover micro-interaction */
function Li({ children }) {
  return (
    <div className="group flex items-start gap-2">
      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-orange-500 transition-transform group-hover:scale-125" />
      <span>{children}</span>
    </div>
  );
}
