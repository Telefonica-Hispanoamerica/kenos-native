import {DataAttributes} from '../../utils/types';
import {IconProps} from '../../utils';
import Tag from '../Tag/Tag';

export interface CardContentProps {
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
  button?: React.ReactNode;
  buttonLink?: React.ReactNode;
}

export interface DataCardProps {
  /**
   * Typically a kenos-icons component element
   */
  icon?: React.ReactElement<IconProps>;
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
  button?: React.ReactNode;
  buttonLink?: React.ReactNode;
  children?: void;
  /** "data-" prefix is automatically added. For example, use "testid" instead of "data-testid" */
  dataAttributes?: DataAttributes;
  'aria-label'?: string;
  onClose?: () => void;
}

// type MediaCardProps = {
//   media: RendersElement<typeof Image> | RendersElement<typeof Video>;
//   headline?: string | RendersNullableElement<typeof Tag>;
//   pretitle?: string;
//   pretitleLinesMax?: number;
//   title?: string;
//   titleLinesMax?: number;
//   subtitle?: string;
//   subtitleLinesMax?: number;
//   description?: string;
//   descriptionLinesMax?: number;
//   extra?: React.ReactNode;
//   button?: React.ReactElement<ButtonPrimary>;  
//     buttonLink?: RendersNullableElement<typeof ButtonLink>;
//   children?: void;
//   dataAttributes?: DataAttributes;
//   'aria-label'?: string;
//   onClose?: () => void;
// };
