import React from "react";
import styled from "styled-components";

import StyledIcon from "../StyledIcon";
import NextLink from "next/link";

const Footer = () => {
  return (
    <StyledFooter>
      <FooterContainer>
        <FooterLogo>
          <Text>
            © 2012-2022 Mustakil Visual Solutions. All Rights Reserved.
          </Text>
          <NextLink href={"/privacy-policy"}>
            <Text>Privacy Policy </Text>
          </NextLink>
        </FooterLogo>
        <FooterIcons>
          <StyledIcon />
        </FooterIcons>
      </FooterContainer>
    </StyledFooter>
  );
};

export default Footer;

const StyledFooter = styled.footer`
  color: ${(props) => props.theme.colors.black};
  min-height: 60px;
  margin: 0 25px;
  align-items: center;
`;
const FooterContainer = styled.div`
  display: flex;

  justify-content: space-between;

  @media screen and (max-width: 600px) {
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
`;
const Text = styled.p`
  color: ${(props) => props.theme.colors.black};
  font-size: ${(props) => props.theme.fontSize.xs};
  line-height: ${(props) => props.theme.fontSize.xs};

  @media screen and (max-width: 600px) {
    display: flex;
    flex-direction: column;
  }
`;
const FooterIcons = styled.div``;
const FooterLogo = styled.div`
  display: flex;
  @media screen and (max-width: 600px) {
    flex-direction: column;
    justify-content: center;
    text-align: center;
  }
`;
