import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import MoreSamples from "./pages/MoreSamples/Samples";
import ContactSample from "./pages/MoreSamples/ContactSample";
import Showreels from "./pages/MoreSamples/showreels";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/moresamples" exact element={<MoreSamples />} />
        <Route path="/contact" exact element={<ContactSample />} />
        <Route path="/showreels" exact element={<Showreels />} />
      </Routes>
    </>
  );
}

export default App;
