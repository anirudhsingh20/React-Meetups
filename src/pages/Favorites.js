import { useContext } from "react";
import FavouritesContext from "../store/favorites-context";
import MeetupList from "../components/meetups/MeetupList";
function FavoritesPage() {
    const favoriteCtx = useContext(FavouritesContext);
    let content;

    if (favoriteCtx.totalFavorites === 0) {
        content = <p>You have on item in favorites</p>
    } else {
        content = <MeetupList meetups={favoriteCtx.favorites} />
    }

    return (
        <div>
            <h1>FavoritesPage</h1>
            {content}
        </div>
    );
}

export default FavoritesPage;