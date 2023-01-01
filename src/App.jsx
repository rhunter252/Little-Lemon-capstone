import { BrowserRouter } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home";
import Nav from "./components/Nav/Nav";
import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Home />
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
