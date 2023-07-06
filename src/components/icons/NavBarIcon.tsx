import IconClose from './icon-close';
import IconCart from './icon-cart';
import IconBack from './icon-back';
import IconMoreVert from './icon-morevert';
import IconReload from './icon-reload';
import IconAdjust from './icon-adjust';
import IconBell from './icon-bell';
import IconMenu from './icon-menu';

type NavBarIconProps = {
  icon: keyof typeof IconsOrchester;
};

const IconsOrchester = {
  back: <IconBack />,
  reload: <IconReload />,
  close: <IconClose />,
  more: <IconMoreVert />,
  cart: <IconCart />,
  adjust: <IconAdjust />,
  bell: <IconBell />,
  menu: <IconMenu />,
};

function NavBarIcon(props: NavBarIconProps) {
  return IconsOrchester[props.icon] || <IconBack />;
}

export default NavBarIcon;
