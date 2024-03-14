import React from 'react';
import {View} from 'react-native';
import MaybeDismissable from '../../../hooks/MaybeDismissable/MaybeDismissable';
import {Boxed} from '../../Primitives/Boxed/Boxed';
import {MediaBorderRadiusProvider} from '../../Primitives/Image/Image';
import {MediaCardProps} from '../Cards.Types';
import {mediaCard, mediaCardContent, styles} from '../Cards.css';
import CardContent from '../CardContent/CardContent';
import MaybeSection from '../MaybeSection/MaybeSection';

export const MediaCard = React.forwardRef<HTMLDivElement, MediaCardProps>(
  (
    {
      media,
      headline,
      pretitle,
      pretitleLinesMax,
      subtitle,
      subtitleLinesMax,
      title,
      titleLinesMax,
      description,
      descriptionLinesMax,
      extra,
      button,
      buttonLink,
      dataAttributes,
      'aria-label': ariaLabel,
      onClose,
    },
    ref,
  ) => {
    return (
      <MaybeDismissable onClose={onClose} aria-label={ariaLabel}>
        <Boxed
          borderRadius={8}
          styles={styles.boxed}
          dataAttributes={{'component-name': 'MediaCard', ...dataAttributes}}
          width="100%"
          height="100%">
          <MaybeSection style={mediaCard.container} aria-label={ariaLabel}>
            <View style={{flex: 1}}>
              <MediaBorderRadiusProvider value={false}>
                {media}
              </MediaBorderRadiusProvider>
            </View>
            <View style={mediaCardContent.default}>
              <CardContent
                headline={headline}
                pretitle={pretitle}
                pretitleLinesMax={pretitleLinesMax}
                title={title}
                titleLinesMax={titleLinesMax}
                subtitle={subtitle}
                subtitleLinesMax={subtitleLinesMax}
                description={description}
                descriptionLinesMax={descriptionLinesMax}
                extra={extra}
                button={button}
                buttonLink={buttonLink}
              />
            </View>
          </MaybeSection>
        </Boxed>
      </MaybeDismissable>
    );
  },
);
