import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Nav from "./components/Nav/Nav";
import "./App.css";
import Home from "./pages/Home";
import Menu from "./pages/Menu/Menu";
import Menu from "./pages/Menu/Menu";
import Order from "./pages/Order";
import Reservations from "./pages/Reservations";
import { AlertProvider } from "./context/alertContext";
import Alert from "./components/Alert";
import { ChakraProvider } from "@chakra-ui/react";

function App() {
  return (
    <>
      <ChakraProvider>
        <AlertProvider>
          <main>
            <Nav />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/menu" element={<Menu />} />
              <Route path="/reservations" element={<Reservations />} />
              <Route path="/order-online" element={<Order />} />
            </Routes>
            <Footer />
            <Alert />
          </main>
        </AlertProvider>
      </ChakraProvider>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/reservations" element={<Reservations />} />
        <Route path="/order-online" element={<Order />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
