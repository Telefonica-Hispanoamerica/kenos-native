import React from 'react';

export interface ButtonsLayoutProps {
  primaryButton?: React.ReactNode;
  secondaryButton?: React.ReactNode;
  buttonLink?: React.ReactNode;
  small?: boolean;
  alignment?: 'column' | 'column-reverse' | 'row' | 'row-reverse';
}

export type LayoutButtons = ButtonsLayoutProps;
