import { BrowserRouter } from "react-router-dom";
import AboutUs from "./pages/AboutUs";
import NavBar from "./components/navbar/Navbar";
import Footer from "./pages/Footer";
import Join from "./pages/Join";
import Loading from "./pages/Header";
import Properties from "./pages/Properties";
import "react-scroll";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <section id="loading">
        <Loading />
      </section>
      <section id="properties">
        <Properties />
      </section>
      <section id="about-us">
        <AboutUs />
      </section>
      <section id="join">
        <Join />
      </section>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
