import React from "react";
import Tentang from "./components/Tentang";
import Harga from "./components/Harga";
import ProdukLayanan from "./components/ProdukLayanan";
import Footer from "./components/Footer";
import Testimoni from "./components/Testimoni";
import Hero from "./components/Hero";
import Header from "./components/Header";
import "./App.css";

export default function Example() {
  return (
    <div className="bg-white">
      <Header />
      <main>
        <Hero />
        <Tentang />
        <Harga />
        <ProdukLayanan />
        <Testimoni />
      </main>
      <Footer />
    </div>
  );
}
