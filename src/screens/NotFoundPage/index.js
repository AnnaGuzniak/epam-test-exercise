import React from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';

const StyledPageContainerDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 6rem);
  flex-flow: column nowrap;
`;

const ErrorCode = styled.span`
  font-size: 7rem;
  font-weight: bold;
  text-align: center;
`;

const ErrorTitle = styled.span`
  font-size: 3rem;
  text-align: center;
  margin-top: 0.5rem;
  margin-bottom: 3rem;
`;

const ErrorSubTitle = styled.span`
  font-size: 1.5rem;
  line-height: 1.5;
  text-align: center;
  max-width: 45rem;
`;


function NotFoundPage({ history }) {
  return (
    <StyledPageContainerDiv> 
      <ErrorCode>404</ErrorCode>
      <ErrorTitle>Page Not Found</ErrorTitle>
      <ErrorSubTitle>The page you are looking for can not be found.</ErrorSubTitle>
      <button onClick={() => history.push('/')}>Home</button>
    </StyledPageContainerDiv>
  );
}

export default withRouter(NotFoundPage);
