import "./App.css";
import Navbar from "./components/Navbar";
import Accordian, { AccordianItem } from "./components/ui/Accordian";

function App() {
  return (
    <>
      <Navbar />
      <Accordian>
        <AccordianItem value="1" trigger="Item 1">
          <p>Content 1</p>
        </AccordianItem>
        <AccordianItem value="2" trigger="Item 2">
          <p>Content 2</p>
        </AccordianItem>
        <AccordianItem value="3" trigger="Item 3">
          <p>Content 3</p>
        </AccordianItem>
      </Accordian>
    </>
  );
}

export default App;
