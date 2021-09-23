import React from 'react';
import styled from 'styled-components';

const Footer = styled.div`
  height: 3rem;
  position: absolute;
  bottom: 0;
  background-color: lightgray;
  width: 100%;
  span {
    padding: 1rem;
  }
`;

const MainFooter = ( { title }) => (
  <Footer>
    <span>{ title }</span>
  </Footer>
);

export default MainFooter;
