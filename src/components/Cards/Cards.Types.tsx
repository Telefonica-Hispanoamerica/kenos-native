import {IconProps} from '../../utils';
import {DataAttributes} from '../../utils/types';
import {ButtonProps} from '../Buttons';
import Tag from '../Tag/Tag';

export interface BaseCardProps {
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
  button?: React.ComponentType<ButtonProps>;
  buttonLink?: React.ComponentType<ButtonProps>;
  'aria-label'?: string;
  onClose?: () => void;
}

export interface CardContentProps extends BaseCardProps {}

export interface DataCardProps extends BaseCardProps {
  icon?: React.ReactElement<IconProps>;
  children?: void;
  dataAttributes?: DataAttributes;
}

export interface MediaCardProps extends BaseCardProps {
  media: React.ReactNode;
  children?: void;
  dataAttributes?: DataAttributes;
}

export interface PlanCardProps extends DataCardProps {
  
}
