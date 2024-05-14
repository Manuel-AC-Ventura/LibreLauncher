import { Link } from "react-router-dom";
import { FaXTwitter, FaDiscord, FaGithub } from "react-icons/fa6"
import { Home, LayoutGrid, Download, Settings } from "lucide-react"

export const Aside = () => {
  const menu = [
    { icon: <Home size={20} />, label: "Home", path: "/"},
    { icon: <LayoutGrid size={20} />, label: "Catálogo", path: "Catalog"},
    { icon: <Download size={20} />, label: "Downloads", path: "Downloads"},
    { icon: <Settings size={20} />, label: "Configurações", path: "Settings"},
  ]

  return (
    <aside className="flex-[2] p-4 w-full min-h-screen space-y-12 border-r-2 border-neutral-800">
      <h1 className="text-xl font-black mt-3">
      <Link to="/">LibreLauncher</Link>
      </h1>

      <ul className="space-y-4">
        {menu.map((item, index) => (
          <li key={index} className="flex items-center gap-2 cursor-pointer">
            {item.icon}
            <Link to={item.path}>{item.label}</Link>
          </li>
        ))}
      </ul>

      <div className="space-y-2">
        <h2 className="text-sm font-black">MINHA BIBLIOTECA</h2>
        <input 
          type="text" 
          placeholder="Filtrar biblioteca" 
          className="bg-neutral-800 w-full text-sm outline-none p-2 rounded-md border-2 border-neutral-700 focus:ring-0 focus:ring-offset-0 focus:outline-none"
        />
      </div>

    </aside>
  )
}
