
import Logo from '../Logo/Logo';
import NavMenu from '../NavMenu/NavMenu';
import SignUp from '../buttons/SignUp';

const Header = () => {
  return (
    <div className="h-16 bg-indigo-300 px-2">
      <div className="container mx-auto flex justify-between items-center">
        <Logo />
        <NavMenu />
        <SignUp />
      </div>
    </div>
  );
}

export default Header;