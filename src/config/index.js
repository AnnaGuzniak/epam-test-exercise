const baseUrl = 'https://restcountries.com/v3';

module.exports = {
  publicUrls: {
    home: '/',
    countryDetails: name => `/country/${name}`,
  },
  baseUrl,
  api: {
	  countries: '/all',
	  country: name => `/name/${name}`
  },
};
