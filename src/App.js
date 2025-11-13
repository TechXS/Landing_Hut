import { BrowserRouter } from "react-router-dom";
import AboutUs from "./pages/AboutUs";
import NavBar from "./components/navbar/Navbar";
import Footer from "./pages/Footer";
import Join from "./pages/Join";
import Loading from "./pages/Header";
import "react-scroll";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <section id="hero">
        <Loading />
      </section>
      <section id="about">
        <AboutUs />
      </section>
      <section id="features">
        <Join />
      </section>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
