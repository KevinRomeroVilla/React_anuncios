import Button from "../common/Button";

import logo, { ReactComponent as Icon } from "../../assets/twitter.svg";

const Header = () => {
  return (
    <header>
      <div>
        <Icon width='32' height='32' />
      </div>
      <nav>
        <Button>New Advert</Button>
        <Button>Login</Button>
      </nav>
    </header>
  );
};

export default Header;
