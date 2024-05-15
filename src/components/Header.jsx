import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { FaMagnifyingGlass } from "react-icons/fa6";

export const Header = ({ page }) => {
  const [search, setSearch] = useState('');

  return (
    <header className='w-full flex items-center justify-between p-6 bg-neutral-900 border-b-2 border-neutral-800'>
      <h1 className="flex space-x-2 text-xl font-black">
        <Link to="/"><ArrowLeft className='cursor-pointer' /></Link>
        <span>{page}</span>
      </h1>

      <div className="flex px-3 gap-1 items-center rounded-lg border-2 border-neutral-800">
        <FaMagnifyingGlass color="#aeafb4" size={14} />

        <input 
          type="search" 
          value={search}
          placeholder='Buscar'
          onChange={(e) => setSearch(e.target.value)}
          className='bg-transparent text-sm p-2 border-0 outline-none'  
        />
      </div>
    </header>
  )
}
