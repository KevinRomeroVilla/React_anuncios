import Button from "../common/Button";
import { Link, NavLink } from "react-router-dom";

import { ReactComponent as Icon } from "../../assets/twitter.svg";
import classNames from "classnames";
import { logout } from "../auth/service";
import { useContext } from "react";
import AuthContext from "../auth/context";

const Header = ({ className }) => {
  const { isLogged, handleLogout } = useContext(AuthContext);

  const handleLogoutClick = async () => {
    await logout();
    handleLogout();
  };

  return (
    <header className={classNames("header", className)}>
      <Link to='/'>
        <div className='header-logo'>
          <Icon width='32' height='32' />
        </div>
      </Link>
      <nav className='header-nav'>
        <NavLink to='/adverts/new'>New Advert</NavLink>
        <NavLink to='/adverts' end>
          See all adverts
        </NavLink>
        {isLogged ? (
          <Button className='header-button' onClick={handleLogoutClick}>
            Logout
          </Button>
        ) : (
          <Button
            as={Link}
            to='/login'
            variant='primary'
            className='header-button'
          >
            Login
          </Button>
        )}
      </nav>
    </header>
  );
};

export default Header;
