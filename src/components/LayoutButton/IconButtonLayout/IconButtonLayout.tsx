import React from 'react';
import {View, Pressable, ScrollView} from 'react-native';
import {useTheme} from '../../../utils/ThemeContextProvider';
import {IconButton} from '../../Buttons';
import {styles} from './IconButtonLayout.css';
import {LayoutIconButton} from './IconButtonLayout.Type';
import {IconButtonType} from '../../Buttons/IconButton/IconButton.Types';

export const IconButtonLayout = (props: LayoutIconButton) => {
  const {skin} = useTheme();
  const {
    background,
    backgroundBrand,
    backgroundBrandSecondary,
  } = skin.colors;
  
  const {inverse, medium, highlight, dark, light} = props;

  const backgroundIcon = () => {
    if (light && inverse) return backgroundBrand;
    if (dark) return backgroundBrandSecondary;

    return background;
  };

  let typeButton: IconButtonType = 'lightBlank';

  const themeTypeLayout = () => {
    switch (true) {
      case medium || (light && inverse):
        typeButton = 'medium';
        break;
      case highlight:
        typeButton = 'highlight';
        break;
      case dark:
        typeButton = 'darkLight';
        break;
      case light:
      default:
        typeButton = 'inverse';
        break;
    }
  };

  themeTypeLayout();

  return (
    <View style={[styles.container, {backgroundColor: backgroundIcon()}]}>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        scrollEnabled={true}
        contentContainerStyle={styles.containerScroll}>
        {props.buttonsOptions.map(({text, icon, onPress}) => (
          <Pressable
            key={text}
            style={{alignItems:'center'}}
            onPress={onPress}>
            <IconButton type={typeButton} inverse={props.inverse} icon={icon} onPress={onPress}>{text}</IconButton>
          </Pressable>
        ))}
      </ScrollView>
    </View>
  );
};
