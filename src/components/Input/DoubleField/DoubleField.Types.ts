import React from 'react';

export interface DoubleFieldProps {
  leftField: React.ReactElement;
  rightField: React.ReactElement;
  layout: LayoutDoubleField
};

export type LayoutDoubleField = '30/70' | '40/60' | '50/50' | '60/40' | '70/30';
