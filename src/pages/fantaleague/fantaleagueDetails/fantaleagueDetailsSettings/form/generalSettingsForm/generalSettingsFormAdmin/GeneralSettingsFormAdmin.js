import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import LoadingButton from '@material-ui/lab/LoadingButton';
import { Skeleton } from '@material-ui/lab';
import Color from '../../../../../../../assets/Color';
import UserCard from '../../../../../../../components/display/card/userCard/userCard';

const Container = styled.div`
  width: 100%;
`;

const Title = styled.div`
  font-size: 24px;
  margin-bottom: 8px;
`;

const Description = styled.span`
  font-size: 14px;
`;

const NoPermission = styled.span`
  font-size: 12px;
  color: ${(p) => p.theme[Color.TEXT_LIGHT]};
`;

const Row = styled.span`
  display: ${(p) => p.flex && 'flex'};
  justify-content: ${(p) => p.spaced && 'space-between'};
  align-items: ${(p) => p.alignment};
`;

const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 -16px
`;

const StyledCard = styled(UserCard)`
  margin: 16px;
`;

const GeneralSettingsFormAdmin = (props) => {
  const { admins, participants, style, className, isAdmin, skeleton } = props;
  const { t } = useTranslation();

  // TODO Replace with useFetchType
  const fetching = false;
  const handleAddAdmin = () => {
  };

  console.log(participants);

  const renderSkeleton = () => (
    <>
      <Row flex spaced>
        <Skeleton variant="text" width={120} height={42} />
        <Skeleton variant="text" width={120} height={24} />
      </Row>
      <Skeleton variant="text" width="50%" height={24} style={{ marginTop: 8 }} />
      <CardContainer>
        <StyledCard
          disabled
          title={(<Skeleton variant="text" width={64} />)}
          subtitle={(<Skeleton variant="text" width={96} />)}
        />
        <StyledCard
          disabled
          title={(<Skeleton variant="text" width={64} />)}
          subtitle={(<Skeleton variant="text" width={96} />)}
        />
      </CardContainer>
    </>
  );

  if (skeleton) return renderSkeleton();

  return (
    <Container style={style} className={className}>
      <Row flex spaced alignment={isAdmin ? 'center' : 'baseline'}>
        <Title>{t('fantaleague.details.settings.tab.general.admin.title')}</Title>
        {isAdmin ? (
          <LoadingButton
            style={{ marginTop: -8 }}
            pending={fetching}
            variant="contained"
            color="primary"
            onClick={handleAddAdmin}
          >
            {t('fantaleague.details.settings.tab.general.admin.button')}
          </LoadingButton>
        )
          : <NoPermission>{t('fantaleague.details.settings.tab.general.admin.noPermissionButton')}</NoPermission>}
      </Row>
      <Row flex><Description>{t('fantaleague.details.settings.tab.general.admin.description')}</Description></Row>
      <CardContainer>
        {admins.map((admin) => (
          <StyledCard
            title={admin.username}
            subtitle={admin.fullName}
            key={admin.username}
          />
        ))}
      </CardContainer>
    </Container>
  );
};

GeneralSettingsFormAdmin.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
  admins: PropTypes.array,
  participants: PropTypes.array,
  isAdmin: PropTypes.bool,
  skeleton: PropTypes.bool,
};

GeneralSettingsFormAdmin.defaultProps = {
  style: undefined,
  className: undefined,
  admins: [],
  participants: [],
  isAdmin: false,
  skeleton: false,
};

export default GeneralSettingsFormAdmin;
