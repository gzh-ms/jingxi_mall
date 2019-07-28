import axios from 'axios';
import jsonp from 'assets/js/jsonp';
import {SUCC_CODE, TIMEOUT, HOME_RECOMMEND_PAGE_SIZE, jsonpOptions} from './config';

// 打乱数组 param: []
const shuffle = arr => {
  const len = arr.length;
  let i = len;

  while (i--) {
    let num = Math.floor(Math.random() * len);
    if (num !== i) {
      [arr[i], arr[num]] = [arr[num], arr[i]];
    }
  }

  return arr;
};

// 获取幻灯片数据--ajax
export const getHomeSlider =  () => {
  return axios.get('http://www.imooc.com/api/home/slider', {
    timeout: TIMEOUT
  }).then(res => {
    if (res.data.code === SUCC_CODE) {
      // 模拟更新幻灯片
      let sliders = res.data.slider;
      const slider = [sliders[Math.floor(Math.random() * sliders.length)]];
      sliders = shuffle(sliders.filter(() => Math.random() >= 0.5));
      if (!sliders.length) {
        sliders = slider;
      }
      
      return sliders;
    }

    throw new Error('没有成功获取到数据');
  }).catch(err => {
    if (err) {
      console.log(err);
    }

    return [
      {
        linkUrl: 'www.xiaodianying.com',
        picUrl: require('assets/img/404.png')
      }
    ];
  });
};

//获取home-recommend数据 jsonp
export const getHomeRecommend = (page = 1, psize = HOME_RECOMMEND_PAGE_SIZE) => {
  const url = 'https://ju.taobao.com/json/tg/ajaxGetItemsV2.json';
  const params = {
    page,
    psize,
    type: 0,
    frontCatId: ''
  };
  return jsonp(url, params, jsonpOptions).then(res => {
    if (res.code === '200') return res;
    throw new Error('没有成功获取到数据');
  }).catch(err => {
    if (err) {
      console.log(err);
    }
  });
};
