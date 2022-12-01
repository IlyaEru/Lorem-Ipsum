import React from 'react';
import { StyledParagraph, StyledParagraphs } from './Paragraphs.style';

export default function Paragraphs({
  textList,
  displayedParagraphs,
}: {
  textList: string[];
  displayedParagraphs: number;
}) {
  return (
    <StyledParagraphs>
      {textList.slice(0, displayedParagraphs).map((text, index) => (
        <StyledParagraph key={index}>{text}</StyledParagraph>
      ))}
    </StyledParagraphs>
  );
}
