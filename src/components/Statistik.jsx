import React from "react";
const stats = [
  { id: 1, name: "Client Korporasi", value: "300+" },
  { id: 2, name: "Project Diselesaikan", value: "600+" },
  { id: 3, name: "Pengalaman", value: "8 Tahun" },
  { id: 4, name: "Solusi Bisnis", value: "Ribuan" },
];

export default function Statistik() {
  return (
    <div className="bg-white  py-27 sm:py-35 ">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-none ">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Pencapaian Kami!{" "}
            </h2>
            <p className="mt-4 text-gray-600 leading-7 ">
              Sejak awal didirikan, kami sudah berhasil menjawab setiap
              tantangan dan memberikan solusi teknologi terbaik bagi seluruh
              mitra dan client kami.{" "}
            </p>
          </div>
          <dl className="mt-16 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-4 ">
            {stats.map((stat) => (
              <div
                key={stat.id}
                className="group flex flex-col bg-gray-400/5 p-8 hover:bg-indigo-500 transition duration-300"
              >
                <dt className="text-sm font-semibold leading-6 text-gray-600 group-hover:text-white">
                  {stat.name}
                </dt>
                <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 group-hover:text-white">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
