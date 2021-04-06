import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Dialog, DialogActions, DialogContent, DialogTitle } from '@material-ui/core';
import LoadingButton from '@material-ui/lab/LoadingButton';
import { useTranslation } from 'react-i18next';
import UserCard from '../../../../../../../components/display/card/userCard/userCard';
import Font from '../../../../../../../assets/Font';

const StyledCard = styled(UserCard)`
  margin: 0 0 16px 0;
`;

const StyledContent = styled(DialogContent)`
  padding: 16px 0;
`;

const StyledDialog = styled(Dialog)`
  .MuiDialog-paper{
    width: 450px;
    max-width: 100%;
  }
`;

const Title = styled.div`
  font-family: ${Font.SEMIBOLD};
`;

const GeneralSettingsFormAdminDialog = (props) => {
  const { open, onClose, onConfirm, participants } = props;

  const [selectedUser, setSelectedUser] = useState();
  const { t } = useTranslation();

  // TODO Replace with useFetchType
  const fetching = false;
  // const handleAddAdmin = () => {
  // };

  const handleClick = (user) => {
    setSelectedUser(user.username);
  };

  //
  console.log(participants);
  //
  // const renderSkeleton = () => (
  //   <>
  //     <Row flex spaced>
  //       <Skeleton variant="text" width={120} height={42} />
  //       <Skeleton variant="text" width={120} height={24} />
  //     </Row>
  //     <Skeleton variant="text" width="50%" height={24} style={{ marginTop: 8 }} />
  //     <CardContainer>
  //       <StyledCard
  //         disabled
  //         title={(<Skeleton variant="text" width={64} />)}
  //         subtitle={(<Skeleton variant="text" width={96} />)}
  //       />
  //       <StyledCard
  //         disabled
  //         title={(<Skeleton variant="text" width={64} />)}
  //         subtitle={(<Skeleton variant="text" width={96} />)}
  //       />
  //     </CardContainer>
  //   </>
  // );
  //
  // if (skeleton) return renderSkeleton();

  return (
    <StyledDialog onClose={onClose} open={open} maxWidth="lg">
      <DialogTitle onClose={onClose}>
        <Title>{t('fantaleague.details.settings.tab.general.admin.dialog.title')}</Title>
      </DialogTitle>
      <StyledContent>
        {participants.map((user) => (
          <StyledCard
            clickable
            title={user.username}
            subtitle={user.fullName}
            key={user.username}
            selected={selectedUser === user.username}
            onClick={() => handleClick(user)}
          />
        ))}
      </StyledContent>
      <DialogActions style={{ height: 64 }}>
        <LoadingButton
          style={{ marginTop: -8 }}
          pending={fetching}
          variant="contained"
          color="primary"
          onClick={onConfirm}
        >
          {t('fantaleague.details.settings.tab.general.admin.dialog.primary')}
        </LoadingButton>
      </DialogActions>
    </StyledDialog>
  );
};

GeneralSettingsFormAdminDialog.propTypes = {
  open: PropTypes.bool,
  onClose: PropTypes.func,
  onConfirm: PropTypes.func,
  participants: PropTypes.array,
};

GeneralSettingsFormAdminDialog.defaultProps = {
  open: false,
  onClose: undefined,
  onConfirm: undefined,
  participants: [],
};

export default GeneralSettingsFormAdminDialog;
