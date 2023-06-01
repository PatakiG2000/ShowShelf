import Navbar from "./Layout/Navbar";
import React from "react";
import Alerts from "./Components/Alerts";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./Layout/pages/Home";
import Watchlist from "./Layout/pages/Watchlist";
import Tracklist from "./Layout/pages/Tracklist";
import Toplist from "./Layout/pages/Toplist";
import BasicModal from "./Components/BasicModal";
import { AnimatePresence } from "framer-motion";

function App() {
  const location = useLocation();
  return (
    <>
      <Navbar />
      <Alerts />
      <BasicModal />
      <AnimatePresence>
        <Routes location={location} key={location.pathname}>
          <Route path="*" element={<Home />} />
          <Route path="/watchlist" element={<Watchlist />} />
          <Route path="/tracklist" element={<Tracklist />} />
          <Route path="/toplist" element={<Toplist />} />
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;
