import * as React from 'react';

import { cn } from '@/lib/utils';

import './base-input.styles.css';

const BaseInput = React.forwardRef(({ className, type, ...props }, ref) => (
  <input type={type} className={cn('input', className)} ref={ref} {...props} />
));

BaseInput.displayName = 'Input';

export { BaseInput };
