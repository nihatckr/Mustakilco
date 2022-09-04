import styled from "styled-components";
import Head from "next/head";
import Nav from "../Nav";

const Layout = ({ children }) => {
  return (
    <Flex>
      <Head>
        <title>Mustakil Interior Architectural Visualization</title>
        <meta
          name='description'
          content='Author: Mustakil, Category: Architecture, Price:  £9.24, Length: 1 pages'
        />
      </Head>
      <Container>
        <Nav />
        <Main>{children}</Main>
      </Container>
    </Flex>
  );
};

export default Layout;

const Flex = styled.div`
  height: 100vh;
  width: 100vw;
  position: relative;
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
`;

const Main = styled.main`
  display: flex;
  flex-direction: column;
  flex: 1;
  margin-top: -120px;
`;
