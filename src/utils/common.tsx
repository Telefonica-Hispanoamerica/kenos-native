import React from 'react';

export const combineRefs = <T extends any>(...refs: Array<React.RefObject<T> | ((instance: T | null) => void) | null>) => {
  return (refValue: T | null) => {
    refs.forEach(ref => {
      if (!ref) return;
      if (typeof ref === 'function') {
        ref(refValue);
      } else {
        // @ts-ignore
        ref.current = refValue;
      }
    });
  };
};
