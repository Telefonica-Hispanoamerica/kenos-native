export interface DonutsProps{
  percentage?:number;
  title?:string;
  subtitle?:string;
  totalGB?:number;
  consumptionGB?:number;
  expirationDate?:string;
  colorGradientPrimary?:string;
  colorGradientSecondary?:string;
  type?: 'Default'|'Unlimited'|'See more';
  onPress?: () => void; 
}

export type DonutsTypeProps = DonutsProps;