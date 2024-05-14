import { Home } from "./pages/Home"
import { Aside } from "./components/Aside"
import { Settings } from "./pages/Settings"
import { NotFound } from "./pages/NotFound"
import { Downloads } from "./pages/Downloads"
import { BrowserRouter, HashRouter, Routes, Route } from "react-router-dom"

export const Router = ()=>{
  return(
    <BrowserRouter>
      <Aside />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Settings" element={<Settings />} />
        <Route path="/Downloads" element={<Downloads />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}
