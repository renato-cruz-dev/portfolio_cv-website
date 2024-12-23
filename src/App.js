import "./reset.css";
import "./index.css";
import "./App.css";
import data from "./data.json";

//Import components
import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";
import WrapperSection from "./pages/WrapperSection/WrapperSection";
import AboutSection from "./pages/AboutSection/AboutSection";
import CookSection from "./pages/CookSection/CookSection";
import DevSection from "./pages/DevSection/DevSection";
import PortfolioSection from "./pages/PortfolioSection/PortfolioSection";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <section className="App">
      <Header />
      <NavBar />
      <WrapperSection />
      <AboutSection />
      <CookSection data={data.cook} />
      <DevSection data={data.dev} />
      <PortfolioSection data={data.dev.portfolio} />
      <Footer />
    </section>
  );
}

export default App;
