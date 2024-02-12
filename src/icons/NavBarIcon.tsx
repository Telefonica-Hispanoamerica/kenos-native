import {
  IconArrowLineLeftRegular,
  IconMenuRegular,
  IconContactBookFilled,
  IconLocationFilled,
  IconKebabMenuLight,
  IconCloseRegular,
  IconReloadRegular,
  IconControlsRegular,
  IconSearchRegular
} from '../kenos-icons';

type NavBarIconProps = {
  icon: keyof typeof IconsOrchester;
};

const IconsOrchester = {
  back: <IconArrowLineLeftRegular size={24} color='white' />,
  reload: <IconReloadRegular size={24} color='white' />,
  close: <IconCloseRegular size={24} color='white' />,
  more: <IconKebabMenuLight size={24} color='white' />,
  profile: <IconContactBookFilled size={24} color='white' />,
  adjust: <IconControlsRegular size={24} color='white' />,
  location: <IconLocationFilled size={24} color='white' />,
  menu: <IconMenuRegular size={24} color='white' />,
  search: <IconSearchRegular size={24} color='white' />
};

function NavBarIcon(props: NavBarIconProps) {
  return IconsOrchester[props.icon] || <IconArrowLineLeftRegular />;
}

export default NavBarIcon;
