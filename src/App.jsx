import { BrowserRouter, Routes, Route } from "react-router-dom";
import Product from "./pages/Product";
import Pricing from "./pages/Pricing";
import PageNotFound from "./pages/PageNotFound";
import Homepage from "./pages/Homepage";
import Login from "./pages/Login";

import "./App.css";
import AppLayout from "./pages/AppLayout";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Homepage />} />
        <Route path="/product" element={<Product />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/app" element={<AppLayout />}>
          <Route index path="cities" element={<p>cities</p>} />
          <Route path="countries" element={<p>countries</p>} />
          <Route path="form" element={<p>Form</p>} />
        </Route>
        <Route path="/" element={<Homepage />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
