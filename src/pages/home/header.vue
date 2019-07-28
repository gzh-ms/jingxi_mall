<template>
  <me-navbar class="header" v-show="visible">
    <i class="iconfont icon-scan" slot="left"></i>
    <me-search-box
      slot="center"
      placeholder="开学季有礼，好货五折起"
      fake
      @query="getQuery"
      @click.native="goToSearch"
    />
    <i class="iconfont icon-msg" slot="right"></i>
  </me-navbar>
</template>

<script>
  import MeNavbar from 'base/navbar';
  import MeSearchBox from 'base/search-box';

  export default {
    name: 'HomeHeader',

    data() {
      return {
        visible: true
      };
    },

    methods: {
      show() {
        this.visible = true;
      },

      hide() {
        this.visible = false;
      },

      getQuery(query) {
        console.log(query);
      },

      goToSearch() {
        this.$router.push('/search');
      }
    },

    components: {
      MeNavbar,
      MeSearchBox
    }
  };
</script>

<style lang="scss" scoped>
  @import '~assets/scss/mixins';

  .header {
    &.mine-navbar {
      background-color: transparent;
      transition: background-color .5s;
    }

    &.header-transition {
      background-color: $header-bgc-translucent;
    }

    .iconfont {
      font-size: $icon-font-size;
      color: $icon-color-default;
    }
  }
</style>

