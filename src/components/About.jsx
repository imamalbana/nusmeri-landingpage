import React from "react";

/**
 * AboutWhiteBlueRows.jsx
 * 3 sections (row layout on desktop):
 * 1) Who Are We  (left text, right visual)
 * 2) Mission & Vision (2 cards side-by-side in one row)
 * 3) Our Services (left intro, right service list cards)
 *
 * Style: clean white, blue accents, minimal borders/shadows.
 */

export default function AboutWhiteBlueRows() {
  const services = [
    {
      title: "Network Architecture",
      desc: "Desain arsitektur sederhana, scalable, dan siap HA.",
    },
    {
      title: "Managed Operations",
      desc: "Monitoring 24/7, incident response, & tuning performa.",
    },
    {
      title: "Cloud & Security",
      desc: "Integrasi cloud, zero-trust, observability terpadu.",
    },
  ];

  return (
    <div id="about" className="bg-white text-slate-900">
      <main className="mx-auto max-w-7xl px-6 py-16 lg:py-24 space-y-24">
        {/* ===== 1) WHO ARE WE ===== */}
        <section className="flex flex-col gap-10 lg:flex-row lg:items-center items-center ">
          {/* Left: text */}
          <div className="flex justify-center items-center  px-6 w-full">
            <div className="text-center w-full">
              <div className="text-xl font-semibold leading-7 text-indigo-600">
                Who Are We
              </div>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
                Kami memberikan solusi jaringan yang dapat diandalkan.
              </h2>
              <p className="mt-7 max-w-xl text-sm text-gray-600 leading-7 mx-auto">
                PT Nusanet Media Mandiri adalah perusahaan terkemuka dalam
                menyediakan solusi IT dan telekomunikasi yang inovatif di
                Indonesia. Sejak berdiri kami telah menjadi pilihan utama bagi
                mereka yang mengutamakan kehandalan dan kualitas dalam layanan
                teknologi dan telekomunikasi.
              </p>

              {/* Facts */}
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 max-w-lg mx-auto gap-6">
                {[
                  { k: "Pengalaman", v: "8 Tahun" },
                  { k: "Project", v: "600+" },
                  { k: "Client", v: "300+" },
                  { k: "Solusi Bisnis", v: "Ribuan" },
                ].map((it) => (
                  <div
                    key={it.k}
                    className="rounded-xl border border-slate-200 bg-white p-6 text-center shadow-lg"
                  >
                    <div className="text-sm font-semibold text-indigo-500">
                      {it.v}
                    </div>
                    <div className="mt-2 text-xs text-slate-500">{it.k}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: visual placeholder (tetap minimal) */}
        </section>

        {/* ===== 2) MISSION & VISION (row) ===== */}
        <section className="flex flex-col gap-6 lg:flex-row">
          {/* Mission */}
          <div className="group flex-1 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition will-change-transform hover:-translate-y-0.5">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-indigo-700">
                {/* target icon */}
                <svg viewBox="0 0 24 24" className="h-5 w-5">
                  <circle
                    cx="12"
                    cy="12"
                    r="8"
                    className="stroke-current"
                    strokeWidth="1.6"
                    fill="none"
                  />
                  <circle cx="12" cy="12" r="3" className="fill-current" />
                </svg>
              </span>
              <h3 className="text-xl font-semibold leading-7 text-indigo-600">
                Our Mission
              </h3>
            </div>
            <p className="mt-3 text-sm text-gray-600 leading-7">
              Terus berinvestasi dalam penelitian dan pengembangan, serta
              meningkatkan kapasitas sumber daya manusia agar selalu siap dan
              unggul dalam menghadapi perkembangan terbaru di industri IT dan
              telekomunikasi.
            </p>
            <ul className="mt-4 grid gap-2 text-sm text-gray-600 leading-7">
              <Li>Riset dan pengembangan berkelanjutan.</Li>
              <Li>Peningkatan kompetensi SDM.</Li>
              <Li>Penerapan teknologi terbaru.</Li>
            </ul>
          </div>

          {/* Vision */}
          <div className="group flex-1 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition will-change-transform hover:-translate-y-0.5">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-indigo-700">
                {/* compass icon */}
                <svg viewBox="0 0 24 24" className="h-5 w-5">
                  <circle
                    cx="12"
                    cy="12"
                    r="8"
                    className="stroke-current"
                    strokeWidth="1.6"
                    fill="none"
                  />
                  <path
                    d="M10 10l6-2-2 6-6 2 2-6z"
                    className="stroke-current"
                    strokeWidth="1.6"
                    fill="none"
                  />
                </svg>
              </span>
              <h3 className="text-xl font-semibold leading-7 text-indigo-600">
                Our Vision
              </h3>
            </div>
            <p className="mt-3 text-sm text-gray-600 leading-7">
              Sebagai perusahaan yang peduli terhadap kemajuan teknologi di
              Indonesia, kami terus berinvestasi dalam penelitian dan
              pengembangan, serta meningkatkan kapasitas SDM kami agar selalu
              berada di garis depan dalam menghadapi perkembangan terbaru dalam
              industri IT dan telekomunikasi.
            </p>
            <ul className="mt-4 grid gap-2 text-sm text-gray-600 leading-7">
              <Li>
                Mendorong adopsi teknologi mutakhir di berbagai sektor industri.
              </Li>
              <Li>
                Berperan aktif dalam membentuk ekosistem digital yang
                berkelanjutan.
              </Li>
              <Li>Menjadi pemimpin inovatif</Li>
            </ul>
          </div>
        </section>

        {/* ===== 3) OUR SERVICES (row) ===== */}
        <section className="flex flex-col gap-10 lg:flex-row ">
          {/* Left intro */}
          <div className="flex-1 flex items-center flex-col">
            <div className="inline-flex items-center gap-2 text-xl font-semibold leading-7 text-indigo-600">
              Our Services
            </div>
            <h3 className="mt-4 text-3xl font-semibold tracking-tight">
              Layanan modular,{" "}
              <span className="text-indigo-700">tinggal pilih</span> sesuai
              kebutuhan.
            </h3>
            <p className="mt-6 max-w-md min-w-[70%] text-sm text-gray-600 leading-7 text-center">
              Kami menawarkan solusi layanan internet untuk perusahaan Anda.
              Layanan internet berkecepatan tinggi yang stabil dengan SLA Uptime
              sampai dengan 99.9%. Selain layanan internet kami juga menyediakan
              berbagai solusi bisnis berbasis teknologi untuk kebutuhan
              perusahaan Anda.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}

/* Tiny bullet component (for minimalist lists) */
function Li({ children }) {
  return (
    <div className="flex items-start gap-2">
      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-indigo-600/80" />
      <span>{children}</span>
    </div>
  );
}
