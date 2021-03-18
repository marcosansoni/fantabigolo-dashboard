import React from 'react';
import styled from 'styled-components';
import PerfectScrollbar from 'react-perfect-scrollbar';
import NavBar from '../../components/display/navBar/NavBar';

const Center = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Container = styled.div`
  margin-top: -64px;
  padding-top: 64px;
  width: 100%;
  height: 100%;
`;

const Home = () => {
  console.log('Home page');

  return (
    <>
      <NavBar />
      <Container>
        <PerfectScrollbar>
          <Center>
            To the fantaleague
          </Center>
        </PerfectScrollbar>
      </Container>
    </>
  );
};

export default Home;
