import React from 'react';
import {View} from 'react-native';
import {IconAddMoreRegular} from '../../kenos-icons';

import {DonutsProps} from './Donuts.Types';
import {styles} from './Donuts.css';

import {AnimatedCircularProgress} from 'react-native-circular-progress';
import {useTheme} from '../../utils/ThemeContextProvider';
import {Text1, Text2} from '../Text/Text';
import SvgComponent from './GradientSvg/SvgComponent';

export const Donuts = (props: DonutsProps) => {
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
    consumptionGB,
    subtitle,
    title,
    totalGB,
    expirationDate,
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
    <View style={styles.container}>
      <View
        style={[
          styles.card,
          {
            backgroundColor: type === 'See more' ? backgroundBrand : background,
            borderColor: type === 'See more' ? borderSelected : border,
          },
        ]}>
        {type === 'See more' ? (
          <View style={styles.cardSeeMore}>
            <IconAddMoreRegular size={24} color={inverse} />
            <Text2 color={inverse} medium>
              See more
            </Text2>
          </View>
        ) : (
          <View style={styles.cardDefault}>
            <Text2 color={textPrimary} medium>
              {title}
            </Text2>
            <Text1 color={textSecondary} regular>
              {subtitle}
            </Text1>
            {type === 'Unlimited' ? (
              <View style={{paddingTop:1}}><SvgComponent {...props}/></View>
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
                    {consumptionGB} GB
                  </Text2>
                  <Text1 color={textSecondary} regular>
                    de {totalGB} GB
                  </Text1>
                </View>
              ) : (
                <View style={{paddingTop: 8, paddingBottom: 8}}>
                  <Text2 color={textPrimary} medium>
                    Unlimited
                  </Text2>
                </View>
              )}
              <View style={{marginTop: 15}}>
                <Text1 color={textSecondary} regular>
                  {expirationDate}
                </Text1>
              </View>
            </View>
          </View>
        )}
      </View>
    </View>
  );
};
