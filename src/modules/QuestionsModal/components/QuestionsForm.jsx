'use client';

import { Input } from '@/ui/input';
import { BaseSelect } from '@/ui/select';
import { useState } from 'react';
import { questionOptions } from '../constants/questionOptions';
import { getIsSaveEnabledChoice } from '../helpers/getIsSaveEnabledChoice';
import { Button } from '@/ui/Button';
import { updateChoicesStateByIdFieldValue } from '../helpers/getUpdatedChoice';
import { isEmptyTitle } from '../helpers/isEmptyTitle';

export const QuestionsForm = ({ onSave }) => {
  const [title, setTitle] = useState('');

  const [choices, setChoices] = useState([
    { id: 1, text: '', type: '' },
    { id: 2, text: '', type: '' },
  ]);

  const [isShowChoices, setShowChoices] = useState(false);

  const handleChangeChoiceItem = ({ currentId, field, value }) =>
    setChoices(updateChoicesStateByIdFieldValue({ currentId, field, value }));

  const handleShowChoices = () => setShowChoices(true);

  const handleSave = () => {
    onSave({ title, choices });
    setShowChoices(false);
  };

  const handleChangeTitle = (e) => setTitle(e.target.value);

  const isSaveEnabled = getIsSaveEnabledChoice(choices);

  const Choices = () =>
    choices.map(({ text, type, id }, idx) => (
      <div key={id} className="mb-4">
        <Input
          type="text"
          label={`Choice ${idx + 1}`}
          value={text}
          onChange={(e) =>
            handleChangeChoiceItem({
              currentId: id,
              field: 'text',
              value: e.target.value,
            })
          }
          wrapperProps={{
            className: 'mb-4',
          }}
        />
        <BaseSelect
          handleValueChange={(value) => {
            handleChangeChoiceItem({
              currentId: id,
              field: 'type',
              value,
            });
          }}
          data={questionOptions}
          currentPlaceholder={type}
          currentValue={text}
        />
      </div>
    ));

  const addQuestionButton = () =>
    !isEmptyTitle(title) && (
      <Button className="w-full" onClick={handleShowChoices}>
        Add Question
      </Button>
    );

  return (
    <div>
      <Input
        type="text"
        value={title}
        onChange={handleChangeTitle}
        wrapperProps={{
          className: 'mb-4',
        }}
      />
      {!isShowChoices ? addQuestionButton() : Choices()}

      {isSaveEnabled && (
        <Button className="w-full" onClick={handleSave}>
          Save
        </Button>
      )}
    </div>
  );
};
