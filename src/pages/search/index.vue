<template>
  <transition name="search">
    <div class="search">
      <header class="g-header-container">
        <search-header @query="getQuery"/>
      </header>
      <div class="g-content-container">
        <me-scroll ref="scroll">
          <search-hot v-show="!query" @loaded="updateScroll"/>
          <search-history
            @show-confirm="showConfirm"
            @removed-item="updateScroll"
            ref="history"
            v-show="!query"
          />
          <search-result
            v-show="query"
            :query="query"
          />
        </me-scroll>
      </div>
      <me-confirm
        msg="确定要清空吗？"
        ref="confirm"
        @confirm="clearAllSearchHistorys"
      />
    </div>
  </transition>
</template>

<script>
  import MeScroll from 'base/scroll';
  import SearchHeader from './header';
  import SearchHot from './hot';
  import SearchHistory from './history';
  import MeConfirm from 'base/confirm';
  import SearchResult from './result';

  export default {
    name: 'Search',

    data() {
      return {
        query: ''
      };
    },

    methods: {
      getQuery(query) {
        this.query = query;
      },

      showConfirm() {
        this.$refs.confirm.show();
      },

      clearAllSearchHistorys() {
        this.$refs.history && this.$refs.history.clear();
        this.$refs.history && this.$refs.history.update();
      },

      updateScroll() {
        this.$refs.scroll.update();
      }
    },

    components: {
      SearchHeader,
      SearchHot,
      MeScroll,
      SearchHistory,
      MeConfirm,
      SearchResult
    }
  };
</script>

<style scoped lang="scss">
  @import '~assets/scss/mixins';

  .search {
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    z-index: $search-z-index;
    background-color: $bgc-theme;
  }

  .search-enter-active,
  .search-leave-active {
    transition: all .5s;
  }

  .search-enter,
  .search-leave-to {
    transform: translate3d(100%, 0, 0);
  }
</style>
