import React from 'react';
import {Pressable, View} from 'react-native';
import {IconAddMoreRegular} from '../../../kenos-icons';
import { cardConsumption } from '../Cards.css';
import {AnimatedCircularProgress} from 'react-native-circular-progress';
import {useTheme} from '../../../utils/ThemeContextProvider';
import {Text1, Text2} from '../../Text/Text';
import SvgComponent from './GradientSvg/SvgComponent';
import { CardConsumptionProps } from '../Cards.Types';

export const CardConsumption = (props: CardConsumptionProps) => {
  const {skin} = useTheme();
  const {
    borderLight,
    backgroundBrand,
    borderSelected,
    border,
    background,
    error,
    warning,
    success,
    textPrimary,
    textSecondary,
    inverse,
  } = skin.colors;
  const {
    percentage,
    type,
    subtitle,
    internalTitle,
    internalSubtitle,
    description,
    title,
  } = props;

  const valuePercentage = percentage ?? 0;

  const getColorValue = () => {
    if (valuePercentage <= 19) {
      return {
        color: error,
      };
    }

    if (valuePercentage >= 20 && valuePercentage <= 49) {
      return {
        color: warning,
      };
    }

    if (valuePercentage >= 50) {
      return {
        color: success,
      };
    }
  };

  const strokeColor = getColorValue()?.color;

  return (
    <View style={cardConsumption.container}>
      <View
        style={[
          cardConsumption.card,
          {
            backgroundColor: type === 'SeeMore' ? backgroundBrand : background,
            borderColor: type === 'SeeMore' ? borderSelected : border,
          },
        ]}>
        {type === 'SeeMore' ? (
          <Pressable style={cardConsumption.cardSeeMore} onPress={props.onPress}>
            <IconAddMoreRegular size={24} color={inverse} />
            <Text2 color={inverse} medium>
              {title}
            </Text2>
          </Pressable>
        ) : (
          <View style={cardConsumption.cardDefault}>
            <Text2 color={textPrimary} medium>
              {title}
            </Text2>
            <Text1 color={textSecondary} regular>
              {subtitle}
            </Text1>
            {type === 'Unlimited' ? (
              <View style={{paddingTop: 1}}>
                <SvgComponent {...props}/>
              </View>
            ) : (
              <AnimatedCircularProgress
                size={90}
                width={5}
                fill={valuePercentage}
                tintColor={strokeColor}
                backgroundColor={borderLight}
                arcSweepAngle={180}
                rotation={-200 - 250}
                lineCap="round"
              />
            )}
            <View
              style={{
                alignItems: 'center',
                position: 'absolute',
                marginTop: 85,
              }}>
              {type === 'Default' ? (
                <View style={{alignItems: 'center'}}>
                  <Text2 color={textPrimary} medium>
                    {internalTitle}
                  </Text2>
                  <Text1 color={textSecondary} regular>
                    {internalSubtitle}
                  </Text1>
                </View>
              ) : (
                <View style={{paddingTop: 8, paddingBottom: 8}}>
                  <Text2 color={textPrimary} medium>
                    {internalTitle}
                  </Text2>
                </View>
              )}
              <View style={{marginTop: 15}}>
                <Text1 color={textSecondary} regular>
                  {description}
                </Text1>
              </View>
            </View>
          </View>
        )}
      </View>
    </View>
  );
};
