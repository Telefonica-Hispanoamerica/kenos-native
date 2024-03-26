import React from 'react';
import {View} from 'react-native';
import {styles} from '../Sheet.css';
import IconCloseRegular from '../../../kenos-icons/IconCloseRegular';
import {IconButton} from '../../Buttons';
import {HeaderSheetPanResponderProps} from '../Sheet.Types';
import { SheetHeaderShared } from '../../shared/SheetHeaderShared/SheetHeaderShared';

export const SheetHeader = ({
  panHandlers,
  color,
  dismisable,
  dismisableAction,
  dragableHead
}: HeaderSheetPanResponderProps) => {
  const IconButtonStyles = {
    height: 28,
    width: 28,
    padding: 2,
  };

  return (
    <View
      style={[
        styles.draggableHandleContainer,
        {paddingTop: 8},
      ]}
      {...panHandlers}>
      {dragableHead && (
        <View style={[styles.draggableHandle, {backgroundColor: color}]} />
      )}

      {dismisable && (
        <View style={styles.dismisableContainer}>
          <IconButton
            icon={IconCloseRegular}
            type={'light'}
            onPress={dismisableAction}
            styles={IconButtonStyles}
          />
        </View>
      )}
    </View>
  );
};
