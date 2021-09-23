import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import styled from 'styled-components';
import { Provider } from 'react-redux';
import Routes from './routes';
import MainHeader from './components/MainHeader';
import MainFooter from './components/MainFooter';
import { getCurrentDate } from './utils/formatDate';
import NotificationsContainer from './components/NotificationsContainer';

const Container = styled.div`
  margin-bottom: 30px;
`;

class App extends Component {
  render() {
    const { store } = this.props;

    return (
      <Provider store={store}>
        <NotificationsContainer />
        <div className="page-container">
          <BrowserRouter>
            <Container>
              <MainHeader />
              <Routes />
            </Container>
            <MainFooter title={`Footer for test exercise. ${getCurrentDate()}`} />
          </BrowserRouter>
        </div>
      </Provider>
    );
  }
}

export default App;
