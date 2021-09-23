import DETAIL_TYPES from '../../constants/detailTypes';

export const countryDetailsConfig = [
  {
    type: DETAIL_TYPES.TITLE,
    title: 'Name',
    value: cell => cell.name?.common,
  },
  {
    type: DETAIL_TYPES.IMAGE,
    title: 'Flag',
    value: cell => cell.flags[0],
  },
  {
    type: DETAIL_TYPES.TEXT,
    title: 'Region',
    value: cell => cell.region,
  },
  {
    type: DETAIL_TYPES.TEXT,
    title: 'Languages',
    value: cell => Object.values(cell.languages || []).join(', '),
  },
  {
    type: DETAIL_TYPES.TEXT,
    title: 'Currencies',
    value: cell =>
      Object.values(cell.currencies || [])
        .map(el => el.symbol)
        .join(', '),
  },
  {
    type: DETAIL_TYPES.FLAG,
    title: 'Independent',
    value: cell => '' + cell.independent,
  },
  {
    type: DETAIL_TYPES.FLAG,
    title: 'Landlocked',
    value: cell => '' + cell.landlocked,
  },
];
