import * as AlertDialogPrimitive from '@radix-ui/react-alert-dialog';
import * as React from 'react';
import { cn } from '@/lib/utils';
import './modal-description.styles.css';

const ModalDialogDescription = React.forwardRef(
  ({ className, ...props }, ref) => (
    <AlertDialogPrimitive.Description
      ref={ref}
      className={cn('modal-description', className)}
      {...props}
    />
  )
);
ModalDialogDescription.displayName =
  AlertDialogPrimitive.Description.displayName;

export { ModalDialogDescription };
