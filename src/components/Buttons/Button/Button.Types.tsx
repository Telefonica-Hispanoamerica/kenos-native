import {IconProps} from '../../../utils';

export interface CommonProps {
  children: React.ReactNode;
  style?: React.CSSProperties;
  small?: boolean;
  showSpinner?: boolean;
  loadingText?: string;
  disabled?: boolean;
  rounded?: boolean;
  inverse?: boolean;
  selected?: boolean;
  leftIcon?: React.ComponentType<IconProps>;
  rightIcon?: React.ComponentType<IconProps>;
  urgency?: string;
  aligned?: boolean;
  newColor: string;
}

export interface OnPressButtonProps extends CommonProps {
  onPress?: () => void;
  submit?: void;
  fake?: void;
  to?: void;
}

export type ButtonType = 'primary' | 'secondary' | 'danger' | 'link';

export type ButtonProps = OnPressButtonProps;

export type UrgencyThemeType = {
    [key: string]: string;
};
