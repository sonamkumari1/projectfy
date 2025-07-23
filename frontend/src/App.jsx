import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import { ToastContainer } from "react-toastify";
import AddSellerForm from "./sell/AddSellerForm";
import AllSellersTable from "./sell/AllSellersTable";
import SellerDashboard from "./sell/SellerDashboard"
import Projects from "./User/Projects";
import ViewProjects from "./User/ViewProjects";

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      {/* user */}
       <Route path="/projects/:category" element={<Projects />} />
        <Route path="/projects/view/:id" element={<ViewProjects />} />

      {/* seller */}
      <Route path="/sellerform" element={<AddSellerForm />} />
      <Route path="/allseller" element={<AllSellersTable />} />
      <Route path="/seller/dashboard" element={<SellerDashboard />} />
    </Routes>
     <ToastContainer />
    </>
  );
}

export default App;
