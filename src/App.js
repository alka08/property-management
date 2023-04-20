import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Home from "./Components/Landing-Page/Home";
import { Routes, Route } from "react-router-dom";
import Register from "./Components/Landing-Page/Register";
import Login from "./Components/Landing-Page/Login";
import SellerDashboard from "./Components/Seller/SellerDashboard";
import Card from "./Components/Seller/Card";
import BuyerDashborad from "./Components/Buyer/BuyerDashborad";
import Properties_Explored from "./Components/Buyer/Properties_Explored";
import List_all_orders from "./Components/Buyer/List_all_orders";
import Admin from "./Components/Admin/Admin";
import ErrorPage from "./Components/ErrorPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/admin" element={<Admin />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/seller/dashboard" element={<SellerDashboard />} />
        <Route exact path="/card" element={<Card />} />
        <Route exact path="/buyer/dashboard" element={<BuyerDashborad />}>
          <Route exact path="/buyer/dashboard/properties_explored" element={<Properties_Explored />}/>
          <Route exact path="/buyer/dashboard/List_all_orders" element={<List_all_orders />}/>
        </Route>
        <Route path="*" element={ <ErrorPage/> }/>
      </Routes>
    </div>
  );
}

export default App;
