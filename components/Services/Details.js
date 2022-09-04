import React from "react";
import styled from "styled-components";
import NextLink from "next/link";

const Details = () => {
  return (
    <>
      <HeadingBox>
        <h2>Müstakil Design </h2>
        <p>3865, Kadıköy, İstanbul, Türkiye </p>
      </HeadingBox>
      <StyledHR maxW={"4rem"} />
      <SubHeadingBox>
        <div>
          <h1> Genel Bilgiler</h1>
          <NextLink href='/'> mail@mustakil.co</NextLink>
        </div>
      </SubHeadingBox>
      <GridBox>
        <div>
          <StyledHR maxW={"3rem"} />
          <h3>Proje</h3>
          <h4>proje@mustakil.co</h4>
          <p>
            <NextLink href='/'> +90 532 465 4790</NextLink>
          </p>
        </div>

        <div>
          <StyledHR maxW={"3rem"} />
          <h3>Sanal Gerçeklik (VR)</h3>
          <h4>vr@mustakil.co</h4>
          <p>
            <NextLink href='/'> +90 532 465 4790</NextLink>
          </p>
        </div>
        <div>
          <StyledHR maxW={"3rem"} />
          <h3>Ürün Görselleştirme</h3>
          <h4>urun@mustakil.co</h4>
          <p>
            <NextLink href='/'>+90 532 465 4790</NextLink>
          </p>
        </div>
      </GridBox>
    </>
  );
};

export default Details;
const HeadingBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 50px;
  align-items: center;

  h2 {
    margin: 0;
    color: ${(props) => props.theme.colors.blue};
    font-size: ${(props) => props.theme.fontSize.xxxl};
    line-height: ${(props) => props.theme.fontLineHeight.xxxl};
    font-weight: ${(props) => props.theme.fontWeight.md};
  }

  p {
    margin: 0;
    margin-bottom: 2.5rem;
    color: ${(props) => props.theme.colors.black};
    font-size: ${(props) => props.theme.fontSize.xl};
    line-height: ${(props) => props.theme.fontLineHeight.xl};
    font-weight: ${(props) => props.theme.fontWeight.sm};
  }
  @media screen and (max-width: 600px) {
    margin-top: 40px;
    h2 {
      font-size: ${(props) => props.theme.fontSize.xxl};
      line-height: ${(props) => props.theme.fontLineHeight.xxl};
    }
    p {
      font-size: ${(props) => props.theme.fontSize.sm};
      line-height: ${(props) => props.theme.fontLineHeight.sm};
    }
  }
`;

const SubHeadingBox = styled.div`
  div {
    font-size: ${(props) => props.theme.fontSize.md};
    line-height: ${(props) => props.theme.fontLineHeight.md};

    display: flex;
    flex-direction: column;
    text-align: center;
    h1 {
      font-size: ${(props) => props.theme.fontSize.md};
      line-height: ${(props) => props.theme.fontLineHeight.md};
      color: ${(props) => props.theme.colors.antrasite};
    }
    a {
      color: ${(props) => props.theme.colors.blue};
      :hover {
        color: ${(props) => props.theme.colors.antrasite};
      }
    }
  }
  @media screen and (max-width: 600px) {
    margin-top: 40px;
    p {
      > h1 {
        font-size: ${(props) => props.theme.fontSize.xxl};
        line-height: ${(props) => props.theme.fontLineHeight.xxl};
        color: ${(props) => props.theme.colors.antrasite};
      }
    }
  }
`;

const StyledHR = styled.hr`
  max-width: ${({ maxW }) => maxW};
  background-color: #0a0a0a;
  height: 1px;
  width: 100%;
  margin: 1.25rem auto;
  @media screen and (max-width: 600px) {
    margin: 1.15rem auto;
  }
`;

const GridBox = styled.div`
  margin-top: 3.5rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);

  padding: 0;
  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0;
    padding: 0;
    h3 {
      margin: 0;
      padding: 0;
      font-size: ${(props) => props.theme.fontSize.md};
      line-height: ${(props) => props.theme.fontLineHeight.md};
      font-weight: ${(props) => props.theme.fontWeight.md};
      color: ${(props) => props.theme.colors.blue};
    }
    h4 {
      margin: 0;
      margin-bottom: 0.75em;
      padding: 0;
      font-size: ${(props) => props.theme.fontSize.xl};
      line-height: ${(props) => props.theme.fontLineHeight.xl};
      font-weight: ${(props) => props.theme.fontWeight.sm};
      color: ${(props) => props.theme.colors.antrasite};
    }
    p {
      margin: 0;
      padding: 0;
      margin-bottom: 0.75em;
      font-size: ${(props) => props.theme.fontSize.sm};
      line-height: ${(props) => props.theme.fontLineHeight.sm};
      font-weight: ${(props) => props.theme.fontWeight.sm};

      a {
        color: ${(props) => props.theme.colors.blue};
      }
    }
  }
  @media screen and (max-width: 600px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
