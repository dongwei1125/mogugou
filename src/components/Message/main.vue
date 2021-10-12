<template>
  <transition v-if="visible" name="fade">
    <div class="message">{{ message }}</div>
  </transition>
</template>

<script>
export default {
  name: 'Message',
  data() {
    return {
      visible: true,
      message: '',
      duration: 2000,
      onClose: null,
    }
  },
  mounted() {
    setTimeout(() => {
      this.visible = false

      this.onClose && this.onClose()
    }, this.duration)
  },
}
</script>

<style lang="less" scoped>
.message {
  position: fixed;
  left: 50%;
  top: 50%;
  font-size: 14px;
  transform: translate(-50%, -50%);
  background-color: rgba(0, 0, 0, 0.8);
  color: #fff;
  padding: 4px 8px;
  border-radius: 5px;
  z-index: 99999;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
