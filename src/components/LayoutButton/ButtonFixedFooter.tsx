import React from 'react';
import {
  View
} from 'react-native';
import { useTheme } from '../../utils/ThemeContextProvider';
import { styles } from './ButtonFixedFooter.css';
import { Button } from '../Buttons';
import { ButtonFixedFooterLayout } from './ButtonFixedFooter.Type';

export const ButtonFixedFooter = (props:ButtonFixedFooterLayout) => {

  const { skin } = useTheme();
  const { background, backgroundBrand } = skin.colors;
  const { inverse, medium, highlight } = props;
  

  return (
    <View style={styles.container}>
        {props.primary && <View><Button type={'primary'} rounded>{props.children}</Button></View>}
        {props.secondary && <View><Button type={'secondary'} rounded>{props.children}</Button></View>}
        {props.addLink && <View style={{alignItems:'center'}}><Button type={'link'} rounded>{'link button'}</Button></View>}
    </View>
  )

}
