import React, { useState } from 'react';
import {
  Input, Row, Col, Select, InputNumber, Button,
} from 'antd';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import ContainerPage, { ToolbarItem } from '../../../components/layout/ContainerPage';
import Field from '../../../components/input/Field';
import Section from '../../../components/display/Section';
import H3 from '../../../components/typography/heading/H3';
import P from '../../../components/typography/paragraph/P';
import { Color } from '../../../assets/theme';
import useTheme from '../../../hooks/useTheme';
import { userInfoActionCreator } from '../../../store/user/userActionCreator';
import createFantaLeagueCreator
  from '../../../store/fantaleague/actionCreators/createFantaLeagueCreator';

const { Option } = Select;

const Container = styled.div`
  padding: 48px 0;
`;

const ContainerButton = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: flex-end;
`;

const NewFantaLeague = () => {
  const [fantaTeam, setFantaTeam] = useState();
  const [fantaLeague, setFantaLeague] = useState();
  const [visibility, setVisibility] = useState(0);
  const [competition, setCompetition] = useState(1);
  const [partecipant, setPartecipant] = useState();

  const { theme } = useTheme();

  const dispatch = useDispatch();

  const handleClickCreate = () => {
    // TODO insert validation
    dispatch(createFantaLeagueCreator({
      leagueName: fantaLeague,
      teamName: fantaTeam,
      inviteVisibility: visibility,
      competition,
      partecipants: partecipant,
    }));
  };

  return (
    <ContainerPage selectedItem={ToolbarItem.FANTALEAGUE}>
      <Section title={(<H3>Crea una nuova fantalega</H3>)}>
        <Container>
          <P>
            In questa prima fase verranno richieste solamente le informazioni fondamentali richieste
            per la creazione della fantalega.
            Sarà possibile poi modificare le regole ed i partecipanti.
          </P>
          <Row gutter={[48, 48]} style={{ paddingTop: 24 }}>
            <Col span={8}>
              <Field
                title="Nome fantalega"
                description="Il nome utilizzato e visualizzato della fantalega"
              >
                <Input value={fantaLeague} onChange={(v) => setFantaLeague(v.target.value)} />
              </Field>
            </Col>
            <Col span={8}>
              <Field
                title="Nome fantaTeam"
                description="Il nome del tuo team all'interno della fantalega"
              >
                <Input value={fantaTeam} onChange={(v) => setFantaTeam(v.target.value)} />
              </Field>
            </Col>
            <Col span={8}>
              <Field
                title="Visibilità"
                description="Le possibili visibilità del campionato"
              >
                <Select
                  value={visibility}
                  style={{ width: '100%' }}
                  onChange={(updated) => setVisibility(updated)}
                >
                  <Option value={0}>Chiuso</Option>
                  <Option value={1}>1</Option>
                  <Option value={2}>2</Option>
                </Select>
              </Field>
            </Col>
            <Col span={8}>
              <Field
                title="Tipo di competizione"
                description="Le possibili modalità di competizione"
              >
                <Select
                  value={competition}
                  style={{ width: '100%' }}
                  onChange={(updated) => setCompetition(updated)}
                >
                  <Option value={1}>Classic</Option>
                  <Option value={2}>Simplified</Option>
                  <Option value={3}>F1</Option>
                  <Option value={4}>Knockout</Option>
                  <Option value={5}>Champions League</Option>
                </Select>
              </Field>
            </Col>
            <Col span={8}>
              <Field
                title="Partecipanti"
                description="Il numero massimo di partecipanti della fantalega"
              >
                <InputNumber
                  style={{ width: '100%' }}
                  value={partecipant}
                  onChange={(v) => setPartecipant(v)}
                />
              </Field>
            </Col>
          </Row>
          <Row>
            <ContainerButton>
              <Button
                style={{ backgroundColor: theme[Color.PRIMARY], color: theme[Color.BACKGROUND] }}
                onClick={handleClickCreate}
              >
                Crea
              </Button>
            </ContainerButton>
          </Row>
        </Container>

      </Section>
    </ContainerPage>
  );
};

export default NewFantaLeague;
