import CloseIcon from './Close';
import Cart from './Cart';
import LeftArrowIcon from './LeftArrow';
import MoreVert from './MoreVert';
import ReloadIcon from './Reload';
import Adjust from './Adjust';

type NavBarIconProps = {
  icon: keyof typeof IconsOrchester;
};

const IconsOrchester = {
  left: <LeftArrowIcon />,
  reload: <ReloadIcon />,
  close: <CloseIcon />,
  more: <MoreVert />,
  cart: <Cart />,
  adjust: <Adjust />,
};

function NavBarIcon(props: NavBarIconProps) {
  return IconsOrchester[props.icon] || <LeftArrowIcon />;
}

export default NavBarIcon;
