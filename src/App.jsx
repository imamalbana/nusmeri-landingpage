"use client";
import React, { useEffect, useState } from "react";
import About from "./components/About";
import { Link } from "react-router-dom";
import Pricing from "./components/Pricing";
import ValueSection from "./components/Values";
import ITProductsServices from "./components/ProductServices";
import Stats from "./components/Stats";
import Testimonials from "./components/Testimonials";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import "./App.css";

const navigation = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Product", href: "#product" },
  { name: "Price", href: "#price" },
  { name: "Contact", href: "#contact" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);
  const [isScrolledPast, setIsScrolledPast] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 900) {
        setIsScrolledPast(true);
        setScrolling(true);
      } else {
        setIsScrolledPast(false);
        setScrolling(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-white">
      {/* Header */}
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolling ? "backdrop-blur-md shadow-lg" : ""
        }`}
      >
        <nav
          aria-label="Global"
          className="flex items-center justify-between p-6 lg:px-8"
        >
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                alt=""
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                className="h-8 w-auto"
              />
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-400"
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`text-sm font-semibold leading-6 ${
                  isScrolledPast ? "text-indigo-500" : "text-white"
                }`}
              >
                {item.name}
              </a>
            ))}
          </div>
        </nav>

        {/* Mobile Menu Dialog */}
        <Dialog
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
          className="lg:hidden"
        >
          <div className="fixed inset-0 z-50" />
          <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <img
                  alt=""
                  src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                  className="h-8 w-auto"
                />
              </a>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon aria-hidden="true" className="h-6 w-6" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </header>

      <main>
        {/* Hero section */}
        <div
          id="home"
          className="relative isolate overflow-hidden bg-gray-900 pb-16 pt-14 sm:pb-20 min-h-screen flex items-center"
        >
          <img
            alt=""
            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2830&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply"
            className="absolute inset-0 -z-10 h-full w-full object-cover"
          />
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-5xl py-20 sm:py-32 lg:py-40">
              <div className="text-center">
                <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
                  Kami Menyediakan Solusi Internet dan Solusi IT Terbaik untuk
                  Bisnis Anda
                </h1>

                <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-x-6">
                  <a
                    href="#about"
                    className="w-full sm:w-auto rounded-md bg-indigo-500 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400 transition-colors"
                  >
                    About Us
                  </a>
                  <a
                    href="#contact"
                    className="w-full sm:w-auto text-sm font-semibold leading-6 text-white hover:text-indigo-300 transition-colors text-center"
                  >
                    Contact Us <span aria-hidden="true">→</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* About section */}
        <About />
        <div className=" h-screen flex items-center justify-center">
          <ValueSection />
        </div>
        {/* Product section */}
        <ITProductsServices />
        {/* Stats section */}
        <div className="mt-25 h-[85%] flex items-center justify-center">
          <Stats />
        </div>
        {/* Testimonials section */}
        <Testimonials />
      </main>

      {/* Footer */}
      <footer
        id="contact"
        aria-labelledby="footer-heading"
        className="mt-25 bg-gray-900 sm:mt-56"
      >
        <h2 id="footer-heading" className="sr-only">
          Footer
        </h2>
        <div className="flex flex-col mx-auto max-w-7xl px-6 py-13 sm:py-21 lg:px-8 lg:py-29">
          <div className="text-white">
            <h3 className="text-lg font-semibold leading-6 text-white">
              Head Office
            </h3>
            <p className="mt-4 text-sm text-gray-300 flex flex-wrap w-full sm:w-[40%] text-justify">
              Graha Raya, Ruko Silktown Avenue, Blok RK/5A-05, Desa/Kelurahan
              Pondok Jagung Timur, Kec. Serpong Utara, Kota Tangerang Selatan,
              Provinsi Banten
            </p>
          </div>

          <div className="text-white mt-6">
            <h3 className="text-lg font-semibold leading-6 text-white">
              Hubungi Kami
            </h3>
            <div className="mt-4 text-sm text-gray-300 flex flex-col space-y-4 sm:w-[60%]">
              <div className="flex flex-col">
                <span className="font-medium text-gray-300">Email</span>
                <span className="text-gray-400">
                  info@fajarmediapratama.com
                </span>
              </div>
              <div className="flex flex-col">
                <span className="font-medium text-gray-300">Telepon</span>
                <Link
                  to="https://wa.me/62895341946772"
                  className="text-gray-400"
                >
                  081280330406
                </Link>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-10 pt-6 border-t border-gray-700 text-left text-sm text-gray-400">
            <p>
              &copy; {new Date().getFullYear()} Nusanet Media Mandiri. All
              rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
