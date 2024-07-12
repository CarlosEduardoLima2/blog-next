
import * as Styled from './styles';
import { Heading } from '../Heading';

export type LogoLinkProps = {
  text: string,
  srcImg?: string,
  link: string,
  newTable?: boolean
}

export const LogoLink = ({ text, srcImg = '', link, newTable = false }: LogoLinkProps) => {
  const nextLink = link.match(/^\//) ? true : false;
  const target = newTable ? '_blank' : '_self';

  if(nextLink){
    return (
      <Heading size="small" uppercase>
        <Styled.Container href={link} target={target}>
          {!!srcImg && <img src={srcImg} alt={text} />}
          {!srcImg && text}
        </Styled.Container>
      </Heading>
    );
  }

  return (
    <Heading size="small" uppercase>
      <Styled.Container href={link} target={target}>
        {!!srcImg && <img src={srcImg} alt={text} />}
        {!srcImg && text}
      </Styled.Container>
    </Heading>
  );
};