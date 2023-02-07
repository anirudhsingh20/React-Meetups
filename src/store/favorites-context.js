import { createContext, useState } from "react";

const FavouritesContext = createContext({
  favorites: [],
  totalFavorites: 0,
  addFavorites: (favorite) => {},
  removeFavorites: () => {},
  itemIsFavorites: () => {},
});

export function FavouritesContextProvider(props) {
  const [userFavourites, setUserFavorites] = useState([]);

  function addFavoritesHelper(favorite) {
    setUserFavorites((prevUserFavorites) => {
      return prevUserFavorites.concat(favorite);
    });
  }

  function removeFavoritesHelper(id) {
    setUserFavorites((prevUserFavorites) => {
      return prevUserFavorites.filter((favorite) => favorite.id !== id);
    });
  }

  function itemIsFavoritesHelper(id) {
    return userFavourites.some((favorite) => favorite.id === id);
  }

  const context = {
    favorites: userFavourites,
    totalFavorites: userFavourites.length,
    addFavorites: addFavoritesHelper,
    removeFavorites: removeFavoritesHelper,
    itemIsFavorites: itemIsFavoritesHelper,
  };

  return (
    <FavouritesContext.Provider value={context}>
      {props.children}
    </FavouritesContext.Provider>
  );
}

export default FavouritesContext;
