import styled from "styled-components";

import Layout from "../components/Layout";

import { motion } from "framer-motion";

import dynamic from "next/dynamic";
import FooterNav from "../components/Footer";

const Map = dynamic(() => import("../components/Map"));

const Details = dynamic(() => import("../components/Services/Details"));

const map = {
  initial: {
    y: -200,
    opacity: 0,
    transition: {
      duration: 0.1,
    },
  },
  animate: { y: 0, opacity: 1 },
};
const mapDetail = {
  initial: {
    y: 200,
    opacity: 0,
    transition: {
      duration: 0.1,
    },
  },
  animate: { y: 0, opacity: 1 },
};
const Contact = () => {
  return (
    <Layout>
      <ContainerFlex>
        <motion.div animate='animate' initial='initial' variants={map}>
          <Map />
        </motion.div>
        <Flex animate='animate' initial='initial' variants={mapDetail}>
          <Details />
        </Flex>
        <FooterNav />
      </ContainerFlex>
    </Layout>
  );
};

export default Contact;

const ContainerFlex = styled.div`
  display: flex;
  width: 100%;
  margin: auto;
  flex-direction: column;
  margin-bottom: 20px;
  min-height: 340px;
  margin-top: 180px;
  @media screen and (max-width: 600px) {
    margin-top: 120px;
  }
`;
const Flex = styled(motion.div)`
  display: flex;
  width: 75%;
  background-color: ${(props) => props.theme.colors.white};
  margin: 0 auto;
  margin-top: -150px;
  min-height: 340px;
  border-radius: 10px;
  z-index: 1;
  margin-bottom: 60px;
  flex-direction: column;
  @media screen and (max-width: 600px) {
    margin-top: 0;
  }
`;
