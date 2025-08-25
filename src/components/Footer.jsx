import React from "react";
import { Link } from "react-router-dom";
import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/outline";

export default function Footer() {
  return (
    <footer
      id="contact"
      aria-labelledby="footer-heading"
      className="relative bg-gray-900"
    >
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>

      <div className="w-full px-4 sm:px-6 lg:px-0 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 lg:pl-16 xl:pl-24 2xl:pl-32 lg:pr-16 xl:pr-24 2xl:pr-32">
          <div>
            <h3 className="text-sm font-semibold text-orange-400 tracking-wide uppercase">
              Head Office
            </h3>
            <p className="mt-4 text-sm leading-7 text-gray-400 max-w-md">
              Graha Raya, Ruko Silktown Avenue, Blok RK/5A-05, Pondok Jagung
              Timur, Serpong Utara, Tangerang Selatan, Banten
            </p>
          </div>

          {/* Hubungi Kami */}
          <div>
            <h3 className="text-sm font-semibold text-orange-400 tracking-wide uppercase">
              Hubungi Kami
            </h3>
            <ul className="mt-4 space-y-4 text-sm">
              <li className="flex items-center gap-3">
                <EnvelopeIcon className="h-5 w-5 text-gray-400" />
                <a
                  href="mailto:info@nusameri.com"
                  className="text-gray-400 hover:text-orange-400 transition-colors"
                >
                  info@nusameri.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <PhoneIcon className="h-5 w-5 text-gray-400" />
                <Link
                  to="https://wa.me/6281280330406"
                  className="text-gray-400 hover:text-orange-400 transition-colors"
                >
                  +62 812-8033-0406
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-12 border-t border-gray-800 pt-6 text-center">
          <p className="text-xs text-gray-500">
            &copy; {new Date().getFullYear()} Nusanet Media Mandiri. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
