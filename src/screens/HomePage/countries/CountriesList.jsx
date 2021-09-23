import React from 'react';
import { connect } from 'react-redux';

import CommonTable from '../../../components/common/CommonTable';
import Loading from '../../../components/common/Loading';
import { countriesHeader } from '../../../constants/tables/countriesHeader';
import { getCountries } from '../../../redux/actions/countries';

const searchByName = (cell, searchStr) => cell.name.common.toLowerCase().includes(searchStr.toLowerCase());

class CountryList extends React.Component {
  componentDidMount() {
    const { getCountries } = this.props;
    getCountries();
  }

  render() {
    const { listCountries, isLoading, onSelectedCountry } = this.props;

    if (!listCountries || isLoading) {
      return <Loading />;
    }
    return (
      <CommonTable
        searchBy={searchByName}
        headers={countriesHeader}
        items={listCountries}
        onClickRow={onSelectedCountry}
      />
    );
  }
}

const mapStateToProps = ({ countries }) => ({
  listCountries: countries.list,
  isLoading: countries.isLoading,
});

const mapDispatchToProps = {
  getCountries,
};

export default connect(mapStateToProps, mapDispatchToProps)(CountryList);
