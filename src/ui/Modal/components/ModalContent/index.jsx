import * as React from 'react';
import * as AlertDialogPrimitive from '@radix-ui/react-alert-dialog';
import { AlertDialogOverlay, ModalDialogOverlay } from '../ModalOverlay';
import { cn } from '@/lib/utils';
import { ModalDialogPortal } from '../../config/modal.config';

import './modal-content.styles.css';

const ModalDialogContent = React.forwardRef(({ className, ...props }, ref) => (
  <ModalDialogPortal>
    <ModalDialogOverlay />
    <AlertDialogPrimitive.Content
      ref={ref}
      className={cn('modal-content', className)}
      {...props}
    />
  </ModalDialogPortal>
));

ModalDialogContent.displayName = AlertDialogPrimitive.Content.displayName;

export { ModalDialogContent };
