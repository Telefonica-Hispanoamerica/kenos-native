import {StyleProp, View, ViewStyle} from 'react-native';
import {useIsDismissable} from '../../../hooks/MaybeDismissable/MaybeDismissable';

type MaybeSectionProps = {
  children: React.ReactNode;
  'aria-label'?: string;
  style: StyleProp<ViewStyle>;
};

const MaybeSection = ({
  'aria-label': ariaLabel,
  style,
  children,
}: MaybeSectionProps) => {
  const isDismissable = useIsDismissable();
  if (isDismissable) {
    return <View style={style}>{children}</View>;
  } else {
    return (
      <View style={style} aria-label={ariaLabel}>
        {children}
      </View>
    );
  }
};

export default MaybeSection;
