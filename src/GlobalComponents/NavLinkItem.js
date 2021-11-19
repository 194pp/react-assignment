import {NavLink} from "react-router-dom";
import classes from './NavLinkItem.module.css';

const NavLinkItem = ({to, text}) => {
  return (
    <NavLink
      to={to}
      className={(navData) => {
        return navData.isActive ?
          `${classes.LinkItem} ${classes.Active}` :
          classes.LinkItem
      }}>{text}</NavLink>
  )
}

export default NavLinkItem;