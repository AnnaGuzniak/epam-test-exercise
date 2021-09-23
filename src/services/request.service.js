import 'whatwg-fetch';
import { baseUrl } from '../config';

const applicationJsonContentType = 'application/json';

/**
 * Parses the JSON returned by a network request
 *
 * @param  {object} response A response from a network request
 *
 * @return {object}          The parsed JSON from the request
 */
function parseJSON(response) {
  if (!response.headers.get('content-type').includes(applicationJsonContentType)) {
    throw new Error('Incorrect response from the server');
  }
  return response.json();
}

/**
 * Checks if a network request came back fine, and throws an error if not
 *
 * @param  {object} response   A response from a network request
 *
 * @return {object|undefined} Returns either the response, or throws an error
 */
function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }

  return parseJSON(response).then(responsePayload => {
    const errorId = getErrorId(responsePayload);
    throwResponseError({ errorId, response, responsePayload });
  });
}

/**
 * Format query params
 *
 * @param params
 * @returns {string}
 */
function formatQueryParams(params) {
  return Object.keys(params)
    .map(k => `${encodeURIComponent(k)}=${encodeURIComponent(params[k])}`)
    .join('&');
}

/**
 * Get URL for request
 *
 * @param {*} url
 * @param {*} options
 */
function getUrl(url, options) {
  if (options && options.params) {
    const params = formatQueryParams(options.params);
    return `${url}?${params}`;
  }
  return url;
}

/**
 * Get response error ID from response payload
 *
 * @param {object} responsePayload JSON response payload
 *
 * @returns {string|undefined}     Error ID returned from API
 */
function getErrorId(responsePayload) {
  // eslint-disable-next-line no-underscore-dangle
  return responsePayload.__errorId;
}

/**
 * Throws response error
 *
 * @param {string} errorId         Error ID returned from API
 * @param {object} response        A response from a network request
 * @param {object} responsePayload JSON response payload
 *
 * @returns {undefined}
 */
function throwResponseError({ errorId, response, responsePayload }) {
  let errorMessage = response ? `${responsePayload.message || response.statusText}.` : 'Server error.';
  if (errorId) {
    errorMessage += ` Error id: ${errorId}`;
  }

  const error = new Error(errorMessage);
  if (response && responsePayload) {
    error.response = response;
    error.response.payload = responsePayload;
  }

  throw error;
}

/**
 * Requests a URL, returning a promise
 *
 * @param  {string} url       The URL we want to request
 * @param  {object} [options] The options we want to pass to "fetch"
 *
 * @return {object}           The response data
 */
export default async function request(url, options = {}, { stringify = true } = {}) {
  // Set headers
  if (stringify) {
    options.headers = {
      'Content-Type': applicationJsonContentType,
      ...options.headers,
    };
  }

  const requestUrl = getUrl(url, options);

  // Stringify body object
  if (options && options.body && stringify) {
    options.body = JSON.stringify(options.body);
  }

  return fetch(baseUrl + requestUrl, options)
    .then(checkStatus)
    .then(parseJSON);
}
