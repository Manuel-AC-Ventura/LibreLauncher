import { useState } from "react";

export const Container = () => {
  const [activeOption, setActiveOption] = useState("Populares");

  return (
    <div className="w-full p-6 space-y-8">
      <div className="space-y-3">
        <h1 className="text-2xl font-black">Destaque</h1>
        
        <div className="w-full h-64 bg-[url('fallout4.png')] bg-cover rounded-lg" ></div>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex gap-3">
          <span 
            onClick={() => setActiveOption("Populares")} 
            className={`py-2 px-4 rounded-md border-2 cursor-pointer transition-all ${activeOption === "Populares" ? 'bg-zinc-300 text-black border-zinc-300' : 'border-neutral-800 hover:bg-zinc-800'}`}
          >
            Populares
          </span>
          <span 
            onClick={() => setActiveOption("Novidades")} 
            className={`py-2 px-4 rounded-md border-2 cursor-pointer transition-all ${activeOption === "Novidades" ? 'bg-zinc-300 text-black border-zinc-300' : 'border-neutral-800 hover:bg-zinc-800'}`}
          >
            Novidades
          </span>
        </div>

        <div>
          <span className="py-3 px-4 rounded-md cursor-pointer border-2 border-neutral-800 hover:border-neutral-700">
            <span className="animate-pulse">✨</span> Me surpeenda
          </span>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-black">{activeOption}</h2>
      </div>
    </div>
  )
}
