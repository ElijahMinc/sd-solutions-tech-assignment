import { ModalDialogContent } from './components/ModalContent';
import { ModalDialogDescription } from './components/ModalDescription';
import { ModalDialogFooter } from './components/ModalFooter';
import { ModalDialogHeader } from './components/ModalHeader';
import { ModalDialogTitle } from './components/ModalTitle';
import { ModalDialog, ModalDialogTrigger } from './config/modal.config';

export const Modal = ({
  title,
  description,
  children,

  isOpen,
  handleOpenChange,

  asTriggerButton,
  Footer,
}) => {
  return (
    <ModalDialog open={isOpen} onOpenChange={handleOpenChange}>
      <ModalDialogTrigger asChild>{asTriggerButton}</ModalDialogTrigger>

      <ModalDialogContent>
        <ModalDialogHeader>
          {title && <ModalDialogTitle>{title}</ModalDialogTitle>}

          {description && (
            <ModalDialogDescription>{description}</ModalDialogDescription>
          )}
        </ModalDialogHeader>
        {children}
        <ModalDialogFooter>{Footer}</ModalDialogFooter>
      </ModalDialogContent>
    </ModalDialog>
  );
};
