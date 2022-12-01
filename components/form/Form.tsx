import React, { useState } from 'react';
import { StyledForm, StyledSubmitButton } from './Form.style';

interface FormProps {
  setDisplayedParagraphs: React.Dispatch<React.SetStateAction<number>>;
}

export default function Form({ setDisplayedParagraphs }: FormProps) {
  const [paragraphs, setParagraphs] = useState(0);

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (paragraphs < 0) {
      setDisplayedParagraphs(1);
    } else if (paragraphs > 8) {
      setDisplayedParagraphs(8);
    } else {
      setDisplayedParagraphs(paragraphs);
    }
  };
  return (
    <StyledForm onSubmit={handleFormSubmit}>
      <label htmlFor="paragraph-input">Paragraphs: </label>
      <input
        value={paragraphs}
        onChange={(e) => setParagraphs(Number(e.target.value))}
        type="number"
        id="paragraph-input"
        name="paragraph-input"
      />
      <StyledSubmitButton type="submit">Generate</StyledSubmitButton>
    </StyledForm>
  );
}
