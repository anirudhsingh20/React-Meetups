import { Link } from "react-router-dom";
import {useContext} from 'react'

import classes from './MainNavigation.module.css';
import FavouritesContext from "../../store/favorites-context";

function MainNavigation() {
    const favoriteCtx = useContext(FavouritesContext);

    return (
        <header className={classes.header}>
            <div className={classes.logo}>React Courses</div>
            <nav>
                <ul>
                    <li>
                        <Link to="/">All Meetups</Link>
                    </li>
                    <li>
                        <Link to="/new-meetup">Add New Meetup</Link>
                    </li>
                    <li>
                        <Link to="/favorites">My Favorites<span className={classes.badge}>{favoriteCtx.totalFavorites}</span></Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
export default MainNavigation;