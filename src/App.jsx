import "./App.css";
import Download from "./components/Download";
import Faq from "./components/Faq";
import Hero from "./components/Hero";
import LongDistance from "./components/LongDistance";
import Navbar from "./components/Navbar";
import Routes from "./components/Routes";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Download />
      <LongDistance />
      <Routes />
      <Faq />
    </>
  );
}

export default App;
