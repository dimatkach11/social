import { NavLink } from "react-router-dom";
import classes from './NavMenu.module.css'
const NavMenu = () => {
  return (
    <div className={classes.NavMenu}>
      <div className="flex">
        <NavLink activeClassName="text-red-500 border-b border-red-500" exact to="/" className="text-white mx-3 px-1 text-lg tracking-wider hover:text-red-500">
          <span className="">Profile</span>
        </NavLink>
        <NavLink activeClassName="text-red-500 border-b border-red-500" to="/dialogs" className="text-white mx-3 px-1 text-lg tracking-wider hover:text-red-500">
          <span className="">Messages</span>
        </NavLink>
        <NavLink activeClassName="text-red-500 border-b border-red-500" exact to="/news" className="text-white mx-3 px-1 text-lg tracking-wider hover:text-red-500">
          <span className="">News</span>
        </NavLink>
        <NavLink activeClassName="text-red-500 border-b border-red-500" exact to="/music" className="text-white mx-3 px-1 text-lg tracking-wider hover:text-red-500">
          <span className="">Music</span>
        </NavLink>
        <NavLink activeClassName="text-red-500 border-b border-red-500" exact to="/settings" className="text-white mx-3 px-1 text-lg tracking-wider hover:text-red-500">
          <span className="">Settings</span>
        </NavLink>
      </div>
    </div>
  );
}

export default NavMenu;