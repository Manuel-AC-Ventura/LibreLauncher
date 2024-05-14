import { ArrowLeft } from 'lucide-react';
import { FaMagnifyingGlass } from "react-icons/fa6";

export const Header = ({ page }) => {
  return (
    <header className='w-full flex items-center justify-between p-6 bg-neutral-900 border-b-2 border-neutral-800'>
      <h1 className="flex space-x-2 text-xl font-black">
        <ArrowLeft />
        <span>{page}</span>
      </h1>

      <form className="flex px-3 gap-1 items-center rounded-lg border-2 border-neutral-800">
        <FaMagnifyingGlass color="#aeafb4" size={14} />

        <input 
          type="text" 
          placeholder='Buscar' 
          className='bg-transparent text-sm p-2 border-0 outline-none'  
        />
      </form>
    </header>
  )
}
