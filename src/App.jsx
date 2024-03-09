import "./App.css";
import Download from "./components/Download";
import Faq from "./components/Faq";
import Hero from "./components/Hero";
import LongDistance from "./components/LongDistance";
import Navbar from "./components/Navbar";
import Routes from "./components/Routes";
import Signature from "./components/Signature";
import SignatureDownload from "./components/SignatureDownload";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Download />
      <LongDistance />
      <Routes />
      <Faq />
      <Signature />
      <SignatureDownload />
    </>
  );
}

export default App;
