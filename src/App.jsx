import "./App.css";
import Download from "./components/Download";
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
      {/* <Accordian>
        <AccordianItem value="1" trigger="Item 1">
          <p>Content 1</p>
        </AccordianItem>
        <AccordianItem value="2" trigger="Item 2">
          <p>Content 2</p>
        </AccordianItem>
        <AccordianItem value="3" trigger="Item 3">
          <p>Content 3</p>
        </AccordianItem>
      </Accordian> */}
    </>
  );
}

export default App;
