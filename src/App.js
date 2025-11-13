import { BrowserRouter } from "react-router-dom";
import AboutUs from "./pages/AboutUs";
import NavBar from "./components/navbar/Navbar";
import Footer from "./pages/Footer";
import Join from "./pages/Join";
import Loading from "./pages/Header";
import Properties from "./pages/Properties";
import "react-scroll";
import {useEffect, useState} from "react";

function App() {
    const [properties,setProperties] = useState([])
    useEffect(() => {
        getProperties();
    },[])
    const getProperties = async () => {
        try {
            const data = await fetch(
                `${process.env.REACT_APP_HF}/api/client/properties`
            );
            if (data.status !== 200) {
                throw Error("Failed to fetch")
            }
            const result = await data.json()
            setProperties(result)

        } catch (e) {
            console.error(e)
        }
    }

    return (
    <BrowserRouter>
      <NavBar />
      <section id="loading">
        <Loading properties={properties}/>
      </section>
      <section id="properties">
        <Properties properties={properties}/>
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
