import Head from "next/head";
import About from "@/pages/components/About";
import Product from "@/pages/components/Product";
import Benefits from "./components/Benefits";
import Gallery from "./components/Gallery";
import Testimonials from "./components/Testimonials";
import CTA from "./components/CTA";
import Blog from "./components/Blog";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <Head>
        <title>Lush Garden</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Hero />
      <About />
      <Product />
      <Benefits />
      <Gallery />
      <Testimonials />
      <CTA />
      <Blog />
      <Footer />
    </>
  );
}
