import { Header } from "../components/Header"
import { ArrowLeft, ArrowRight} from 'lucide-react';

export const Catalog = ()=>{
  return(
    <main className="flex-[11] bg-[#1b1b1b]">
      <Header page="Catálogo" />
      
      <div className="py-5 px-6 flex items-center justify-between border-b border-neutral-800">
      <p className="flex text-sm py-2 px-4 items-center cursor-pointer space-x-2 rounded-md border-2 border-neutral-800 hover:border-zinc-900 hover:bg-zinc-700">
          <ArrowLeft size={18} />
          <span>Página Anterior</span>
        </p>
        <p className="flex text-sm py-2 px-4 items-center cursor-pointer space-x-2 rounded-md border-2 border-neutral-800  hover:border-zinc-900 hover:bg-zinc-700">
          <span>Página Seguinte</span>
          <ArrowRight size={18} />
        </p>
      </div>
    </main>
  )
}