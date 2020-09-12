import React from 'react';
import styled from 'styled-components';
import { Color } from '../../../../assets/theme';

const Container = styled.div`
  padding: 8px 0;
  width: 250px
`;

const Description = styled.div`
  font-size: 14px;
  font-weight: 600;
  padding-left: 16px;
`;

const League = styled.div`
  padding: 8px 16px;
  font-size: 12px;
  display: flex;
  
  :hover{
    background-color: ${(p) => p.theme[Color.SECONDARY]};
  }
`;

const All = styled.div`
  padding: 8px 16px;
  font-size: 12px;
  display: flex;
  
  :hover{
    background-color: ${(p) => p.theme[Color.SECONDARY]};
  }
`;

const New = styled.div`
  padding: 8px 16px;
  font-size: 12px;
  display: flex;
  font-weight: 625;
  
  :hover{
    background-color: ${(p) => p.theme[Color.SECONDARY]};
  }
`;

const Separator = styled.div`
  height: 2px;
  width: 100%;
  background-color: ${(p) => p.theme[Color.NEUTRAL]};
  margin: 8px 0;
`;

const FantaDropdown = (props) => {
  const {
    listFantaLeague = ['Lega 1', 'Lega 2'],
  } = props;

  const renderLeagues = (league) => (
    <League>{league}</League>
  );

  return (
    <Container>
      {listFantaLeague.length > 0 && (
        <>
          <Description>
            Recenti
          </Description>
          {listFantaLeague.map(renderLeagues)}
          <Separator />
          <All>Vedi tutte le fantaleghe</All>
          <New>Crea una nuova fantalega</New>
        </>
      )}
    </Container>
  );
};

export default FantaDropdown;
