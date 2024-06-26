import { cn } from '@/lib/utils';
import './modal-footer.styles.css';

const ModalDialogFooter = ({ className, ...props }) => (
  <div className={cn('modal-footer', className)} {...props} />
);
ModalDialogFooter.displayName = 'ModalDialogFooter';

export { ModalDialogFooter };
