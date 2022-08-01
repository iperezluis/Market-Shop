import { Routes, Route, Navigate } from "react-router-dom";
import { MarketHome, ProductPage, ProfilePage } from "../pages";

export const MarketRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MarketHome />} />
      <Route path="/product/:id" element={<ProductPage />} />
      <Route path="/profile/:id" element={<ProfilePage />} />

      <Route path="/*" element={<Navigate to="/" />} />
    </Routes>
  );
};
