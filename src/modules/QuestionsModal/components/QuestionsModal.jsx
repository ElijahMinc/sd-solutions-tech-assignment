import { Modal } from '@/ui/Modal';
import { useState } from 'react';
import { QuestionsForm } from './QuestionsForm';
import { ModalDialogCancel } from './QuestionCancelButton';
import { Button } from '@/ui/Button';

export function QuestionsModal({ onSave }) {
  const [isOpen, setIsOpen] = useState(true);

  const handleSave = (question) => {
    setIsOpen(false);
    onSave?.(question);
  };

  const modalTitle = 'Please, enter the title of your question';
  const modalCancelButtonText = 'Cancel';
  const modalTriggerButtonText = 'Add Question';

  return (
    <Modal
      title={modalTitle}
      isOpen={isOpen}
      handleOpenChange={(status) => setIsOpen(status)}
      Footer={<ModalDialogCancel>{modalCancelButtonText}</ModalDialogCancel>}
      asTriggerButton={<Button>{modalTriggerButtonText}</Button>}
    >
      <QuestionsForm onSave={handleSave} />
    </Modal>
  );
}
