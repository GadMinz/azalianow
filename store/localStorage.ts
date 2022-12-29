export const updateLocalStorage = (key: string, data: any[]) => {
  const isServer = typeof window === "undefined";
  if (isServer) return;
  localStorage.setItem(key, JSON.stringify(data));
};
