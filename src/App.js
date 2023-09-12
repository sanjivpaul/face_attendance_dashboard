import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import "./app.css"
import Home from "./pages/home/Home";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Routes, Route, Navigate } from "react-router-dom";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import ProductList from "./pages/productList/ProductList";
import Product from "./pages/product/Product";
import NewProduct from "./pages/newProduct/NewProduct";
import Login from "./pages/login/Login";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";

function App() {

  // const currentUser = false;
  const {currentUser} = useContext(AuthContext);

  const RequireAuth = ({ children }) => {
    return currentUser ? children : <Navigate to="/login" />
  }

  console.log(currentUser);
  
  return (
    <>
      <Topbar />
      <div className="container">
        <Sidebar />
        <Routes>
          <Route path="/" element={<RequireAuth><Home /></RequireAuth>} />
          <Route path="/users" element={<RequireAuth><UserList /></RequireAuth>} />
          <Route path="/user/:userId" element={ <RequireAuth><User /></RequireAuth>} />
          <Route path="/newUser" element={<RequireAuth><NewUser /></RequireAuth>} />
          <Route path="/products" element={<RequireAuth><ProductList /></RequireAuth>} />
          <Route path="/product/:productId" element={<Product />} />
          <Route path="/newproduct" element={<NewProduct />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </>

  );
}

export default App;
