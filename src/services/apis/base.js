import UserModel from 'reduxes/actions/user';

export const convertParamsToForm = (params: Object): FormData => {
  const form = new FormData();
  try {
    Object.keys(params).forEach(field => {
      if (params[field]) {
        if (typeof params[field] === 'object') {
          params[field].forEach(item => {
            form.append(field, item);
          });
        } else {
          form.append(field, params[field]);
        }
      }
    });
    return form;
  } catch (error) {
    const formCatch = new FormData();
    return formCatch;
  }
};

const baseUrl = '';
export const request = async (
  method: 'POST' | 'GET' | 'PUT' | 'DELETE',
  path: string,
  param: Object,
  header: Object,
): Promise<{status: Number, result?: any, message?: string}> => {
  try {
    const url = baseUrl + path;
    let body = {};
    let tmpHeader = {};
    if (method !== 'GET') {
      if (!header) {
        body = param ? JSON.stringify(param) : JSON.stringify({}); // json-data
      } else {
        body = param; // form-data
        tmpHeader = header;
      }
    }
    const headers = {
      Accept: '*/*',
      'Content-Type': 'application/json; charset=utf-8',
      Authorization: `Bearer ${UserModel.accessToken}`,
      ...tmpHeader,
    };
    const rs = await fetch(url, {
      method: method.toUpperCase(),
      headers,
      body: method.toUpperCase() !== 'GET' ? body : null,
    });
    if (rs.status === 200) {
      return await await rs.text();
    }
    if (rs.status === 400) {
      // return await request(method, url, param);
    }
    // global.root.showMessage();
    return {};
  } catch (error) {
    console.log('request error: ', error);
    // global.root.showMessage();
    return {};
  }
};
