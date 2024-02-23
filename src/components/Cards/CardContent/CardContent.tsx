import React from 'react';
import {CardContentProps} from '../Card.Types';
import {StyleSheet, View} from 'react-native';
import {Text, Text2} from '../../Text/Text';
import {useTheme} from '../../../utils/ThemeContextProvider';
import Stack from '../../Stack/Stack';
import Tag from '../../Tag/Tag';

const styles = StyleSheet.create({
  cardContent: {
    display: 'flex',
    flex: 1,
    justifyContent: 'space-between',
    flexDirection: 'column',
  },
  actions: {
    display: 'flex',
    flex: 1,
    alignItems: 'flex-end',
    marginTop: 16,
  },
});

const CardContent: React.FC<CardContentProps> = ({
  headline,
  pretitle,
  pretitleLinesMax,
  title,
  titleLinesMax,
  subtitle,
  subtitleLinesMax,
  description,
  descriptionLinesMax,
  extra,
  button,
  buttonLink,
}) => {
  const {skin, textPresets} = useTheme();

  const renderHeadline = () => {
    if (headline && typeof headline === 'string') {
      return <Tag type="promo">{headline}</Tag>;
    }
    return !headline ? null : <>headline</>;
  };

  return (
    <View style={styles.cardContent}>
      <View>
        <Stack space={8}>
          {(headline || pretitle || title || subtitle || description) && (
            <Stack space={8}>
              {renderHeadline()}
              <Stack space={4}>
                {pretitle && (
                  <Text2 truncate={pretitleLinesMax} regular>
                    {pretitle}
                  </Text2>
                )}                
                <Text
                  mobileSize={18}
                  mobileLineHeight="24px"
                  desktopSize={20}
                  desktopLineHeight="28px"
                  truncate={titleLinesMax}
                  weight={textPresets.cardTitle.weight}
                  as="h3">
                  {title}
                </Text>
                <Text2 truncate={subtitleLinesMax} as="div" regular>
                  {subtitle}
                </Text2>
              </Stack>
            </Stack>
          )}

          {description && (
            <Text2
              truncate={descriptionLinesMax}
              as="p"
              regular
              color={skin.colors.textSecondary}>
              {description}
            </Text2>
          )}
        </Stack>
        {extra && extra}
      </View>

      {/* *****************************/}
      {/* Cambiar por un button group */}
      {/* *****************************/}
      <View style={{display: 'flex', flex: 1, flexDirection: 'row'}}>
        {button}
        {buttonLink}
      </View>
      {/* {button && <View style={styles.actions}>{button}</View>}

      {buttonLink && <View style={styles.actions}>{buttonLink}</View>} */}
      {/* *****************************/}
    </View>
  );
};

export default CardContent;
