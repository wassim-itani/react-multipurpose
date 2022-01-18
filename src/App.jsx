import Navbar from "./components/Navbar";
import About from "./sections/About";
import Services from "./sections/Services";
import Blogs from "./sections/Blogs";
import Hero from "./sections/Hero";
import Testimonials from "./sections/Testimonials";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Testimonials />
      <Blogs />
      <Footer />
    </>
  );
};

export default App;
