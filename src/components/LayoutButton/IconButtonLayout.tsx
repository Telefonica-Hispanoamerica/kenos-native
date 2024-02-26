import React from 'react';
import {
  View,
  Pressable,
  Text,
  ScrollView,
} from 'react-native';
import { useTheme } from '../../utils/ThemeContextProvider';
import { IconButton } from '../Buttons';
import { styles } from './IconButtonLayout.css';
import { LayoutIconButton } from './IconButtonLayout.Type';

export const IconButtonLayout = (props: LayoutIconButton) => {

  const { skin } = useTheme();
  const { background, backgroundBrand } = skin.colors;
  const { inverse, medium, highlight } = props;
  const backgroundIcon = ((inverse || medium || highlight) ? background : backgroundBrand);

  return (
    <View style={[styles.container, { backgroundColor: backgroundIcon }]}>

      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} scrollEnabled={true} contentContainerStyle={styles.containerScroll}>
        {
          props.buttonsOptions.map(({ text, icon }) => (
            <Pressable key={text} style={{ alignItems: 'center' }} onPress={props.onPress}>
              {
                props.light ? (<IconButton type={'medium'} icon={icon} />) : (<IconButton {...props} icon={icon} />)
              }
              <Text style={styles.textButton}>{text}</Text>
            </Pressable>
          ))
        }
      </ScrollView>
    </View>
  )

}
