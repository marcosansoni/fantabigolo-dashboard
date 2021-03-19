import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import NavBar from '../../components/display/navBar/NavBar';
import Color from '../../assets/Color';
import Page from '../../components/display/navBar/Page';
import Routes from '../../route/Routes';

const Center = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledLink = styled(Link)`
  text-decoration: unset;
  font-size: 18px;
  color: ${(p) => p.theme[Color.BACKGROUND]};
  padding: 0 32px;
`;

const Home = () => {
  const { t } = useTranslation();

  return (
    <>
      <NavBar>
        <StyledLink to={Routes.FANTALEAGUE.LIST}>
          {t('home.navbar.fantaleague')}
        </StyledLink>
      </NavBar>
      <Page>
        <Center>
          The best is yet to come
        </Center>
      </Page>
    </>
  );
};

export default Home;
