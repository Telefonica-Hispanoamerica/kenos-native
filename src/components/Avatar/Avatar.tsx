import React, {useState, useEffect} from 'react';
import {View, Text, ImageBackground} from 'react-native';
import Badge from '../Badge/Badge';
import IconUserAccountRegular from '../../assets/icons/IconUserAccountRegular';
import {useTheme} from '../../utils/ThemeContextProvider';

const getBadgeDistance = (
  size: number,
  badge: boolean | number | undefined,
) => {
  if (!badge) {
    return 0;
  }
  const radius = size / 2;
  const badgeOffset = badge === 0 ? 5 : 30;
  return radius * (1 - Math.sin(Math.PI / 4)) - badgeOffset;
};

type AvatarProps = {
  size: number;
  src?: string;
  initials?: string;
  textColor?: string;
  backgroundColor?: string;
  Icon?: React.FC<any>;
  badge?: boolean | number;
  border?: boolean;
};

const Avatar = ({
  size,
  src,
  initials = '',
  textColor,
  backgroundColor,
  Icon = IconUserAccountRegular,
  badge,
  border,
}: AvatarProps) => {
  const {skin} = useTheme();
  const [imgLoadError, setImgLoadError] = useState(false);

  const renderText = (size: number, text: string, color?: string) => {
    if (!text) {
      return null;
    }
    let fontSize;
    if (size <= 40) {
      fontSize = 14;
    } else if (size <= 64) {
      fontSize = 16;
    } else {
      fontSize = 18;
    }
    return (
      <Text
        style={{
          fontSize,
          textTransform: 'uppercase',
          color: color || skin.colors.textPrimaryInverse,
        }}>
        {text}
      </Text>
    );
  };

  useEffect(() => {
    setImgLoadError(false);
  }, [src]);

  const letters = initials.trim().slice(0, 2);
  const badgePosition = getBadgeDistance(size, badge);
  const badgeValue = badge === true ? undefined : badge || 0;
  const shouldRenderImage = !!src && !imgLoadError;
  const iconSize = size <= 40 ? 16 : 24;

  const badgeComponent = (
    <View style={{elevation: 1, position: 'absolute', zIndex: 1}}>
      <Badge value={badgeValue} top={badgePosition} right={badgePosition} />
    </View>
  );

  const content = shouldRenderImage ? (
    <ImageBackground
      source={{uri: src}}
      style={[
        {
          width: size,
          height: size,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 500,
          overflow: 'hidden',
        },
      ]}
      onError={() => setImgLoadError(true)}
      resizeMode="cover"
    />
  ) : (
    <>
      {renderText(size, letters, textColor) || (
        <Icon size={iconSize} color="currentColor" />
      )}
    </>
  );

  return (
    <View
      style={[
        {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: size,
          height: size,
          backgroundColor: backgroundColor || skin.colors.brandHigh,
          borderWidth: border ? 1 : 0,
          borderColor: skin.colors.borderLow,
          borderRadius: 500,
        },
      ]}
      accessibilityRole="image"
      accessibilityLabel={initials}>
      {badgeComponent}
      {content}
    </View>
  );
};

export default Avatar;
