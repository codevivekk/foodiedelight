import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "./App.css";
import { Header } from "./component";
import { AddResturant, HomePage } from "./pages";

function App() {
  return (
    <div className="App font-body bg-zinc-50">
      <ToastContainer />
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/add-resturant" element={<AddResturant />} />
        <Route path="/resturant/:id" element={<AddResturant />} />
      </Routes>
    </div>
  );
}

export default App;
