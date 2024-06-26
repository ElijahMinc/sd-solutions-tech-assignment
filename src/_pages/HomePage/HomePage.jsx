'use client';

import { QuestionsModal } from '@/modules/QuestionsModal';
import { Pre } from '@/ui/Pre';
import React, { useState } from 'react';

export const HomePage = () => {
  const [questions, setQuestions] = useState([]);

  const handleSaveQuestion = (question) =>
    setQuestions((questions) => [...questions, question]);

  const homePageTitle = 'Questions';

  return (
    <div className="p-6">
      <h1 className="h1">{homePageTitle}</h1>
      <QuestionsModal onSave={handleSaveQuestion} />
      <Pre data={questions} />
    </div>
  );
};
