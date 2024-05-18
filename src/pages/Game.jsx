import { invoke } from "@tauri-apps/api";
import { useState, useEffect } from "react";
import { Header } from "../components/Header";
import { IoMdAddCircleOutline } from "react-icons/io";
import { useParams, useNavigate } from "react-router-dom";

export const Game = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [game, setGame] = useState();
  const [requirementsType, setRequirementsType] = useState('minimum');

  useEffect(() => {
    const fetchGame = async () => {
      if (isNaN(id) || id === undefined || id === null || id === "") {
        navigate('/');
      }

      try {
        const gameId = parseInt(id, 10);
        const gameData = await invoke('fetch_game_by_id', { gameId });
        setGame(gameData);
      } catch (error) {
        console.error("Failed to fetch game data:", error);
      }
    };
    fetchGame();
  }, [id, navigate]);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const formattedDate = date.toLocaleDateString();
    return formattedDate;
  };

  const firstPublisher = game && game.publishers && game.publishers.length > 0 ? game.publishers[0].name : "";

  const handleRequirementsTypeChange = (type) => {
    setRequirementsType(type);
  };

  const getRequirements = () => {
    if (game && game.platforms && game.platforms.length > 0) {
      const pcPlatform = game.platforms.find(p => p.platform.slug === 'pc');
      if (pcPlatform && pcPlatform.requirements) {
        return requirementsType === 'minimum' ? pcPlatform.requirements.minimum : pcPlatform.requirements.recommended;
      }
    }
    return '';
  };

  return (
    <main className='bg-[#1b1b1b] container overflow-hidden flex-[11] flex flex-col h-screen'>
      {game && (
        <>
          <Header page={game.name} />
          <div className="overflow-y-auto flex-grow">
            <div className={`w-full h-80 bg-cover flex items-end`} style={{ backgroundImage: `url(${game.background_image})` }}>
              <div className="w-full flex items-center justify-between p-4 bg-black/80 text-sm">
                <p className="text-neutral-100">Atualizado {formatDate(game.updated)}</p>

                <div className="flex space-x-2">
                  <p className="flex space-x-2 items-center px-2 py-3 rounded-md border border-neutral-500 hover:bg-neutral-500/30">
                    <IoMdAddCircleOutline size={20} />
                    <span>Adicionar à biblioteca</span>
                  </p>
                  <p className="px-2 py-3 rounded-md border border-neutral-500 hover:bg-neutral-500/30">Ver opções de download</p>
                </div>
              </div>
            </div>

            <div>
              <div className="flex bg-neutral-800 space-x-6">
                <div className="w-full p-4 flex-[9] text-neutral-400 text-sm space-y-2 border-r border-neutral-700">
                    <p>Lançado em {game.released}</p>
                    <p>Publicado por {firstPublisher}</p>
                </div>
                <p className="flex-[3] flex items-center font-black text-neutral-300">Requisitos do sistema</p>
              </div>

              <div className="flex space-x-6">
                <p className="flex-[9] border-r border-neutral-700 p-4" dangerouslySetInnerHTML={{ __html: game.description }}></p>
                
                <div className="flex-[3] flex flex-col">
                  <div className="flex px-2">
                    <p className={`w-full border border-neutral-700 p-2 ${requirementsType === 'minimum' ? 'bg-neutral-500' : ''}`} onClick={() => handleRequirementsTypeChange('minimum')}>Mínimos</p>
                    <p className={`w-full border border-neutral-700 p-2 ${requirementsType === 'recommended' ? 'bg-neutral-500' : ''}`} onClick={() => handleRequirementsTypeChange('recommended')}>Recomendados</p>
                  </div>
                  <p className="p-2">{getRequirements()}</p>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </main>
  );
};
