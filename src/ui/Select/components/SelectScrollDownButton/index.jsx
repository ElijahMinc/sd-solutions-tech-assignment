import { SelectPrimitive } from '../../config/select.config';
import * as React from 'react';
import { cn } from '@/lib/utils';
import { ChevronDown } from 'lucide-react';

import './select-scroll-down-button.styles.css';

const SelectScrollDownButton = React.forwardRef(
  ({ className, ...props }, ref) => (
    <SelectPrimitive.ScrollUpButton
      ref={ref}
      className={cn('select-scroll-down-btn ', className)}
      {...props}
    >
      <ChevronDown className="h-4 w-4" />
    </SelectPrimitive.ScrollUpButton>
  )
);
SelectScrollDownButton.displayName =
  SelectPrimitive.SelectScrollDownButton.displayName;

export { SelectScrollDownButton };
