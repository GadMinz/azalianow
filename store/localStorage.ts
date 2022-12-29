
export const updateLocalStorage = (key: string, data: any[]) => {
    localStorage.setItem(key, JSON.stringify(data));
};
