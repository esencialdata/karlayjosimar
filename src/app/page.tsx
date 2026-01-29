import Hero from "@/components/Hero";
import SectionAbout from "@/components/SectionAbout"; // New Intro
import DateHero from "@/components/DateHero"; // New DateHero component
import Countdown from "@/components/Countdown";
import Location from "@/components/Location"; // Events
import Agenda from "@/components/Agenda";
import DressCode from "@/components/DressCode";
import RSVP from "@/components/RSVP";
import DressCodeReference from "@/components/DressCodeReference";
import SectionGallery from "@/components/SectionGallery";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-white min-h-screen flex flex-col w-full overflow-x-hidden selection:bg-taupe selection:text-white">

      <div id="hero">
        <Hero />
      </div>

      <div id="intro">
        <SectionAbout />
      </div>

      <DateHero />

      <Countdown />

      <Location />

      <Agenda />

      <DressCode />

      <DressCodeReference />

      <SectionGallery />

      <RSVP />

      <Footer />
    </main>
  );
}
