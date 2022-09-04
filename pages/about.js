import styled from "styled-components";

import Layout from "../components/Layout";
import Hero from "../components/About/Hero";
import AboutText from "../components/About/AboutText";

import Footer from "../components/Footer";
import { Services } from "../components/About/Services";
import Clients from "../components/About/Clients";

const Container = styled.div`
  margin-top: 225px;
  margin: auto;
  padding: 0;
`;

const Box = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100vw;
`;
const About = () => {
  return (
    <Layout>
      <Container>
        <Hero />
        <Box>
          <AboutText />
        </Box>
        <Box>
          <Services />
        </Box>
        <Box>
          <Clients />
        </Box>
        <Footer />
      </Container>
    </Layout>
  );
};

export default About;
