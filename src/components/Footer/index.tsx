
import * as Styled from './styles';
import { TextComponent } from '../HtmlContent';

export type FooterProps = {
  footerHtml: string
}

export const Footer = ({ footerHtml }: FooterProps) => {
  return (
    <Styled.Container>
        <TextComponent html={footerHtml}/>
    </Styled.Container>
  );
};
