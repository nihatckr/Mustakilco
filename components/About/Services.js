import React from "react";
import styled from "styled-components";

import { useState } from "react";
import { aboutServices } from "../data/services";

export const Services = () => {
  const [services, setSrcvs] = useState(aboutServices);
  return (
    <GridBox>
      {services.map((service) => {
        const { id, title, subtitle, bgColor, textColor, img, area } = service;
        return (
          <Service
            key={id}
            color={bgColor}
            textColor={textColor}
            title={title}
            img={img}
            area={area}
          >
            {subtitle}
          </Service>
        );
      })}
    </GridBox>
  );
};

const GridBox = styled.main`
  display: grid;
  margin: 0 25px;
  gap: 1.5rem;
  grid-template-areas:
    "a a b"
    "c d b"
    "c e e"
    "f g h";
  padding-block: 2rem;
  margin-inline: auto;
  max-width: 1200px;

  @media screen and (max-width: 768px) {
    grid-template-areas:
      "a"
      "b"
      "c"
      "d"
      "e"
      "f"
      "h"
      "g";
  }
`;

const Service = ({ title, children, color, textColor, img, area }) => {
  return (
    <Article color={color} img={img} area={area}>
      <Title textColor={textColor}>{title}</Title>
      <Subtitle textColor={textColor}>{children}</Subtitle>
    </Article>
  );
};

const Article = styled.article`
  width: min(100%);
  min-height: 250px;
  padding: 2rem;
  margin-inline: auto;
  background-color: ${(props) => props.color};
  background-image: url(${(props) => props.img});
  background-position: center;
  background-clip: border-box;
  border-radius: 12px;
  border: #e6e6e6 solid 1px;
  grid-area: ${(props) => props.area};
`;

const Title = styled.h1`
  color: ${(props) => props.textColor};
  font-size: 22px;
  z-index: 2;
  margin-bottom: 30px;
`;
const Subtitle = styled.p`
  color: ${(props) => props.textColor};
  font-size: 18px;
  z-index: 2;
`;
