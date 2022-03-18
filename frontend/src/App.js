import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import Navbar from "./Components/Navbar";
import MiniNav from "./Components/MiniNavbar";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import { useAuth } from "./Contexts/auth-context";
import Signup from "./Pages/Signup";
import Loader from "./Components/Loader";
import { useEffect } from "react";
import { loadUser } from "./Actions";
import NotFound from "./Pages/404";
import { GuestRoutes } from "./Utils/routes";
import Category from "./Pages/Category";
import Product from "./Pages/Product";
import Cart from "./Components/CartSteps";
import Wishlist from "./Pages/Wishlist";
// import Address from "./Components/Address";
function App() {
  const { loading, dispatch } = useAuth();
  const token = localStorage.getItem("token");
  useEffect(() => {
    if (token) {
      loadUser(dispatch);
    }
  }, [token, dispatch]);
  return (
    <Router>
      {loading ? (
        <Loader />
      ) : (
        <>
          <MiniNav />
          <Navbar />
          <Routes>
            {/* This Routes can be Accessed by Every Users. */}
            <Route path="/" element={<Home />} />
            <Route path="/categories/:category" element={<Category />} />
            <Route path="/product/:id" element={<Product />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/wishlist" element={<Wishlist />} />
            {/* <Route path="/address" element={<Address />} /> */}

            {/* This Routes can be only Accessed by Unauthenticated Users. */}
            <Route element={<GuestRoutes />}>
              <Route path="/signup" element={<Signup />} />
              <Route path="/login" element={<Login />} />
            </Route>

            {/* This is For The Routes who has been not registered to App. */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </>
      )}
    </Router>
  );
}

export default App;
