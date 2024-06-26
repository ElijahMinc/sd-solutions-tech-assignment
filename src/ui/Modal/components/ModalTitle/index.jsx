import * as AlertDialogPrimitive from '@radix-ui/react-alert-dialog';
import * as React from 'react';
import { cn } from '@/lib/utils';

const ModalDialogTitle = React.forwardRef(({ className, ...props }, ref) => (
  <AlertDialogPrimitive.Title
    ref={ref}
    className={cn('modal-title', className)}
    {...props}
  />
));
ModalDialogTitle.displayName = AlertDialogPrimitive.Title.displayName;

export { ModalDialogTitle };
