import axios from 'axios';
import jsonp from 'assets/js/jsonp';
import {jsonpOptions, TIMEOUT} from './config';

// ajax获取热门搜索数据
export const getSearchHotKeyword = () => {
  return axios.get('http://www.imooc.com/api/search/hot', {
    timeout: TIMEOUT
  }).then(res => {
    if (res.status === 200) {
      return res.data.hotKeyWord.owner;
    }

    throw new Error('没有获取到数据');
  }).catch(err => {
    if (err) {
      console.log(err);
    }
  }).then(res => {
    return new Promise(resolve => {
      setTimeout(resolve, 1000, res);
    });
  });
};

// jsonp获取搜索结果
export const getSearchResult = keyword => {
  const url = `https://suggest.taobao.com/sug`;
  const params = {
    q: keyword,
    code: 'utf-8',
    area: 'c2c',
    nick: '',
    sid: null
  };

  return jsonp(url, params, jsonpOptions).then(res => {
    if (res.result) {
      console.log(res.result);
      return res.result;
    }

    throw new Error('没有获取到数据');
  }).catch(err => {
    if (err) {
      console.log(err);
    }
  }).then(data => {
    return new Promise(resolve => {
      setTimeout(resolve, 1000, data);
    });
  });
};
