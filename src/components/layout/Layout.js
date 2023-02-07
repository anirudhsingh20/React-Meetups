import MainNavigation from "./MainNavigation";
import classes from './Layout.module.css'

function Layout( props ) {
    return <div>
        <MainNavigation />
        <div className={ classes.main }>
            { props.children }
        </div>
    </div>
}

export default Layout;