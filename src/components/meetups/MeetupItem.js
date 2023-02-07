import FavouritesContext from "../../store/favorites-context";
import Card from "../../ui/Card";
import classes from "./MeetupItem.module.css";
import {useContext} from 'react'

function MeetupItem(props) {
  const favoritesCtx = useContext(FavouritesContext);
  const itemIsFavorites = favoritesCtx.itemIsFavorites(props.id);

  function toggleMeetupFavorites() {
    if (itemIsFavorites) {
      favoritesCtx.removeFavorites(props.id);
    } else {
      favoritesCtx.addFavorites({
        id: props.id,
        title: props.title,
        description: props.description,
        address: props.address,
        image: props.image
      })
    }
  }

  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={props.image} alt={props.title} />
        </div>
        <div className={classes.content}>
          <h3>{props.title}</h3>
          <address>{props.address}</address>
          <p>{props.description}</p>
        </div>
        <div className={classes.actions}>
          <button onClick={toggleMeetupFavorites}>{itemIsFavorites ? 'Remove from favorite' : 'To Favorites'}</button>
        </div>
      </Card>
    </li>
  );
}

export default MeetupItem;
