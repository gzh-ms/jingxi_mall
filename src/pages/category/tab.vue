<template>
  <me-scroll :scrollbar="false">
    <ul class="tab">
      <li
        class="tab-item"
        :class="{'tab-item-active': item.id === curId}"
        v-for="(item, index) in items"
        :key="index"
        @click="switchTab(item.id)"
      >
        {{item.name}}
      </li>
    </ul>
  </me-scroll>
</template>

<script>
  import MeScroll from "base/scroll";
  import {categoryNames} from "./config";

  export default {
    name: 'CategoryTab',

    data() {
      return {
        curId: ''
      };
    },

    components: {
      MeScroll
    },

    methods: {
      init() {
        this.items = categoryNames;
      },

      switchTab(id) {
        if (this.curId === id) return;

        this.curId = id;       
        this.$emit('switch-tab', id);
      }
    },

    created() {
      this.init();
      this.switchTab(this.items[0].id);
    }
  };
</script>

<style lang="scss" scoped>
  @import '~assets/scss/mixins';

  $tab-item-height: 46px;

  .tab {
    width: 100%;

    &-item {
      height: $tab-item-height;
      line-height: $tab-item-height;
      color: #333;
      font-size: $font-size-l;
      text-align: center;
      font-weight: bold;
      background-color: #fff;
      border-right: 1px solid $border-color;
      border-bottom: 1px solid $border-color;
      @include ellipsis();

      &:lats-child {
        border-bottom: none;
      }
    }

    &-item-active {
      border-right: none;
      color: #f23030;
      background: none;
    }
  }
</style>
