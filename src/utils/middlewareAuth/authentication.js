import React, { useEffect } from 'react';
import { GlobalVariable } from '../../common/baseUrl/baseUrl';
import axios from 'axios';

const authentication = () => {

  axios.defaults = Object.assign(axios.defaults, {

    withCredentials: true,

    baseURL: GlobalVariable.MIDDLEWARE_API_URL,

  });

  const MiddlewareLogin = async () => {
    // await axios.post(`${GlobalVariable.MIDDLEWARE_API_URL}/auth`)
    //   .then((res) => console.log("login", res.data));
    // await axios.post(`${GlobalVariable.MIDDLEWARE_API_URL}/isLoggedIn`)
    //   .then((res) => console.log("session", res.data));
    // await axios.post(`${GlobalVariable.MIDDLEWARE_API_URL}/`)
    //   .then((res) => console.log("token", res.data));
  };

  return { MiddlewareLogin }
}

export default authentication;