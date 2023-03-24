import { env } from '../../env';

const { REACT_APP_API_ENDPOINT } = env;
// *** baseURL & version control ****
const serverUri = REACT_APP_API_ENDPOINT;
const BASE_URL = serverUri;

// *** headers ***
const lockHeader = {
  'Content-Type': 'application/json',
  // Authorization: `Bearer ${localStorage.getItem('userguid')}`,
  "Access-Control-Allow-Origin": BASE_URL,
  "Access-Control-Allow-Credentials": true,
  // 'Content-Type': 'application/json',
  // // 'x-api-version': `${version}`,
  // Authorization: `Bearer ${localStorage.getItem('userguid')}`,
};
const openHeader = {
  'Content-Type': 'application/json',
  // 'x-api-version': `${version}`,
};

// *** URIs ***
const GATEWAY_LOGIN = '/user/login';
const GATEWAY_LOGOUT = '/user/login';
const GATEWAY_REGISTER = '/user/register';
const GATEWAY_GETDATA = '/sensor/getdata';
const GATEWAY_SAVEDATA = '/sensor/getdata';

// eslint-disable-next-line camelcase
const axios_1 = require('axios');

function _postCustom(url, data) {
  const axiosCustom = axios_1.default.create({
    baseURL: BASE_URL,
    headers: lockHeader,
    withCredentials: true, // IMPORTANT!!!! this is to set httpOnly cookie which contained jwt token for our scenario 
  });
  return axiosCustom.post(url, data);
}

function _patchCustom(url, data) {
  const axiosCustom = axios_1.default.create({
    baseURL: BASE_URL,
    headers: lockHeader,
    withCredentials: true, // IMPORTANT!!!! this is to set httpOnly cookie which contained jwt token for our scenario 
  });
  return axiosCustom.patch(url, data);
}

function _postCustomWithoutContent(url, data) {
  const axiosCustom = axios_1.default.create({
    baseURL: BASE_URL,
    headers: {
      // Authorization: `Bearer ${localStorage.getItem('userguid')}`,
      'Access-Control-Allow-Origin': BASE_URL,
      'Access-Control-Allow-Credentials': true,
    },
  });
  return axiosCustom.post(url, data);
}

function _getCustom(url, data, isBuffer) {
  const axiosCustom = axios_1.default.create({
    baseURL: BASE_URL,
    headers: {
      'Content-Type': isBuffer ? 'blob' : 'application/json',
      "Access-Control-Allow-Origin": BASE_URL,
      "Access-Control-Allow-Credentials": true,
    },
    withCredentials: true, // IMPORTANT!!!! this is to set httpOnly cookie which contained jwt token for our scenario 
    responseType: isBuffer ? 'arraybuffer' : 'json',
  });
  return axiosCustom.get(url, data);
}

function _postWithOutHeader(url, data) {
  const axiosCustom = axios_1.default.create({
    baseURL: BASE_URL,
    headers: openHeader,
  });
  return axiosCustom.post(url, data);
}

function _putCustom(url, data) {
  const axiosCustom = axios_1.default.create({
    baseURL: BASE_URL,
    headers: lockHeader,
    withCredentials: true, // IMPORTANT!!!! this is to set httpOnly cookie which contained jwt token for our scenario 
  });
  return axiosCustom.put(url, data);
}

function _deleteCustom(url, data) {
  const axiosCustom = axios_1.default.create({
    baseURL: BASE_URL,
    headers: lockHeader,
    withCredentials: true, // IMPORTANT!!!! this is to set httpOnly cookie which contained jwt token for our scenario 
  });
  return axiosCustom.delete(url, data);
}

/// ///////////////////////////

/// ////////////////

function loginService(body) {

  return new Promise((resolve, reject) => {
    _postCustom(GATEWAY_LOGIN, body)
      .then((res) => {

        resolve(res.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
}

function registerService(body) {
  return new Promise((resolve, reject) => {
    _postCustom(GATEWAY_REGISTER, body)
      .then((res) => {
        resolve(res.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
}

function logoutService() {
  return new Promise((resolve, reject) => {
    _getCustom(GATEWAY_LOGOUT)
      .then((res) => {
        resolve(res.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
}

function saveDataService(body) {
  return new Promise((resolve, reject) => {
    _postCustom(GATEWAY_SAVEDATA, body)
      .then((res) => {
        resolve(res.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
}

function getDataService() {
  return new Promise((resolve, reject) => {
    _getCustom(GATEWAY_GETDATA)
      .then((res) => {
        resolve(res.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
}

const dataServiceMethods = {
  saveDataService,
  getDataService,
  loginService,
  registerService,
  logoutService,
};

export default dataServiceMethods;
