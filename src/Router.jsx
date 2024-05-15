import { Home } from "./pages/Home"
import { Search } from "./pages/Search"
import { Catalog } from "./pages/Catalog"
import { Aside } from "./components/Aside"
import { Settings } from "./pages/Settings"
import { NotFound } from "./pages/NotFound"
import { Downloads } from "./pages/Downloads"
import { HashRouter, Routes, Route } from "react-router-dom" 

export const Router = ()=>{
  return(
    <HashRouter>
      <Aside />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Search/:name" element={<Search />} />
        <Route path="/Catalog" element={<Catalog />} />
        <Route path="/Downloads" element={<Downloads />} />
        <Route path="/Settings" element={<Settings />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </HashRouter>
  )
}
