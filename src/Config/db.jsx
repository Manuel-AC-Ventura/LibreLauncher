import localforage from 'localforage';

export const saveDownloadPath = async (path) => {
  await localforage.setItem('downloadPath', path);
};

export const getDownloadPath = async () => {
  return await localforage.getItem('downloadPath');
};
