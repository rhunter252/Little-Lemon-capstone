import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Nav from "./components/Nav/Nav";
import "./App.css";
import Home from "./pages/Home";
import Menu from "./pages/Menu/Menu";
import Reservations from "./pages/Reservations";
import { AlertProvider } from "./context/alertContext";
import Alert from "./components/Alert";
import { ChakraProvider } from "@chakra-ui/react";

function App() {
  return (
    <>
      <ChakraProvider>
        <AlertProvider>
          <main
            style={{
              height: "100%",
              backgroundImage: "url('../../assets/img/body-bg-pattern.png')",
              backgroundRepeat: "repeat",
              margin: "0 auto",
              overflow: "hidden",
            }}
          >
            <Nav />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/menu" element={<Menu />} />
              <Route path="/reservations" element={<Reservations />} />
            </Routes>
            <Footer />
            <Alert />
          </main>
        </AlertProvider>
      </ChakraProvider>
    </>
  );
}

export default App;
