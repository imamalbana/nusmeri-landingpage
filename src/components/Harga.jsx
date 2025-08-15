import React from "react";
import { CheckIcon } from "@heroicons/react/20/solid";
const tiers = [
  {
    name: "Internet 10",
    speed: "10 Mbps",
    id: "tier-hobby",
    href: "#",
    priceMonthly: "Rp.177.600",
    description:
      "Paket hemat untuk kebutuhan dasar internet rumah. Cocok untuk browsing, media sosial, dan streaming musik tanpa hambatan.",
    features: ["Gratis Registrasi", "Bebas Kuota", "Harga sudah termasuk PPN"],
    featured: false,
  },
  {
    name: "Internet 20",
    speed: "20 Mbps",
    id: "tier-hobby",
    href: "#",
    priceMonthly: "Rp.222.000",
    description:
      "Pilihan populer untuk keluarga kecil. Streaming film HD, video call, dan gaming ringan jadi lebih lancar tanpa gangguan.",
    features: ["Gratis Registrasi", "Bebas Kuota", "Harga sudah termasuk PPN"],
    featured: false,
  },
  {
    name: "Internet 30",
    speed: "30 Mbps",
    id: "tier-hobby",
    href: "#",
    priceMonthly: "Rp.299.700",
    description:
      "Streaming HD, gaming online, dan kerja remote terasa mulus, bahkan saat banyak perangkat terhubung.",
    features: ["Gratis Registrasi", "Bebas Kuota", "Harga sudah termasuk PPN"],
    featured: false,
  },
  {
    name: "Internet 50",
    speed: "50 Mbps",
    id: "tier-hobby",
    href: "#",
    priceMonthly: "Rp.499.500",
    description:
      "Streaming 4K, upload cepat, video conference tanpa lag, dan performa maksimal untuk bisnis rumahan.",
    features: ["Gratis Registrasi", "Bebas Kuota", "Harga sudah termasuk PPN"],
    featured: false,
  },
];
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
function Harga() {
  return (
    <div
      id="price"
      className="relative isolate my-32 bg-white px-6 sm:mt-56 lg:px-8"
    >
      <div
        aria-hidden="true"
        className="absolute inset-x-0 -top-3 -z-10 transform-gpu overflow-hidden px-36 blur-3xl"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="mx-auto aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
        />
      </div>
      <div className="mx-auto max-w-2xl text-center lg:max-w-4xl">
        <h2 className="text-base font-semibold leading-7 text-indigo-600">
          Harga
        </h2>
        <p className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Pilih Paket Internet Terbaik Sesuai Kebutuhanmu
        </p>
      </div>
      <p className="mx-auto mt-8 max-w-2xl text-center text-sm text-gray-600 leading-7">
        Pilih paket internet sesuai aktivitasmu, mulai dari penggunaan harian
        ringan hingga kebutuhan koneksi cepat untuk kerja dan hiburan. Semua
        paket sudah termasuk kuota unlimited dan dukungan teknis siap membantu
        kapan saja.
      </p>
      <div className="mx-auto mt-16 grid max-w-[90rem] grid-cols-1  sm:grid-cols-2 lg:grid-cols-4">
        {tiers.map((tier, tierIdx) => {
          // Tentukan class radius berdasarkan posisi index
          let radiusClass = "";
          if (tierIdx === 0) {
            // Card paling kiri
            radiusClass = "rounded-l-3xl";
          } else if (tierIdx === tiers.length - 1) {
            // Card paling kanan
            radiusClass = "rounded-r-3xl";
          } else {
            // Card tengah
            radiusClass = "rounded-none";
          }

          return (
            <div
              key={tier.id + tierIdx}
              className={classNames(
                tier.featured
                  ? "relative bg-gray-900 shadow-2xl"
                  : "bg-white/60",
                radiusClass, // ← pakai class radius hasil kondisi
                "p-8 ring-1 ring-gray-900/10 sm:p-10"
              )}
            >
              <h3
                id={tier.id}
                className={classNames(
                  tier.featured ? "text-indigo-400" : "text-indigo-700",
                  "text-base font-semibold leading-7"
                )}
              >
                {tier.name}
              </h3>
              <p className="mt-1 text-[12px] text-gray-500">
                Up to {tier.speed}
              </p>

              <p className="mt-4 flex items-baseline gap-x-2">
                <span
                  className={classNames(
                    tier.featured ? "text-white" : "text-gray-900",
                    "text-5xl font-bold tracking-tight"
                  )}
                >
                  {tier.priceMonthly}
                </span>
              </p>
              <p
                className={classNames(
                  tier.featured ? "text-gray-300" : "text-gray-600",
                  "mt-6 text-sm text-gray-600 leading-7"
                )}
              >
                {tier.description}
              </p>
              <ul
                role="list"
                className={classNames(
                  tier.featured ? "text-gray-300" : "text-gray-600",
                  "mt-8 space-y-3 text-sm leading-6 sm:mt-10"
                )}
              >
                {tier.features.map((feature) => (
                  <li key={feature} className="flex gap-x-3">
                    <CheckIcon
                      aria-hidden="true"
                      className={classNames(
                        tier.featured ? "text-indigo-400" : "text-indigo-600",
                        "h-6 w-5 flex-none"
                      )}
                    />
                    {feature}
                  </li>
                ))}
              </ul>
              <a
                href={tier.href}
                aria-describedby={tier.id}
                className={classNames(
                  tier.featured
                    ? "bg-blue-600 text-white shadow-sm hover:bg-blue-700 focus-visible:outline-blue-600"
                    : "text-blue-600 ring-1 ring-inset ring-blue-200 hover:ring-blue-300 focus-visible:outline-blue-600",
                  "mt-8 block rounded-md px-3.5 py-2.5 text-center text-sm font-semibold focus-visible:outline-2 focus-visible:outline-offset-2 sm:mt-10"
                )}
              >
                Langganan sekarang
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Harga;
