<template>
  <div class="home">
    <div class="g-header-container">
      <home-header
        :class="{'header-transition': isHeaderTransition}"
        ref="header"
      />
    </div>
    <me-scroll
      :data="recommends"
      pullDown
      pullUp
      @pull-down="pullToRefresh"
      @pull-up="pullToLoadMore"
      @scroll-end="scrollEnd"
      @scroll="scroll"
      @pull-down-transition-end="pullDownTransitionEnd"
      ref="scroll"
    >
      <home-slider ref="slider"/>
      <home-nav/>
      <home-recommend @loaded="getRecommend" ref="recommend"/>
    </me-scroll>
    <div class="g-backtop-container">
      <me-backtop
        :visible="isBacktopVisible"
        @backtop="backToTop"/>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
  import MeScroll from 'base/scroll';
  import HomeHeader from './header';
  import HomeSlider from './slider';
  import HomeNav from './nav';
  import HomeRecommend from './recommend';
  import MeBacktop from "base/backtop";
  import {HEADER_TRANSITION_HEIGHT} from "./config";

  export default {
    name: 'Home',

    data() {
      return {
        recommends: [],
        isBacktopVisible: false,
        isHeaderTransition: false
      };
    },
    
    methods: {
      getRecommend(recommends) {
        this.recommends = recommends;
      },

      pullToRefresh(end) {
        setTimeout(() => {          
          this.$refs.slider.update().then(end);
        }, 1000);
      },

      pullToLoadMore(end) {
        this.$refs.recommend.update().then(end).catch(err => {
          if (err) {
            console.log(err);
          }
          end();
        });
      },
      
      scrollEnd(translate, scroll, pulling) {
        if (!pulling) {
          this.changeHeaderStatus(translate);
        }
        // console.log(scroll);
        this.isBacktopVisible = translate < 0 && -translate > scroll.height;
        
      },

      backToTop() {
        this.$refs.scroll && this.$refs.scroll.scrollToTop();
      },
      
      scroll(translate) {
        this.changeHeaderStatus(translate);
      },

      changeHeaderStatus(translate) {
        if (translate > 0) {
          this.$refs.header.hide();
          return;
        }

        this.$refs.header.show();
        this.isHeaderTransition = -translate > HEADER_TRANSITION_HEIGHT;
      },

      pullDownTransitionEnd() {
        this.$refs.header.show();
      }
    },

    components: {
      HomeHeader,
      HomeSlider,
      MeScroll,
      HomeNav,
      HomeRecommend,
      MeBacktop
    }
  };
</script>

<style lang="scss" scoped>
  @import '~assets/scss/mixins';

  .home {
    overflow: hidden;
    width: 100%;
    height: 100%;
    background-color: $bgc-theme;
  }
</style>
