import React from 'react';
import { Check } from 'lucide-react';
import { SelectPrimitive } from '../../config/select.config';
import { cn } from '@/lib/utils';
import './select-item.styles.css';

const SelectItem = React.forwardRef(
  ({ className, children, ...props }, ref) => (
    <SelectPrimitive.Item
      ref={ref}
      className={cn('select-item', className)}
      {...props}
    >
      <span className="select-indicator-wrapper">
        <SelectPrimitive.ItemIndicator>
          <Check className="h-4 w-4" />
        </SelectPrimitive.ItemIndicator>
      </span>

      <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
    </SelectPrimitive.Item>
  )
);

SelectItem.displayName = SelectPrimitive.Item.displayName;

export { SelectItem };
