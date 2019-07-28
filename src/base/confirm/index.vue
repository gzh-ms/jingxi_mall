<template>
  <transition name="mine-confirm">
    <div class="mine-confirm-wrapper" v-show="visible">
      <div class="mine-confirm">
        <div class="mine-confirm-title" v-if="title">{{title}}</div>
        <div class="mine-confirm-msg">{{msg}}</div>
        <div class="mine-confirm-btns">
          <button
            class="mine-confirm-btn mine-confirm-cancel"
            @click="cancel"
          >{{cancelBtnText}}</button>
          <button
            class="mine-confirm-btn mine-confirm-ok"
            @click="confirm"
          >{{confirmBtnText}}</button>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
  export default {
    name: 'MeConfirm',

    data() {
      return {
        visible: false
      };
    },

    props: {
      title: {
        type: String,
        default: ''
      },

      msg: {
        type: String,
        default: '确定执行此操作吗？'
      },

      cancelBtnText: {
        type: String,
        default: '取消'
      },
    
      confirmBtnText: {
        type: String,
        default: '确定'
      }
    },

    methods: {
      show() {
        this.visible = true;
      },

      hide() {
        this.visible = false;
      },

      cancel() {
        this.hide();
        this.$emit('cancel');
      },

      confirm() {
        this.hide();
        this.$emit('confirm');
      },

    },

    components: {}
  };
</script>

<style lang="scss" scoped>
  @import '~assets/scss/mixins';

  .mine-confirm-wrapper {
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    z-index: $search-popup-z-index;
    @include flex-center();
    background-color: $modal-bgc;
  }

  .mine-confirm {
    overflow: hidden;
    width: 88%;
    background-color: #fff;
    border-radius: 5px;
    font-size: 16px;

    &-title {
      padding: 20px 15px 0;
      font-size: 18px;
      text-align: center;
      @include ellipsis();

      & + .mine-confirm-msg {
        padding-top: 20px;
        padding-bottom: 20px;
      }
    }

    &-msg {
      padding: 40px 15px;
      line-height: 1.5;
      text-align: center;
    }

    &-btns {
      display: flex;
    }

    &-btn {
      flex: 1;
      height: 44px;
      line-height: 44px;
      background: none;
      border: none;
    }
    
    &-cancel {
      border-top: 1px solid #e3e5e9;
      background-color: #fff;
    }

    &-ok {
      color: #fff;
      background-color: #f23030;
    }
  }
  .mine-confirm {
    &-enter-active,
    &-leave-active {
      transition: opacity .5s;
    }

    &-enter,
    &-leave-to {
      opacity: 0;
    }

    &-enter-active {
      .mine-confirm {
        animation: bounce-in .5s;
      }
    }
  }

  @keyframes  bounce-in {
    0% {
      transform: scale(0);
    }

    50% {
      transform: scale(1.5);
    }

    100% {
      transform: scale(1);
    }
  }
</style>
