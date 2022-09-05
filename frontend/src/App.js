import "./App.css";
import InventoryPage from "./components/InventoryPage";
import LoginPage from "./components/Login";
import NotFound from "./components/NotFound";
import HomePage from "./components/HomePage";
import ContactPage from "./components/ContactPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import OrdersPage from "./components/OrdersPage";
import UpdateInventoryPage from "./components/UpdateInventoryPage";
import QRCode from "qrcode";
import { useState, useEffect } from "react";
import ViewQrCodesPage from "./components/ViewQrCodesPage";
function App({ text }) {
  const [src, setSrc] = useState("");
  useEffect(() => {
    QRCode.toDataURL(text).then((data) => {
      setSrc(data);
    });
  }, []);
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/contact" element={<ContactPage />} />
        <Route exact path="/login" element={<LoginPage />} />
        <Route exact path="/inventory" element={<InventoryPage />} />
        <Route exact path="/orders" element={<OrdersPage />} />
        <Route exact path="/inventory/qr/:tableId" element={<ViewQrCodesPage />} />
        <Route
          exact
          path="/inventory/:tableId/:itemId"
          element={<UpdateInventoryPage />}
        />
        <Route exact path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
