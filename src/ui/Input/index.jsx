import React from 'react';
import { BaseInput } from './components/BaseInput';
import { Label } from './components/Label';

export const Input = ({ label = '', wrapperProps, ...restInputProps }) => {
  return (
    <div {...wrapperProps}>
      {label && <Label className="inline-block mb-4">{label}</Label>}
      <BaseInput {...restInputProps} />
    </div>
  );
};
