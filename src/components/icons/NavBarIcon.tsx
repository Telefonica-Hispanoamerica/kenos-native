import IconClose from './icon-close';
import IconCart from './icon-cart';
import IconBackAndroid from './icon-back.android';
import IconBackIos from './icon-back.ios';
import IconBackWeb from './icon-back.web';
import IconMoreVert from './icon-morevert';
import IconReload from './icon-reload';
import IconAdjust from './icon-adjust';
import IconBell from './icon-bell';
import IconMenu from './icon-menu';
import { isAndroid, isIos, isWeb } from '../../utils';

type NavBarIconProps = {
  icon: keyof typeof IconsOrchester;
};

const IconBack = () => {
  return (
    <>
      { isAndroid() && <IconBackAndroid /> }
      { isIos() && <IconBackIos /> }
      { isWeb() && <IconBackWeb /> }
    </>
  )
}

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
  return IconsOrchester[props.icon];
}

export default NavBarIcon;
