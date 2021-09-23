import { countries as initialState } from '../initialState/countries';

import {
  GET_COUNTRIES,
  GET_COUNTRIES_SUCCESS,
  GET_COUNTRIES_FAIL,
  GET_COUNTRY,
  GET_COUNTRY_SUCCESS,
  GET_COUNTRY_FAIL,
} from '../actions/countries';

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_COUNTRIES:
    case GET_COUNTRY:
      return {
        ...state,
        isLoading: true,
      };
    case GET_COUNTRIES_SUCCESS:
      return {
        ...state,
        list: action.countries,
        isLoading: false,
      };
    case GET_COUNTRY_SUCCESS:
      return {
        ...state,
        countryDetails: action.country[0],
        isLoading: false,
      };
    case GET_COUNTRIES_FAIL:
    case GET_COUNTRY_FAIL:
      return {
        ...state,
        error: action.error,
        isLoading: false,
      };
    default:
      return state;
  }
}
