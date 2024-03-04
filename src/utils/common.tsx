import React from 'react';

export const combineRefs = <T,>(...refs: Array<React.Ref<T> | undefined>) => {
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
