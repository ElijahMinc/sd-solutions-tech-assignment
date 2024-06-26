import * as React from 'react';
import { SelectPrimitive } from '../../config/select.config';
import { SelectScrollDownButton } from '../SelectScrollDownButton';
import { SelectScrollUpButton } from '../SelectScrollUpButton';
import { cn } from '@/lib/utils';

import './select-content.styles.css';

const SelectContent = React.forwardRef(
  ({ className, children, position = 'popper', ...props }, ref) => (
    <SelectPrimitive.Portal>
      <SelectPrimitive.Content
        ref={ref}
        className={cn(
          'select-content',
          position === 'popper' && 'select-content-popper',
          className
        )}
        position={position}
        {...props}
      >
        <SelectScrollUpButton />
        <SelectPrimitive.Viewport
          className={cn(
            'p-1',
            position === 'popper' && 'select-content__viewport-popper'
          )}
        >
          {children}
        </SelectPrimitive.Viewport>
        <SelectScrollDownButton />
      </SelectPrimitive.Content>
    </SelectPrimitive.Portal>
  )
);
SelectContent.displayName = SelectPrimitive.Content.displayName;

export { SelectContent };
