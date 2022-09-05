import React from "react";
import styled from "styled-components";
import NextLink from 'next/link'
import Layout from '../components/Layout'
const ErrorPage = () => {
  return <Layout>
    <Container>


      <ErrorCode>

        404
      </ErrorCode>
      <ErrorTitle>Sayfa Bulunamadı</ErrorTitle>
      <ErrorSubtitle>The page you're looking for does not seem to exist</ErrorSubtitle>
      <Flex>
        <HomeButton>
          <NextLink href={'/'}>Anasayfa'ya Geri Dön</NextLink>
        </HomeButton>
      </Flex>
    </Container>
  </Layout>;
};

export default ErrorPage;

const Container = styled.div`
display:flex;
flex-direction:column;
width:100%;
 
margin:auto;
 

`
const Flex = styled.div`
display:flex;
margin:auto;
`

const ErrorCode = styled.h1`
text-align:center;
font-size:72px;
color:green;
font-weight:700px;
margin:0;
padding:0;
`
const ErrorTitle = styled.p`
text-align:center;
font-size:32px;
color:gray;
font-weight:500px;
margin:0;
padding:0;
`
const ErrorSubtitle = styled.p`
text-align:center;
font-size:16px;
color:gray;
font-weight:700px;
`

const HomeButton = styled.button`
 border: 1px solid gray;
 border-radius:5px;
 cursor: pointer;
  padding:12px 20px;
  a{
    font-size:16px;
    color:black;
    font-weight:700px;
   
  }
  :hover{
      background-color:rgba(230, 230, 230, 0.8);
    }
`