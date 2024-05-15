import { useEffect, useContext } from 'react';
import { Header } from '../components/Header';
import { SearchContext } from '../context/SearchContext';

export const Search = ({ name }) => {
  const { inputRef } = useContext(SearchContext);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  return(
    <main className="flex-[11] bg-[#1b1b1b]">
      <Header page="Resultados da busca" />
    </main>
  )
}
