import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import Programs from "./Components/Programs/Programs";
import { Title } from "./Components/Title/Title";
import About from "./Components/About/About";
import { Campus } from "./Components/Campus/Campus";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import FileList from "./Components/Administration/Administration";

const App = () => {
  return (
    <div>
      <Navbar />
      <div id="hero">
        <Hero />
      </div>
      <div className="container">
        {/* <Title subtitle="Our Program" title="What we offer" />
        <Programs /> */}
        <div id="file-list">
          <Title title="Administrative Documents" />
          <FileList />
        </div>
        <div id="about">
          <Title title="Sejarah Terbentuknya Kohati" />
          <About />
        </div>
        <div id="campus">
          <Title subtitle="Gallery" title="Dokumentasi Aktivitas Kohati" />
          <Campus />
        </div>
        <div id="contact">
          <Title subtitle="Contact Us" title="Get in Touch" />
          <Contact />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default App;
