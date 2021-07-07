import { FQDN } from "../config/config";

import axios from "axios";

class request {
  static apiHeaderConfig = () => {
    const apiConfig = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    return apiConfig;
  };

  static post(route, bodyParams = {}) {
    const url = `${FQDN}${route}`;
    return axios.post(url, bodyParams, this.apiHeaderConfig());
  }

  static get(route, bodyParams = {}) {
    const url = `${FQDN}${route}`;
    return axios.get(url, this.apiHeaderConfig());
  }
}
export default request;
