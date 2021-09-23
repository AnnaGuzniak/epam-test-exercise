import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import styled from 'styled-components';
import { publicUrls } from '../../config';

import { showNotification } from '../../redux/actions/notifications';
import CountryList from './countries/CountriesList';

const PageContainer = styled.div`
  flex: 1;
  flex-direction: column;
`;

class HomePage extends React.Component {

  onSelectedCountry = country => {
     const { history } = this.props;
    history.push(
      publicUrls.countryDetails(country.name.common)
    );  
  }

  render() {
    return (
      <PageContainer>
        <CountryList onSelectedCountry={ this.onSelectedCountry } />
      </PageContainer>
    );
  }
}

const mapStateToProps = () => ({
});

const mapDispatchToProps = {
  showNotification,
};
export default compose(withRouter, connect(mapStateToProps, mapDispatchToProps))(HomePage);
