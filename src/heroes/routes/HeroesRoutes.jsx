import { Navbar } from "../../ui/components/NavBar";
import { Route, Routes, Navigate } from "react-router-dom";

import { DcPage } from "../pages/DcPage";
import { HeroPage } from "../pages/HeroPage";
import { SearchPage } from "../pages/SearchPage";
import { MarvelPage } from "../pages/MarvelPage";

export const HeroesRoutes = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="marvel" element={<MarvelPage />} />
          <Route path="dc" element={<DcPage />} />
          <Route path="search" element={<SearchPage />} />
          <Route path="hero/:id" element={<HeroPage />} />
          <Route path="/" element={<Navigate to="marvel" />} />
        </Routes>
      </div>
    </>
  );
};
