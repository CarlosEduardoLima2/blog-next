
import * as Styled from './styles';
import React from 'react';

export type MenuLinkProps = {
  children: React.ReactNode,
  link: string,
  newTab?: boolean

}

export const MenuLink = ({ children, link, newTab = false }: MenuLinkProps) => {
  const target = newTab ? '_blank' : '_self';
  const nextLink = link.match(/^\//) ? true : false;

  if(nextLink){
    return (
      <Styled.Container href={link}>
        {children}
      </Styled.Container>
    );
  }
  return (
    <Styled.Container href={link} target={target}>
      {children}
    </Styled.Container>
  );
};
