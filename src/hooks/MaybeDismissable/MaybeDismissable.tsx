import * as React from 'react';
import {View} from 'react-native';
import {IconCloseRegular} from '../../kenos-icons';
import {useTheme} from '../../utils/ThemeContextProvider';
import {styles} from './MaybeDismissable.css';
import {applyAlpha} from '../../utils';

import {Button} from '../../components';

const DismissableContext = React.createContext<boolean>(false);
export const useIsDismissable = (): boolean =>
  React.useContext(DismissableContext);

type MaybeDismissableProps = {
  children: React.ReactNode;
  onClose?: () => void;
  width?: string | number;
  'aria-label'?: string;
};

const MaybeDismissable = ({
  children,
  onClose,
  'aria-label': ariaLabel,
}: MaybeDismissableProps): JSX.Element => {
  const {texts, skin} = useTheme();
  const {colors} = skin;

  if (!onClose) {
    return <>{children}</>;
  }

  return (
    <View style={styles.dismissableContainer} aria-label={ariaLabel}>
      <DismissableContext.Provider value>
        {children}
      </DismissableContext.Provider>
      {/* Cambiar por un IconButton
      
       style={
          (styles.dismissableButton, {display: 'flex', width: 48, height: 48})
        }
        
        */}
      <Button
        style={
          (styles.dismissableButton, {display: 'flex', width: 48, height: 48})
        }
        type="primary"
        onPress={onClose}
        aria-label={texts?.closeButtonLabel ?? ''}>
        <View
          style={
            (styles.dismissableCircleContainer,
            {backgroundColor: applyAlpha(colors.background, 0.7)})
          }>
          <IconCloseRegular color={skin.colors.neutralHigh} />
        </View>
      </Button>
    </View>
  );
};

export default MaybeDismissable;
