import React from "react";
import styled from "styled-components";
import { socials } from "../data/menu";
import NextLink from "next/link";

const StyledIcon = () => {
  return (
    <ContainerSocial>
      {socials.map((social) => {
        const { id, pathd, viewBox, href } = social;
        return (
          <NextLink key={id} href={href}>
            <StyledLink>
              <Icon key={id} viewBox={viewBox}>
                <path d={pathd} />
              </Icon>
            </StyledLink>
          </NextLink>
        );
      })}
    </ContainerSocial>
  );
};

export default StyledIcon;

const ContainerSocial = styled.div`
  display: flex;

  @media screen and (max-width: 600px) {
    justify-content: center;
    margin-top: 20px;
    margin-bottom: 20px;
  }
`;
const StyledLink = styled.a`
  cursor: pointer;
  color: ${(props) => props.theme.colors.black};
  &:not(:last-child) {
    margin-right: 12px;
  }
`;

const Icon = styled.svg`
  flex: none;
  transition: fill 0.25s;
  width: 20px;
  height: 20px;

  ${StyledLink}:hover & {
    fill: ${(props) => props.theme.colors.blue};
  }
`;
