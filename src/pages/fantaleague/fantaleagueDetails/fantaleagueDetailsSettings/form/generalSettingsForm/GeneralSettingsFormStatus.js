import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import LoadingButton from '@material-ui/lab/LoadingButton';
import { Skeleton } from '@material-ui/lab';
import Font from '../../../../../../assets/Font';
import Color from '../../../../../../assets/Color';

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

const Status = styled.span`
  font-family: ${Font.SEMIBOLD};
  padding-right: 4px;
`;

const Row = styled.span`
  display: ${(p) => p.flex && 'flex'};
  justify-content: ${(p) => p.spaced && 'space-between'};
`;

const GeneralSettingsFormStatus = (props) => {
  const { status, style, className, isAdmin, skeleton } = props;
  const { t } = useTranslation();

  // TODO Replace with useFetchType
  const fetching = false;
  const handleChangeStatus = () => {
  };

  const renderSkeleton = () => (
    <>
      <Skeleton variant="text" width={120} height={42} />
      <Skeleton variant="text" height={24} style={{ marginTop: 8 }} />
      <Skeleton variant="text" width="50%" height={24} />
      <Skeleton variant="text" width="55%" height={24} />
      <Skeleton variant="text" width="45%" height={24} />
      <Skeleton variant="text" width={80} height={24} style={{ marginTop: 16 }} />
      <Row flex spaced>
        <Skeleton variant="text" width={40} height={24} />
        <Skeleton variant="text" width={120} height={24} />
      </Row>
    </>
  );

  if (skeleton) return renderSkeleton();

  return (
    <Container style={style} className={className}>
      <Title>{t('fantaleague.details.settings.tab.general.status.title')}</Title>
      <Row flex><Description>{t('fantaleague.details.settings.tab.general.status.description')}</Description></Row>
      <Row>
        <Status>{t('fantaleague.details.settings.tab.general.status.recruitment.title')}</Status>
        <Description>{t('fantaleague.details.settings.tab.general.status.recruitment.description')}</Description>
      </Row>
      <div />
      <Row>
        <Status>{t('fantaleague.details.settings.tab.general.status.auction.title')}</Status>
        <Description>{t('fantaleague.details.settings.tab.general.status.auction.description')}</Description>
      </Row>
      <div />
      <Row>
        <Status>{t('fantaleague.details.settings.tab.general.status.championship.title')}</Status>
        <Description>{t('fantaleague.details.settings.tab.general.status.championship.description')}</Description>
      </Row>
      <div />
      <Row flex style={{ marginTop: 16 }}>
        <Description>{t('fantaleague.details.settings.tab.general.status.currentStatus')}</Description>
      </Row>
      <Row flex spaced>
        <Status>{status}</Status>
        {isAdmin ? (
          <LoadingButton
            style={{ marginTop: -8 }}
            pending={fetching}
            variant="contained"
            color="primary"
            onClick={handleChangeStatus}
          >
            {t('fantaleague.details.settings.tab.general.status.button')}
          </LoadingButton>
        )
          : <NoPermission>{t('fantaleague.details.settings.tab.general.status.noPermissionButton')}</NoPermission>}
      </Row>
    </Container>
  );
};

GeneralSettingsFormStatus.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
  status: PropTypes.string,
  isAdmin: PropTypes.bool,
  skeleton: PropTypes.bool,
};

GeneralSettingsFormStatus.defaultProps = {
  style: undefined,
  className: undefined,
  status: undefined,
  isAdmin: false,
  skeleton: false,
};

export default GeneralSettingsFormStatus;
