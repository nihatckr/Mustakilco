import Layout from "../components/Layout";

import styled from "styled-components";

import dynamic from "next/dynamic";
import Footer from "../components/Footer";

const ProjectsCards = dynamic(() => import("../components/ProjectsCards"));

const Projects = () => {
  return (
    <Layout>
      <Section>
        <ProjectsCards />
      </Section>
      <Footer />
    </Layout>
  );
};

export default Projects;

const Section = styled.section`
  display: grid;
  position: relative;

  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: masonry;
  margin-top: 180px;
  margin-right: 0.625rem;
  margin-left: 0.625rem;

  @media screen and (max-width: 599px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (min-width: 1200px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;
