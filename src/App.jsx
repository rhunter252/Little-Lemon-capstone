import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Nav from "./components/Nav/Nav";
import "./App.css";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Specials from "./pages/Specials";
import Order from "./pages/Order";
import Reservations from "./pages/Reservations";

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/specials" element={<Specials />} />
        <Route path="/reservations" element={<Reservations />} />
        <Route path="/order-online" element={<Order />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
