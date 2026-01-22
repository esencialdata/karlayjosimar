import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Details from "@/components/Details";
import ImageGallery from "@/components/ImageGallery";
import Collections from "@/components/Collections";
import Location from "@/components/Location";
import DressCode from "@/components/DressCode";
import Agenda from "@/components/Agenda";
import RSVP from "@/components/RSVP";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-black min-h-screen text-white selection:bg-white selection:text-black flex flex-col">
      <Navigation />

      <div id="hero">
        <Hero />
      </div>

      <Details />

      <ImageGallery />

      <Collections />

      <div id="ubicacion">
        <Location />
      </div>

      <div id="dresscode">
        <DressCode />
      </div>

      <Agenda />

      <div id="rsvp">
        <RSVP />
      </div>

      <Footer />
    </main>
  );
}
