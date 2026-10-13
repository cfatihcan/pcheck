import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MainLayout } from "../layouts/MainLayout";
import { HomePage } from "@/features/home/pages/HomePage";
import { QrMenuPage } from "@/features/qrmenu";



export function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
        </Route>

        {/* QR menü: ana sayfada linki yok, Navbar/Footer olmadan açılır */}
        <Route path="/qrmenu" element={<QrMenuPage />} />
      </Routes>
    </BrowserRouter>
  );
}