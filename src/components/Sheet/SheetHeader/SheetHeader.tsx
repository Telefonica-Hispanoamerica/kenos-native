import React from 'react'
import { GestureResponderHandlers, View } from 'react-native'
import { styles } from '../Sheet.css';
import { IconButton } from '../../IconButton/IconButton';
import IconCloseRegular from '../../../kenos-icons/IconCloseRegular';

interface PanResponderProps {
    panHandlers: GestureResponderHandlers;
    color: string;
    dismisable: boolean;
    dismisableAction: () => void;
}

const IconButtonStyles = {
    height: 28, 
    width: 28, 
    padding: 2,
    marginTop: -10
}

export const SheetHeader = ({ panHandlers, color, dismisableAction }: PanResponderProps) => {
    return (
        <View
            style={styles.draggableHandleContainer}
            {...panHandlers}
        >
            <View
                style={[
                    styles.draggableHandle,
                    { backgroundColor: color }
                ]}
            />
            <View style={styles.dismisableContainer}>
                <IconButton 
                    icon={IconCloseRegular} 
                    type={'light'}
                    onPress={dismisableAction}
                />
            </View>
        </View>
    )
}