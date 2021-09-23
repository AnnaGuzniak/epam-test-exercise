import { connect } from 'react-redux';
import styled from 'styled-components';
import { clearNotification } from '../redux/actions/notifications';

const NotificationsWrapper = styled.div`
  position: fixed;
  right: 0;
  top: 3rem;
  z-index: 999;
`;

const StyledNotification = styled.div`
  background-color: lightgray;
  border-left: 3px solid gray;
  padding: 20px;
  width: 150px;
  margin-bottom: 20px;

`;
const CloseButton = styled.div`
    font-size: 10px;
    right: 20px;
    position: fixed;
    cursor: pointer;
`;

function NotificationsContainer({ notifications, clearNotification }) {
  return (
    <NotificationsWrapper>
      {notifications.map(notification => (
        <StyledNotification
          key={notification.id}
        >{ notification.message }
          <CloseButton onClick={() =>clearNotification(notification.id) }>Close</CloseButton></StyledNotification>
      ))}
    </NotificationsWrapper>
  );
}

const mapStateToProps = ({ notifications }) => ({
  notifications: Object.keys(notifications).map(id => ({
    id,
    ...notifications[id],
  })),
});

const mapDispatchToProps = { clearNotification };

export default connect(mapStateToProps, mapDispatchToProps)(NotificationsContainer);
