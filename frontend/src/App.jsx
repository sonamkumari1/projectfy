import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import { ToastContainer } from "react-toastify";
import AddSellerForm from "./sell/AddSellerForm";

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      {/* seller */}
      <Route path="/sellerform" element={<AddSellerForm />} />
    </Routes>
     <ToastContainer />
    </>
  );
}

export default App;
