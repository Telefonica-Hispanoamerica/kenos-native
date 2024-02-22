import React from 'react'
import { GestureResponderHandlers, View } from 'react-native'
import { styles } from '../Sheet.css';

interface PanResponderProps {
    panHandlers: GestureResponderHandlers;
    color: string;
    dismisable: boolean;
}

export const SheetHeader = ({ panHandlers, color }: PanResponderProps) => {
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
        </View>
    )
}
