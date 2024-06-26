import { SelectPrimitive } from '../../config/select.config';
import { cn } from '@/lib/utils';

import './select-separator.styles.css';

const SelectSeparator = React.forwardRef(({ className, ...props }, ref) => (
  <SelectPrimitive.Separator
    ref={ref}
    className={cn('select-separator', className)}
    {...props}
  />
));
SelectSeparator.displayName = SelectPrimitive.Separator.displayName;

export { SelectSeparator };
