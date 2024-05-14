import { useEffect, useState } from 'react';
import { open } from "@tauri-apps/api/dialog";
import { Header } from '../components/Header.jsx';
import { downloadDir } from '@tauri-apps/api/path';
import { saveDownloadPath, getDownloadPath } from '../Config/db.jsx';

export const Settings = () => {
  const [downloadPath, setDownloadPath] = useState('');

  useEffect(() => {
    const setDefaultDownloadPath = async () => {
      let path = await getDownloadPath();
      if (!path) {
        path = await downloadDir();
        saveDownloadPath(path);
      }
      setDownloadPath(path);
    };

    setDefaultDownloadPath();
  }, []);

  const selectDir = async () => {
    const selected = await open({
      directory: true,
      multiple: false,
      defaultPath: downloadPath
    });

    if (selected) {
      setDownloadPath(selected);
      saveDownloadPath(selected);
    }
  };

  return (
    <main className='flex-[11] bg-[#1b1b1b]'>
      <Header page="Settings" />
      
      <div className="p-6">
        <div className="bg-neutral-800 p-4 space-y-5 mx-auto rounded-lg shadow-sm shadow-black">
          <div className="space-x-3 space-y-2">
            <h2 className="px-3">Diretório dos Downloads</h2>
            <input 
              readOnly
              value={downloadPath}
              onClick={selectDir}
              className="form-input bg-neutral-900 w-5/6 text-sm outline-none p-2 rounded-md border-2 border-neutral-700 focus:ring-0"
            />

            <button className="py-2 px-4 rounded-lg border-2 border-neutral-700">Mudar</button>
          </div>

          <div className="px-4">
            <h2 className="mb-4">Notificações</h2>
            <div className="space-y-2">
              <div className="space-x-2">
                <input type="checkbox" name="" id="concludDownload" className="form-checkbox bg-neutral-900 checked:bg-black p-2 rounded focus:ring-0 focus:ring-offset-0 focus:outline-none" />
                <label className='cursor-pointer' htmlFor="concludDownload">Quando um download for concluído</label>
              </div>
              <div className="space-x-2">
                <input type="checkbox" name="" id="updateRepack" className="form-checkbox bg-neutral-900 checked:bg-black p-2 rounded focus:ring-0 focus:ring-offset-0 focus:outline-none" />
                <label className='cursor-pointer' htmlFor="updateRepack">Quando a lista de repacks for atualizada</label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
