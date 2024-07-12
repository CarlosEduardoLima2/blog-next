
import * as Styled from './styles';
import React from 'react';

export type HtmlContnetProps = {
  html: string
}

export const HtmlContnet = ({ html }: HtmlContnetProps) => {
  return <Styled.Container dangerouslySetInnerHTML={{ __html: html }} />;
};
