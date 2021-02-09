import { NavLink } from "react-router-dom";
import classes from './NavMenu.module.css'
const NavMenu = () => {
  return (
    <div className={classes.NavMenu}>
      <ul className="flex">
        <NavLink activeClassName={classes.active} to="/profile">
          <li className="p-2 m-2 px-4 bg-green-500 text-white font-semibold rounded-lg shadow-md active:bg-green-700 focus:outline-none hover:bg-green-700">Profile</li>
        </NavLink>
        <NavLink activeClassName={classes.active} to="/dialogs">
          <li className="p-2 m-2 px-4 bg-green-500 text-white font-semibold rounded-lg shadow-md active:bg-green-700 focus:outline-none hover:bg-green-700">Messages</li>
        </NavLink>
        <NavLink activeClassName={classes.active} to="/news">
          <li className="p-2 m-2 px-4 bg-green-500 text-white font-semibold rounded-lg shadow-md active:bg-green-700 focus:outline-none hover:bg-green-700">News</li>
        </NavLink>
        <NavLink activeClassName={classes.active} to="/music">
          <li className="p-2 m-2 px-4 bg-green-500 text-white font-semibold rounded-lg shadow-md active:bg-green-700 focus:outline-none hover:bg-green-700">Music</li>
        </NavLink>
        <NavLink activeClassName={classes.active} to="/settings">
          <li className="p-2 m-2 px-4 bg-green-500 text-white font-semibold rounded-lg shadow-md active:bg-green-700 focus:outline-none hover:bg-green-700">Settings</li>
        </NavLink>
      </ul>
    </div>
  );
}

export default NavMenu;