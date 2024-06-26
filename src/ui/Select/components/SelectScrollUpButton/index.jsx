import { SelectPrimitive } from '../../config/select.config';
import * as React from 'react';
import { cn } from '@/lib/utils';
import { ChevronUp } from 'lucide-react';

import './select-scroll-up-button.styles.css';

const SelectScrollUpButton = React.forwardRef(
  ({ className, ...props }, ref) => (
    <SelectPrimitive.ScrollUpButton
      ref={ref}
      className={cn('select-scroll-up-btn ', className)}
      {...props}
    >
      <ChevronUp className="h-4 w-4" />
    </SelectPrimitive.ScrollUpButton>
  )
);
SelectScrollUpButton.displayName = SelectPrimitive.ScrollUpButton.displayName;

export { SelectScrollUpButton };
