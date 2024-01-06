import AboutMePage from "@/components/AboutMe";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Project from "@/components/Project";
import Skill from "@/components/Skill";
import Image from "next/image";
import Header from "@/components/Header";
export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Skill />
      <Project />
      <AboutMePage />
      <Footer />
    </>
  );
}
