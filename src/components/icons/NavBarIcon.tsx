import CloseIcon from './Close';
import LeftArrowIcon from './LeftArrow';
import ReloadIcon from './Reload';

type NavBarIconProps = {
  icon: keyof typeof IconsOrchester;
};

const IconsOrchester = {
  left: <LeftArrowIcon />,
  reload: <ReloadIcon />,
  close: <CloseIcon />,
};

function NavBarIcon(props: NavBarIconProps) {
  return IconsOrchester[props.icon] || <LeftArrowIcon />;
}

export default NavBarIcon;
