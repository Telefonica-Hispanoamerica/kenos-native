import React from 'react';
import MaybeDismissable from '../../../hooks/MaybeDismissable/MaybeDismissable';
import {Box} from '../../../layout';
import {Boxed} from '../../Primitives/Boxed/Boxed';
import {DataCardProps} from '../Card.Types';
import {styles} from '../Card.css';
import CardContent from '../CardContent/CardContent';
import MaybeSection from '../MaybeSection/MaybeSection';
import {Text, View} from 'react-native';

export const DataCard: React.FC<DataCardProps> = ({
  icon,
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
  dataAttributes,
  'aria-label': ariaLabel,
  onClose,
}) => {
  return (
    <>
      <MaybeDismissable aria-label={ariaLabel} onClose={onClose}>
        <Boxed
          styles={styles.boxed}
          borderRadius={8}
          dataAttributes={{'component-name': 'DataCard', ...dataAttributes}}
          width="100%"
          height="100%">
          <MaybeSection style={styles.dataCard} aria-label={ariaLabel}>
            {icon && <Box paddingBottom={16}>{icon}</Box>}
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
          </MaybeSection>
        </Boxed>
      </MaybeDismissable>
    </>
  );
};
