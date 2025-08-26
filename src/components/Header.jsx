import React, { useEffect, useState, Fragment } from "react";
import { Dialog, DialogPanel, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const navigation = [
  { name: "Beranda", href: "#home" },
  { name: "Tentang", href: "#about" },
  { name: "Harga", href: "#price" },
  { name: "Layanan", href: "#produk" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isScrolledPast, setIsScrolledPast] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolledPast(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [mobileOpen]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-300
        ${
          isScrolledPast
            ? "bg-white/90 supports-[backdrop-filter]:bg-white/70 backdrop-blur border-gray-200 shadow-md"
            : "bg-white/80 border-transparent"
        }
        overflow-x-hidden   /* ⬅️ cegah scroll horizontal */
      `}
    >
      <nav aria-label="Global">
        <div className="mx-auto w-full max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <div className="relative flex h-16 sm:h-[70px] items-center justify-between">
            <div className="flex flex-1 min-w-0">
              <a
                href="#home"
                className="inline-flex items-center gap-2 p-1.5 shrink-0"
              >
                <span className="text-lg font-bold text-gray-900">
                  Nusameri
                </span>
              </a>
            </div>

            <div className="hidden lg:flex flex-1 justify-center gap-x-8 min-w-0">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-sm font-medium text-gray-700 hover:text-orange-600 transition-colors whitespace-nowrap"
                >
                  {item.name}
                </a>
              ))}
            </div>

            <div className="hidden lg:flex flex-1 justify-end min-w-0">
              <a
                href="#contact"
                className="inline-flex items-center rounded-xl bg-orange-500 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-orange-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500 transition-colors shrink-0"
              >
                Hubungi Kami
              </a>
            </div>

            <div className="flex lg:hidden shrink-0">
              <button
                type="button"
                onClick={() => setMobileOpen(true)}
                className="inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500"
              >
                <span className="sr-only">Open main menu</span>
                <Bars3Icon aria-hidden="true" className="h-6 w-6 shrink-0" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      <Transition show={mobileOpen} as={Fragment}>
        <Dialog open={mobileOpen} onClose={setMobileOpen} className="lg:hidden">
          <Transition.Child
            as={Fragment}
            enter="transition-opacity duration-200"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity duration-150"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm" />
          </Transition.Child>

          <Transition.Child
            as={Fragment}
            enter="transition duration-200 ease-out"
            enterFrom="translate-x-full"
            enterTo="translate-x-0"
            leave="transition duration-150 ease-in"
            leaveFrom="translate-x-0"
            leaveTo="translate-x-full"
          >
            <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full max-w-sm overflow-y-auto overflow-x-hidden bg-white px-6 py-6 shadow-xl ring-1 ring-gray-900/10">
              <div className="flex items-center justify-between">
                <a href="#home" className="p-1.5 shrink-0">
                  <span className="sr-only">Nusameri</span>
                </a>
                <button
                  type="button"
                  onClick={() => setMobileOpen(false)}
                  className="rounded-md p-2.5 text-gray-700 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500"
                >
                  <span className="sr-only">Close menu</span>
                  <XMarkIcon aria-hidden="true" className="h-6 w-6 shrink-0" />
                </button>
              </div>

              <div className="mt-6">
                <div className="-my-6 divide-y divide-gray-200">
                  <div className="space-y-2 py-6">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="block rounded-lg px-3 py-2 text-base font-semibold text-gray-900 hover:bg-orange-50 hover:text-orange-700"
                        onClick={() => setMobileOpen(false)}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                  <div className="py-6">
                    <a
                      href="#contact"
                      className="block rounded-xl bg-orange-500 px-3 py-2.5 text-base font-semibold text-white text-center hover:bg-orange-400"
                      onClick={() => setMobileOpen(false)}
                    >
                      Hubungi Kami
                    </a>
                  </div>
                </div>
              </div>
            </DialogPanel>
          </Transition.Child>
        </Dialog>
      </Transition>
    </header>
  );
}
