import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';
import BackButton from '../../components/common/BackButton';

import { getCountryByName } from '../../redux/actions/countries';
import { showNotification } from '../../redux/actions/notifications';
import Loading from '../../components/common/Loading';
import DETAIL_TYPES from '../../constants/detailTypes';
import { countryDetailsConfig } from './config.details';

const PageContainer = styled.div`
  margin: 50px;
  flex: 1;
  flex-direction: column;
`;

const Property = styled.div`
  padding: 10px 5px;
  display: flex;
  flex-direction: column;
  label {
    font-weight: 700;
  }
`;

const DetailContainer = styled.div`
  overflow: auto;
  max-height: calc(100vh - 20rem);
`;

class CountryDetailsPage extends React.Component {
  componentDidMount() {
    const { getCountryByName, match } = this.props;
    getCountryByName(match.params.name);
  }

  showDetailNotification = value => {
    const { showNotification } = this.props;
    showNotification({
      message: `You clicked on the ${value} properties`,
    });
  };

  renderPropByType = prop => {
    const { countryDetails } = this.props;
    const value = prop.value(countryDetails);
    switch (prop.type) {
      case DETAIL_TYPES.TITLE:
        return <h1>{value}</h1>;
      case DETAIL_TYPES.TEXT:
        return (
          <Property onClick={() => this.showDetailNotification(prop.title)}>
            <label>{prop.title}:</label>
            {value}
          </Property>
        );
      case DETAIL_TYPES.FLAG:
        return (
          <Property onClick={() => this.showDetailNotification(prop.title)}>
            <label>{prop.title}:</label>
            {value}
          </Property>
        );
      case DETAIL_TYPES.IMAGE:
        return <img width="30%" height="30%" src={prop.value(countryDetails)} alt="" />;
      default:
        return;
    }
  };

  renderDetails = () => countryDetailsConfig.map(prop => this.renderPropByType(prop));

  render() {
    const { countryDetails, isLoading } = this.props;
    console.log(countryDetails);
    if (!countryDetails || isLoading) {
      return <Loading />;
    }
    return (
      <PageContainer>
        <BackButton />
        <DetailContainer> {this.renderDetails()}</DetailContainer>

        <div style={{ color: 'red', fontSize: '10px' }}>
          You can click on any property to see notification functionality
        </div>
      </PageContainer>
    );
  }
}

const mapStateToProps = ({ countries }) => ({
  isLoading: countries.isLoading,
  countryDetails: countries.countryDetails,
});

const mapDispatchToProps = {
  getCountryByName,
  showNotification,
};
export default compose(withRouter, connect(mapStateToProps, mapDispatchToProps))(CountryDetailsPage);
