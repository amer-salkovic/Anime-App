import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutUs from "./pages/AboutUs.jsx";
import Home from "./pages/Home.jsx";
import Favorites from "./pages/Favorites.jsx";
import Manga from "./pages/Manga.jsx";
import Anime from "./pages/Anime.jsx";
import Layout from "./components/layout.jsx"
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
    <Route path="anime" element={<Anime />} />
    <Route path="manga" element={<Manga />} />
    <Route path="favorites" element={<Favorites />} />
    <Route path="about-us" element={<AboutUs />} />
  </Route>
</Routes>

    </BrowserRouter>
  );
}

export default App;
