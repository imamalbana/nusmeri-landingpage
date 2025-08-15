import React from "react";

const testimonials = [
  {
    id: 1,
    name: "John Doe",
    role: "CEO, Example Corp.",
    testimonial:
      "Nusanet Media Mandiri has been our trusted partner in managing our technology infrastructure and company management systems for more than five years. There are always the best solutions and innovations provided by Nusanet to us.",
    image: "https://randomuser.me/api/portraits/men/1.jpg", // Public image URL
  },
  {
    id: 2,
    name: "Jane Smith",
    role: "COO, Tech Innovations",
    testimonial:
      "Terima kasih Nusanet yang sudah setia mendampingi kami selama ini. Nusanet selalu dapat menjadi konsultan IT dan penyedia solusi IT terbaik bagi kami. Terutama di era yang serba digital ini. Perusahaan penyedia layanan internet dan solusi IT Terbaik!",
    image: "https://randomuser.me/api/portraits/men/1.jpg", // Public image URL
  },
  {
    id: 3,
    name: "Alex Johnson",
    role: "Founder, Creative Solutions",
    testimonial:
      "Nusanet Media Mandiri has been our trusted partner in managing our technology infrastructure and company management systems for more than five years. There are always the best solutions and innovations provided by Nusanet to us.",
    image: "https://randomuser.me/api/portraits/men/1.jpg", // Public image URL
  },
];

export default function Testimonials() {
  return (
    <div className="py-20 sm:py-28">
      <div className="max-w-7xl mx-auto text-center px-6">
        {/* Improved Title */}
        <div className="flex flex-col gap-2 my-20 items-center justify-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Success Story!{" "}
          </h2>

          <p className="text-gray-600 leading-7 text-center w-[50%]">
            Sejak awal didirikan, kami sudah berhasil menjawab setiap tantangan
            dan memberikan solusi teknologi terbaik bagi seluruh mitra dan
            client kami.{" "}
          </p>
        </div>

        {/* Testimonial Cards */}
        <div className="flex flex-wrap justify-center gap-8 mt-10">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white p-8 rounded-lg shadow-lg max-w-sm w-full transform hover:scale-105 transition-all duration-300 ease-in-out"
            >
              <div className="flex justify-center mb-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-24 h-24 rounded-full object-cover"
                />
              </div>
              <p className="text-sm text-gray-600 leading-7 italic mb-4">
                "{testimonial.testimonial}"
              </p>
              <div className="mt-10">
                <h3 className="text-xl font-semibold text-gray-800">
                  {testimonial.name}
                </h3>
                <p className="text-sm text-gray-600 leading-7">
                  {testimonial.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
