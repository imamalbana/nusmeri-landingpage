import React from "react";
import {
  WifiIcon,
  ComputerDesktopIcon, // Updated icon name
  WrenchIcon,
} from "@heroicons/react/24/solid";

const ITProductsServices = () => {
  return (
    <section id="pro" className="py-20 bg-white">
      <div className="w-full mx-auto px-6 max-w-screen-xl">
        <h2 className="text-3xl font-semibold leading-7 text-indigo-600 mb-20 text-center">
          Produk dan Layanan{" "}
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* Card 1 */}
          <div className="bg-white shadow-md rounded-xl overflow-hidden transform hover:scale-105 hover:shadow-lg transition-all duration-300 ease-in-out">
            <div className="p-8 flex flex-col items-center">
              <div className="mb-6 p-4 bg-slate-100 rounded-full text-4xl">
                <WifiIcon className="w-10 h-10 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold leading-7 text-indigo-600 mb-4">
                Akses Internet
              </h3>
              <p className="text-sm text-gray-600 leading-7 text-center">
                Layanan internet berkecepatan tinggi yang didukung infrastruktur
                fiberoptik dengan cakupan area nasional. Infrastruktur yang kami
                gunakan sangat fleksibel dan bervariasi tergantung pada lokasi
                dan tingkat kesulitan. Mulai dari Fiber Optik, Radio Nirkabel,
                sampai dengan V-Sat.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white shadow-md rounded-xl overflow-hidden transform hover:scale-105 hover:shadow-lg transition-all duration-300 ease-in-out">
            <div className="p-8 flex flex-col items-center">
              <div className="mb-6 p-4 bg-slate-100 rounded-full text-4xl">
                <ComputerDesktopIcon className="w-10 h-10 text-indigo-600" />{" "}
                {/* Corrected icon name */}
              </div>
              <h3 className="text-xl font-semibold leading-7 text-indigo-600 mb-4">
                IT Solution
              </h3>
              <p className="text-sm text-gray-600 leading-7 text-center">
                Solusi digital untuk mendukung operasional perusahaan dan
                pengembangan bisnis. Berbagai solusi bisnis berbasis IT seperti
                Sistem Absensi, Manajemen Aset, Sistem Keamanan dan solusi IT
                lainnya dapat kami sediakan sesuai dengan kebutuhan Anda.
                Termasuk pengadaan infrastruktur IT.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white shadow-md rounded-xl overflow-hidden transform hover:scale-105 hover:shadow-lg transition-all duration-300 ease-in-out">
            <div className="p-8 flex flex-col items-center">
              <div className="mb-6 p-4 bg-slate-100 rounded-full text-4xl">
                <WrenchIcon className="w-10 h-10 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold leading-7 text-indigo-600 mb-4">
                Managed Service
              </h3>
              <p className="text-sm text-gray-600 leading-7 text-center">
                Selain pengadaan infrastruktur IT. Kami juga dapat menangani
                manajemen sistem dan infrastruktur teknologi informasi di
                perusahaan Anda oleh tenaga ahli berpengalaman. Dengan layanan
                Managed Service kami, perusahaan Anda dapat menghemat biaya
                secara signifikan.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ITProductsServices;
