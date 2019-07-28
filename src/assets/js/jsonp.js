import jsonp from 'jsonp';

/* param: param ={
            page: 1,
            psize: 20,
            type: 0,
            ...
          }
*/
const parseParam = param => {
  return Object.entries(param).map(item => item.join('=')).join('&');
}

export default (url, data, options) => {
  url += (url.indexOf('?') > -1 ? '&' : '?') + parseParam(data);
  return new Promise((resolve, reject) => {
    jsonp(url, options, (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
};
