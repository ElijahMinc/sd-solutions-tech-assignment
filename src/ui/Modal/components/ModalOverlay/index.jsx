import * as React from 'react';
import * as AlertDialogPrimitive from '@radix-ui/react-alert-dialog';
import { cn } from '@/lib/utils';
import './modal-overlay.styles.css';

const ModalDialogOverlay = React.forwardRef(({ className, ...props }, ref) => (
  <AlertDialogPrimitive.Overlay
    className={cn('modal-overlay', className)}
    {...props}
    ref={ref}
  />
));

ModalDialogOverlay.displayName = AlertDialogPrimitive.Overlay.displayName;

export { ModalDialogOverlay };
