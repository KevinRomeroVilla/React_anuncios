import Button from "../common/Button";

import { ReactComponent as Icon } from "../../assets/twitter.svg";
import classNames from "classnames";

const Header = ({ className, isLogged }) => {
  return (
    <header className={classNames("header", className)}>
      <div className='header-logo'>
        <Icon width='32' height='32' />
      </div>
      <nav className='header-nav'>
        <Button>New Advert</Button>
        {isLogged ? (
          <Button className='header-button'>Logout</Button>
        ) : (
          <Button variant='primary' className='header-button'>
            Login
          </Button>
        )}
      </nav>
    </header>
  );
};

export default Header;
