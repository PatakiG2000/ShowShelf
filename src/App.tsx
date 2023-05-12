import Navbar from "./Layout/Navbar";
import Alerts from "./Components/Alerts";
import { Routes, Route } from "react-router-dom";
import Home from "./Layout/pages/Home";
import Watchlist from "./Layout/pages/Watchlist";
import Tracklist from "./Layout/pages/Tracklist";
import Toplist from "./Layout/pages/Toplist";

function App() {
  return (
    <>
      <Navbar />
      <Alerts />
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
