import React from 'react';
import {StyleSheet, View} from 'react-native';
import {IconProps} from '../../../../utils/types';
import Tag, {TagType} from '../../../Tag/Tag';

export type TagLabelProps = {
  text: string;
  icon?: React.ComponentType<IconProps>;
  type?: TagType;
};

const TagLabel = (props: TagLabelProps) => {
  return (
    <View style={styles.tagLabelContainer}>
      <Tag Icon={props.icon} type={props.type ?? 'promo'} isInverseTag>
        {props.text}
      </Tag>
    </View>
  );
};
export default TagLabel;

const styles = StyleSheet.create({
  tagLabelContainer: {
    top: -15,
    alignSelf: 'center',
  },
});
