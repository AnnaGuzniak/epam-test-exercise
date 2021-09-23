import React from 'react';

export const countriesHeader = [
  {
    key: 'name',
    title: 'Name',
    render: cell => cell.name?.common,
  },
  {
    key: 'region',
    title: 'Region',
  },
  {
    key: 'languages',
    title: 'Languages',
    render: cell => Object.values(cell.languages || []).join(', '),
  },
  {
    key: 'currencies',
    title: 'Currencies',
    render: cell =>
      Object.values(cell.currencies || [])
        .map(el => el.symbol)
        .join(', '),
  },
  {
    key: 'flag',
    title: 'Flag',
    width: '50px',
    render: cell => <img width="30px" height="20px" src={cell.flags[0]} alt="" />,
  },
];
