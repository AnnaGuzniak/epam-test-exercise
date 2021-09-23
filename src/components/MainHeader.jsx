import React from 'react';
import styled from 'styled-components';

const Header = styled.div`
    height: 5rem;;
    font-size: 24px;
    align-items: center;
    display: flex;
    background-color: lightgray;
    && > span {
        margin: auto;
    }
`

const MainHeader = () => (
  <Header>
    <span>
       ReactJS exercise for candidates
    </span>
  </Header>
);

export default MainHeader;
