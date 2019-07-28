<template>
  <me-navbar class="header">
    <i
      class="iconfont icon-back"
      slot="left"
      @click="goBack"
    ></i>
    <me-search-box
      slot="center"
      @query="query"
      placeholder="开学季有礼，好货五折起"
    />
  </me-navbar>
</template>

<script>
  import MeNavbar from 'base/navbar';
  import MeSearchBox from 'base/search-box';

  export default {
    name: 'SearchHeader',

    data() {
      return {};
    },

    methods: {
      query(query) {
        this.$emit('query', query);
      },

      goBack() {
        this.$router.back();
      }
    },

    components: {
      MeNavbar,
      MeSearchBox
    }
  };
</script>

<style lang="scss" scoped>
  @import "~assets/scss/mixins";
  
  .header {
    border-bottom: 1px solid $border-color;

    .iconfont {
      font-size: $icon-font-size;
      color: $icon-color;
    }

    .mine-search-box-wrapper {
      background-color: #f7f7f7;
    }
  }
</style>
