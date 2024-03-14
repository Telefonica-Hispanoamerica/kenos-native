import {ReactNode} from 'react';
import {IconProps} from '../../../utils';
import {ButtonProps, ButtonType} from '../../Buttons/Button/Button.Types';
import {RowProps} from '../../ListRow/ListRow';
import {FeatureTagProps} from './FeatureTag/FeatureTag';
import {HeaderProps} from './Header/Header';
import {PricingProps} from './Pricing/Pricing';
import {TagLabelProps} from './TagLabel/TagLabel';

export type dataRowList = {
  id: string;
};

export type PlanCardProps = {
  borderRadius: 8 | 16 | undefined;
  namePrimaryButton: string;
  nameSecondaryButton: string;
  linkButtonMoreDetails: string;
  linkButtonHideDetails: string;
  dataRowList: Array<dataRowList & RowProps>;
  iconFeatureTag: React.ComponentType<IconProps>;
  textFeatureTag: string;
  header: HeaderProps;
  tagLabel: TagLabelProps;
  pricing: PricingProps;
  buttonPrimary: ButtonProps;
  buttonTypePrimary: ButtonType;
  buttonSecondary: ButtonProps;
  buttonTypeSecondary: ButtonType;
  featureTag: FeatureTagProps;
  viewApps?: ReactNode;
  listOffers?: ReactNode;
};
