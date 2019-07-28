<template>
  <div class="mine-search-box-wrapper">
    <i class="iconfont icon-search"></i>
    <div class="mine-search-box" v-show="fake">{{placeholder}}</div>
    <input
      type="text"
      :placeholder="placeholder"
      title="搜索框"
      class="mine-search-box"
      ref="input"
      v-model="query"
      v-show="!fake"
    >
    <i
      class="iconfont icon-close"
      @click="reset"
      v-show="query"
    ></i>
  </div>
</template>

<script>
  import {debounce} from 'assets/js/util';

  export default {
    name: 'MeSearchBox',

    data() {
      return {
        query: ''
      };
    },

    props: {
      placeholder: {
        type: String,
        default: '请输入搜索内容'
      },
      fake: {
        type: Boolean,
        default: false
      }
    },

    watch: {
      query: debounce(function () {
        this.$emit('query', this.query);
      })
    },

    methods: {
      focus() {
        this.$refs.input && this.$refs.input.focus();
      },

      clear() {
        this.query = '';
      },

      reset() {
        this.clear();
        this.focus();
      }
    },

    components: {}
  };
</script>

<style lang="scss" scoped>
  @import '~assets/scss/mixins';

  $search-box-height: 30px;

  .mine-search-box-wrapper {
    display: flex;
    align-items: center;
    height: $search-box-height;
    background-color: #fff;
    border-radius: $search-box-height / 2;
    padding: 0 7px;

    .iconfont {
      color: $icon-color;
      font-size: $icon-font-size-sm;
      font-weight: bold;
    }

    .mine-search-box {
      flex: 1;
      background: none;
      border: none;
      margin: 0 6px;
      color: #666;
      line-height: 1.5;
    }
  }
</style>
