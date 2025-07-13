
import { createContext, useContext, useState } from 'react';

const FavouritesContext = createContext();

export const useFavourites = () => {
  const context = useContext(FavouritesContext);
  if (!context) {
    throw new Error('useFavourites must be used within a FavouritesProvider');
  }
  return context;
};

export const FavouritesProvider = ({ children }) => {
  const [favourites, setFavourites] = useState([]);

  const addToFavourites = (item) => {
    setFavourites(prev => {
      if (prev.find(fav => fav.id === item.id)) {
        return prev; // Item already in favourites
      }
      return [...prev, item];
    });
  };

  const removeFromFavourites = (id) => {
    setFavourites(prev => prev.filter(item => item.id !== id));
  };

  const isFavourite = (id) => {
    return favourites.some(item => item.id === id);
  };

  const getTotalFavourites = () => {
    return favourites.length;
  };

  const value = {
    favourites,
    addToFavourites,
    removeFromFavourites,
    isFavourite,
    getTotalFavourites
  };

  return (
    <FavouritesContext.Provider value={value}>
      {children}
    </FavouritesContext.Provider>
  );
};
