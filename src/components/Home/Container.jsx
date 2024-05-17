import { Link } from "react-router-dom"
import { FaSteam } from "react-icons/fa6"
import { useEffect, useState } from 'react';
import { invoke } from "@tauri-apps/api/tauri";

export const Container = () => {
  const [games, setGames] = useState([]);
  const [activeOption, setActiveOption] = useState("Populares");

  useEffect(()=>{
    const fetchGames = async ()=>{
      const gamesList = await invoke("fetch_games");
      setGames(gamesList);
    }
    fetchGames();
  }, [])

  console.log(games)

  return (
    <div className="w-full overflow-y-auto flex-grow p-6 space-y-8">
      <div className="space-y-3">
        <h1 className="text-2xl font-black">Destaque</h1>
        
        <div className="w-full h-64 bg-[url('fallout4.png')] bg-cover rounded-lg" ></div>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex gap-3">
          {["Populares", "Novidades"].map(option => (
            <span 
              key={option}
              onClick={() => setActiveOption(option)} 
              className={`py-2 px-4 rounded-md border-2 cursor-pointer transition-all ${activeOption === option ? 'bg-zinc-300 text-black border-zinc-300' : 'border-neutral-800 hover:bg-zinc-800'}`}
            >
              {option}
            </span>
          ))}
        </div>

        <div>
          <span className="py-3 px-4 rounded-md cursor-pointer border-2 transition-all border-neutral-800 hover:bg-zinc-800 hover:border-neutral-700">
            <span className="animate-pulse">✨</span> Me surpeenda
          </span>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-black">{activeOption}</h2>
      </div>

      <div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {games.map((game, index)=>(
            <Link className={`w-full h-44 cursor-pointer bg-cover rounded-lg backdrop-filter backdrop-blur-xl`} style={{backgroundImage: `url(${game.background_image})`}}>
              <div className="flex space-x-2 items-end w-full h-full bg-black/40 rounded-lg px-5 py-3">
                <div className="flex space-x-2 items-center text-gray-200">
                  <FaSteam />
                  <h3 className="font-semibold">{game.name}</h3>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
