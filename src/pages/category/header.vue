<template>
  <me-navbar class="header">
    <me-search-box
      placeholder="开学季有礼，好货五折起"
      fake
      slot="center"
      @click.native="goToSearch"
    />
    <i class="iconfont icon-msg" slot="right"></i>
  </me-navbar>
</template>

<script>
  import MeNavbar from 'base/navbar';
  import MeSearchBox from 'base/search-box';

  export default {
    name: 'CategoryHeader',

    methods: {
      goToSearch() {
        this.$router.replace('/search');
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
      background-color: $header-bgc-translucent;
    }
    
    .iconfont {
      font-size: $icon-font-size;
      color: $icon-color-default;
    }
  }
</style>
