import { cn } from '@/lib/utils';

import './modal-header.styles.css';

const ModalDialogHeader = ({ className, ...props }) => (
  <div className={cn('modal-header', className)} {...props} />
);

ModalDialogHeader.displayName = 'ModalDialogHeader';

export { ModalDialogHeader };
