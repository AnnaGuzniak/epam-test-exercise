import React from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';
import { publicUrls } from '../../config';

const Button = styled.div`
  padding: 10px;
  margin: 10px;
  width: 100px;
  cursor: pointer;
  :hover {
    background-color: lightgray;
  }
`;

const BackButton = ({ history }) => {
  const goHome = () => {
    history.push(publicUrls.home);
  };

  return <Button onClick={goHome}> Back </Button>;
};

export default withRouter(BackButton);
