import React from 'react';
import {View} from 'react-native';
import MaybeDismissable from '../../../hooks/MaybeDismissable/MaybeDismissable';
import {DataAttributes} from '../../../utils/types';
import {Boxed} from '../../Primitives/Boxed/Boxed';
import {
  ImageProps,
  MediaBorderRadiusProvider,
} from '../../Primitives/Image/Image';
import {VideoProps} from '../../Primitives/Video/Video';
import Tag, {TagProps} from '../../Tag/Tag';
import {mediaCard, mediaCardContent, styles} from '../Card.css';
import CardContent from '../CardContent/CardContent';
import MaybeSection from '../MaybeSection/MaybeSection';

type MediaCardProps = {
  media:  React.ReactNode, //React.ComponentType<ImageProps> | React.ComponentType<VideoProps>;
  headline?: string | typeof Tag;
  pretitle?: string;
  pretitleLinesMax?: number;
  title?: string;
  titleLinesMax?: number;
  subtitle?: string;
  subtitleLinesMax?: number;
  description?: string;
  descriptionLinesMax?: number;
  extra?: React.ReactNode;
  button?: React.ReactNode; //React.ComponentType<ButtonProps>; // RendersNullableElement<typeof Button>;
  buttonLink?: React.ReactNode; //React.ComponentType<ButtonProps>;
  children?: void;
  dataAttributes?: DataAttributes;
  'aria-label'?: string;
  onClose?: () => void;
};

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
          styles={styles.boxed}
          dataAttributes={{'component-name': 'MediaCard', ...dataAttributes}}
          // ref={ref}
          width="100%"
          height="100%">
          <MaybeSection style={mediaCard.container} aria-label={ariaLabel}>
            <View style={{ flex: 1}}>
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
