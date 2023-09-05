import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Nav from "./components/global/Nav";
import Footer from "./components/global/Footer";

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" Component={Home} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
