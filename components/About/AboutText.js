import React from "react";
import styled from "styled-components";

const Heading = styled.h1`
  margin: auto;
  padding: 40px 0px;
  color: black;
  font-size: 30px;
  text-align: center;
  @media screen and (max-width: 768px) {
    font-size: 22px;
    margin: auto;
    text-align: center;
  }
  @media screen and (max-width: 480px) {
    font-size: 22px;
    text-align: center;
  }
`;

const AboutHeading = styled.div`
  width: 1024px;
  height: 200px;
  margin: auto;
  padding: 10px;
  overflow: auto;
  overflow-x: hidden;
  display: flex;
  margin-bottom: 40px;
  ::-webkit-scrollbar {
    width: 4px;
  }
  ::-webkit-scrollbar-corner {
    background-color: red;
  }
  ::-webkit-scrollbar-thumb {
    background-color: orange;
    border-radius: 2px;
  }

  @media screen and (max-width: 768px) {
    overflow: auto;
    overflow-x: hidden;
    width: 700px;
    height: 200px;
    font-size: 32px;
    margin-bottom: 10px;
  }
  @media screen and (max-width: 480px) {
    overflow: auto;
    overflow-x: hidden;
    font-size: 16px;
    width: 400px;
    height: 100px;
    margin-bottom: 10px;
  }
`;

const Text = styled.p`
  color: black;
  font-size: 30px;
  @media screen and (max-width: 768px) {
    font-size: 18px;
  }
  @media screen and (max-width: 480px) {
    font-size: 12px;
  }
`;

const AboutText = () => {
  return (
    <>
      <Heading>DUYGULARI, DENEYİME DÖNÜŞTÜRMEYE YARDIMCI OLUYORUZ.</Heading>
      <AboutHeading>
        <Text>
          İç mimari projelerin tümünü bir “yaşam alanı” olarak tasarlar, her
          mekâna bu anlayışla yaklaşırız. Bu ister bir ofis isterse bir otel
          odası olsun kullanıcıların mekânı nasıl tecrübe edeceğinden
          ihtiyaçlarına kadar tüm verilerin değerlendirmelerini yaparak bütün bu
          bilgiyi tasarımlarımıza yansıtırız. Nitelikli bir üretimin, sürecin
          devamlılığı kadar işverenle etkileşimli bir diyalog sayesinde mümkün
          olduğuna inanıyoruz. Bu yaklaşımı, kullanıcıya kaliteli bir mekân
          deneyimi sağlamanın en önemli aracı olarak benimsiyoruz.
        </Text>
      </AboutHeading>
    </>
  );
};

export default AboutText;
