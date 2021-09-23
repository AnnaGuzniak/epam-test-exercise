import { api } from '../../config';
import RequestService from '../../services/request.service';

export const GET_COUNTRIES = 'GET_COUNTRIES';
export const GET_COUNTRIES_FAIL = 'GET_COUNTRIES_FAIL';
export const GET_COUNTRIES_SUCCESS = 'GET_COUNTRIES_SUCCESS';

export const GET_COUNTRY = 'GET_COUNTRY';
export const GET_COUNTRY_FAIL = 'GET_CGET_COUNTRY_FAILOUNTRIES_FAIL';
export const GET_COUNTRY_SUCCESS = 'GET_COUNTRY_SUCCESS';

export function getCountries() {
  return async dispatch => {
    dispatch({
      type: GET_COUNTRIES,
    });
    try {
      const countries = await RequestService(api.countries);

      dispatch({
        type: GET_COUNTRIES_SUCCESS,
        countries: countries,
      });
    } catch (err) {
      dispatch({
        type: GET_COUNTRIES_FAIL,
        error: { status: err.status, message: err.message },
      });
    }
  };
}

export function getCountryByName(countryName) {
  return async dispatch => {
    dispatch({
      type: GET_COUNTRY,
    });
    try {
      const country = await RequestService(api.country(countryName));

      dispatch({
        type: GET_COUNTRY_SUCCESS,
        country: country,
      });
    } catch (err) {
      dispatch({
        type: GET_COUNTRY_FAIL,
        error: { status: err.status, message: err.message },
      });
    }
  };
}
