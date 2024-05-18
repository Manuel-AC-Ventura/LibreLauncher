import { ArrowLeft } from 'lucide-react';
import { useContext, useEffect, useCallback } from 'react';
import { FaMagnifyingGlass } from "react-icons/fa6";
import { SearchContext } from '../context/SearchContext';
import { Link, useNavigate, useLocation } from 'react-router-dom';

const handleSearchChange = (e, setSearch, location, setPreviousUrl, navigate) => {
  const value = e.target.value;
  setSearch(value);

  if (value) {
    if (!location.pathname.startsWith('/Search')) {
      setPreviousUrl(location.pathname);
    }
    navigate(`/Search/${value}`);
  } else if (location.pathname.startsWith('/Search')) {
    navigate(previousUrl); 
  }
};

export const Header = ({ page }) => {
  const { search, setSearch, previousUrl, setPreviousUrl, inputRef } = useContext(SearchContext);
  const navigate = useNavigate();
  const location = useLocation();

  const onSearchChange = useCallback((e) => handleSearchChange(e, setSearch, location, setPreviousUrl, navigate), 
    [setSearch, location, setPreviousUrl, navigate]);

  useEffect(() => {
    if (location.pathname.startsWith('/Search') && !search) {
      navigate(previousUrl);
    }
  }, [location.pathname, search, navigate, previousUrl]);

  return (
    <header className='w-full flex items-center justify-between p-6 bg-neutral-900 border-b-2 border-neutral-800'>
      <h1 className="flex space-x-2 text-xl font-black">
        <Link to="/"><ArrowLeft className='cursor-pointer' /></Link>
        <span>{page}</span>
      </h1>
      <div className="flex px-3 gap-1 items-center rounded-lg border-2 border-neutral-800">
        <FaMagnifyingGlass color="#aeafb4" size={14} />
        <input 
          ref={inputRef}
          type="search" 
          value={search}
          placeholder='Buscar'
          onChange={onSearchChange}
          className='bg-transparent text-sm p-2 border-0 outline-none'  
        />
      </div>
    </header>
  );
};
