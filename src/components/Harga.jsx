import React from "react";
import { CheckIcon } from "@heroicons/react/20/solid";
import { motion, useReducedMotion } from "framer-motion";

const tiers = [
  {
    name: "Internet 10",
    speed: "10 Mbps",
    id: "tier-10",
    href: "#",
    priceMonthly: "Rp177.600",
    description:
      "Paket hemat untuk kebutuhan dasar internet rumah. Cocok untuk browsing, media sosial.",
    features: ["Gratis Registrasi", "Bebas Kuota", "Harga termasuk PPN"],
  },
  {
    name: "Internet 20",
    speed: "20 Mbps",
    id: "tier-20",
    href: "#",
    priceMonthly: "Rp222.000",
    description:
      "Pilihan populer untuk keluarga kecil. Streaming HD, video call, dan gaming ringan lebih lancar.",
    features: ["Gratis Registrasi", "Bebas Kuota", "Harga termasuk PPN"],
  },
  {
    name: "Internet 30",
    speed: "30 Mbps",
    id: "tier-30",
    href: "#",
    priceMonthly: "Rp299.700",
    description:
      "Streaming HD, gaming online, dan kerja remote tetap mulus meski banyak perangkat.",
    features: ["Gratis Registrasi", "Bebas Kuota", "Harga termasuk PPN"],
  },
  {
    name: "Internet 50",
    speed: "50 Mbps",
    id: "tier-50",
    href: "#",
    priceMonthly: "Rp499.500",
    description:
      "Streaming 4K, upload cepat, dan video conference stabil—pas untuk bisnis rumahan.",
    features: ["Gratis Registrasi", "Bebas Kuota", "Harga termasuk PPN"],
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Harga() {
  const popularName = "Internet 20";
  const prefersReduced = useReducedMotion();

  // Variants
  const fadeUp = {
    hidden: { opacity: 0, y: 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const gridVariants = {
    hidden: { opacity: 0 },
    visible: (i = 0) => ({
      opacity: 1,
      transition: {
        delay: 0.05,
        staggerChildren: 0.08,
        delayChildren: 0.08,
      },
    }),
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 14, scale: 0.98 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const innerVariants = {
    hidden: { opacity: 0, y: 6 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.35, ease: "easeOut" },
    },
  };

  return (
    <section id="price" className="relative bg-white">
      {/* Accent */}
      <div
        aria-hidden="true"
        className="hidden sm:block pointer-events-none absolute inset-x-0 -top-24 mx-auto h-64 w-[40rem] rounded-full bg-orange-200/30 blur-[100px]"
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
            Harga
          </motion.div>
          <motion.h2
            variants={fadeUp}
            className="mt-4 text-[clamp(28px,4vw,40px)] font-semibold leading-tight tracking-tight text-slate-900"
          >
            Pilih Paket Internet Terbaik Sesuai Kebutuhanmu
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="mx-auto mt-4 max-w-2xl text-sm text-slate-600 leading-7"
          >
            Dari penggunaan harian hingga kebutuhan kerja & hiburan. Semua paket
            sudah termasuk kuota unlimited dan dukungan teknis yang siap
            membantu.
          </motion.p>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={gridVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:pl-16 xl:pl-24 2xl:pl-32 lg:pr-16 xl:pr-24 2xl:pr-32"
        >
          {tiers.map((tier) => {
            const isPopular = tier.name === popularName;

            return (
              <motion.div
                key={tier.id}
                variants={cardVariants}
                whileHover={prefersReduced ? undefined : { y: -6 }}
                whileTap={prefersReduced ? undefined : { scale: 0.98 }}
                className={classNames(
                  "group relative rounded-2xl border backdrop-blur p-6 sm:p-7 transition",
                  "border-slate-200 bg-white/70 hover:shadow-lg"
                )}
              >
                {/* Badge populer */}
                {isPopular && (
                  <motion.div
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.2 }}
                    className="absolute -top-3 right-4 inline-flex items-center gap-2 rounded-full border border-orange-300 bg-orange-50 px-3 py-1 text-[11px] font-semibold text-orange-700 shadow-sm"
                  >
                    ★ Paling Populer
                  </motion.div>
                )}

                <motion.div
                  variants={innerVariants}
                  className="flex items-baseline justify-between"
                >
                  <h3
                    id={tier.id}
                    className="text-sm font-semibold text-slate-900"
                  >
                    {tier.name}
                  </h3>
                  <span className="rounded-md bg-orange-50 px-2 py-0.5 text-[11px] font-medium text-orange-700">
                    Up to {tier.speed}
                  </span>
                </motion.div>

                <motion.div
                  variants={innerVariants}
                  className="mt-4 flex items-end gap-2"
                >
                  <span className="text-4xl font-bold tracking-tight text-slate-900">
                    {tier.priceMonthly}
                  </span>
                  <span className="text-xs text-slate-500">/ bln</span>
                </motion.div>

                <motion.p
                  variants={innerVariants}
                  className="mt-4 text-sm text-slate-600 leading-6"
                >
                  {tier.description}
                </motion.p>

                <motion.ul
                  variants={innerVariants}
                  className="mt-6 space-y-3 text-sm text-slate-700"
                >
                  {tier.features.map((feature, i) => (
                    <motion.li
                      key={feature}
                      initial={{ opacity: 0, x: -6 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, amount: 0.6 }}
                      transition={{ duration: 0.25, delay: 0.05 * i }}
                      className="flex gap-2"
                    >
                      <CheckIcon className="h-5 w-5 flex-none text-orange-600" />
                      <span>{feature}</span>
                    </motion.li>
                  ))}
                </motion.ul>

                <motion.a
                  variants={innerVariants}
                  href={tier.href}
                  aria-describedby={tier.id}
                  className={classNames(
                    "mt-7 inline-flex w-full items-center justify-center rounded-xl px-4 py-2.5 text-sm font-semibold transition-colors  focus-visible:outline-2 focus-visible:outline-offset-2",
                    isPopular
                      ? "bg-orange-500 text-white hover:bg-orange-400 focus-visible:outline-orange-500"
                      : "text-orange-700 ring-1 ring-inset ring-orange-200 hover:ring-orange-300 focus-visible:outline-orange-500"
                  )}
                >
                  Langganan sekarang
                </motion.a>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
