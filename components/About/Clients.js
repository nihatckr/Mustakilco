import React from "react";
import styled from "styled-components";
import { clients } from "../data/client";
import NextImage from "next/image";
const Clients = () => {
  return (
    <>
      <Heading>MÜSTERİLERİMİZ</Heading>
      <Text>Türkiye’nin en iyi markalarıyla çalışmaktan gurur duyuyoruz!</Text>
      <ClientContainer>
        {clients.map((client) => {
          const { img, id, name } = client;
          return (
            <ClientCard key={id}>
              <NextImage
                src={img}
                alt={name}
                width={"100%"}
                height={"100%"}
                objectFit={"contain"}
                layout={"fixed"}
              />
            </ClientCard>
          );
        })}
      </ClientContainer>
    </>
  );
};

export default Clients;

const ClientContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;
  margin-bottom: 30px;
  margin: 0 25px;
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
  @media screen and (max-width: 480px) {
    flex-direction: column;
  }
`;
const ClientCard = styled.div`
  padding: 0 12px;
  img {
    width: 100%;
    height: 100%;
    max-width: 150px;
    object-fit: cover;
  }
`;

const Heading = styled.h1`
  color: black;
  font-size: 30px;
  z-index: 2;
  text-align: center;
`;
const Text = styled.p`
  color: black;
  font-size: 15px;
  z-index: 2;
  text-align: center;
`;
