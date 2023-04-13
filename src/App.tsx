import Navbar from "./Layout/Navbar";
import Ratingform from "./Layout/Ratingform";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Layout/pages/Home";
import Watchlist from "./Layout/pages/Watchlist";
import Tracklist from "./Layout/pages/Tracklist";
import Toplist from "./Layout/pages/Toplist";

function App() {
  return (
    <>
      <Navbar />
      <Ratingform />

      <Routes>
        <Route path="*" element={<Home />} />
        <Route path="/watchlist" element={<Watchlist />} />
        <Route path="/tracklist" element={<Tracklist />} />
        <Route path="/toplist" element={<Toplist />} />
      </Routes>
    </>
  );
}

export default App;
