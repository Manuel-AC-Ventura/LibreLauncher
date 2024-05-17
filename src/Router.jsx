import { Home } from "./pages/Home"
import { Game } from "./pages/Game"
import { Search } from "./pages/Search"
import { Catalog } from "./pages/Catalog"
import { Aside } from "./components/Aside"
import { Settings } from "./pages/Settings"
import { NotFound } from "./pages/NotFound"
import { Downloads } from "./pages/Downloads"
import { HashRouter, Routes, Route } from "react-router-dom";

export const Router = () => {
  return (
    <HashRouter>
      <Aside />
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/Search/:name" Component={Search} />
        <Route path="/Game/:id" Component={Game} />
        <Route path="/Catalog" Component={Catalog} />
        <Route path="/Downloads" Component={Downloads} />
        <Route path="/Settings" Component={Settings} />
        <Route path="*" Component={NotFound} />
      </Routes>
    </HashRouter>
  );
}
