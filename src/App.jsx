
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "@/components/ui/toaster";
import { AuthProvider } from "@/contexts/AuthContext";
import { CartProvider } from "@/contexts/CartContext";
import { FavouritesProvider } from "@/contexts/FavouritesContext";
import { Layout } from "@/components/Layout";

// Pages
import Index from "@/pages/Index";
import Login from "@/pages/Login";
import MyOrders from "@/pages/MyOrders";
import NotFound from "@/pages/NotFound";
import Shop from "@/pages/Shop";
import ProductDetail from "@/pages/ProductDetail";
import Admin from "@/pages/Admin";
import Favourites from "@/pages/Favourites";

function App() {
  console.log("App component is rendering");
  
  return (
    <AuthProvider>
      <CartProvider>
        <FavouritesProvider>
          <Router>
            <div className="min-h-screen bg-background text-foreground">
              <Routes>
                <Route path="/" element={<Layout><Index /></Layout>} />
                <Route path="/login" element={<Layout><Login /></Layout>} />
                <Route path="/shop" element={<Layout><Shop /></Layout>} />
                <Route path="/product/:productId" element={<Layout><ProductDetail /></Layout>} />
                <Route path="/my-orders" element={<Layout><MyOrders /></Layout>} />
                <Route path="/admin" element={<Layout><Admin /></Layout>} />
                <Route path="/favourites" element={<Layout><Favourites /></Layout>} />
                <Route path="*" element={<Layout><NotFound /></Layout>} />
              </Routes>
              <Toaster />
            </div>
          </Router>
        </FavouritesProvider>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;
