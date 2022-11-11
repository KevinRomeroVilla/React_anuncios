import Button from "../common/Button";
import { Link, NavLink } from "react-router-dom";

import { ReactComponent as Icon } from "../../assets/twitter.svg";
import classNames from "classnames";
import { logout } from "../auth/service";

const Header = ({ className, isLogged, onLogout }) => {
  const handleLogoutClick = async () => {
    await logout();
    onLogout();
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
