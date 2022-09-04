import React from "react";
import styled from "styled-components";

const FooterNav = ({ previousImage, nextImage }) => {
  return (
    <Navigation>
      <Button>
        <Icon viewBox={"0 0 256 512"} onClick={previousImage}>
          <path
            d={
              "M192 448c-8.188 0-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25l160-160c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L77.25 256l137.4 137.4c12.5 12.5 12.5 32.75 0 45.25C208.4 444.9 200.2 448 192 448z"
            }
          />
        </Icon>
        <Icon viewBox={"0 0 256 512"} onClick={nextImage}>
          <path
            d={
              "M64 448c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L178.8 256L41.38 118.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160c12.5 12.5 12.5 32.75 0 45.25l-160 160C80.38 444.9 72.19 448 64 448z"
            }
          />
        </Icon>
      </Button>
    </Navigation>
  );
};

export default FooterNav;

const Navigation = styled.nav`
  display: flex;
  position: absolute;
  bottom: 0;
  right: 0;
  z-index: 1;
`;
const Button = styled.div`
  display: flex;
  align-items: center;
  padding: 60px 20px;
  height: 100px;
  z-index: 1;
  h2 {
    text-align: center;
    text-transform: uppercase;
    font-size: 20px;
    margin-right: 40px;
  }
`;

const Icon = styled.svg`
  fill: #383838;

  cursor: pointer;
  z-index: 2;
  transition: fill 0.25s;
  width: 40px;
  height: 40px;
  @media screen and (max-width: 768px) {
    fill: #ffffff;
  }
  @media screen and (max-width: 480px) {
    fill: #ffffff;
  }
`;
