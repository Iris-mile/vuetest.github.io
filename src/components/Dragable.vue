<template>
  <div
    class="drag"
    ref="drag"
    draggable="true"
    @dragstart="dragStart('drag')"
    @dragend="dragEnd('drag',10)"
    @click="toDone('drag')"
  >
    <p><button>可以拖动</button></p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dragStartLocation: {},
    };
  },
  methods: {
    dragStart(name) {
      let style = window.getComputedStyle(this.$refs[name], null);

      this.dragStartLocation.bottom = parseFloat(style.bottom);
      this.dragStartLocation.right = parseFloat(style.right);
      this.dragStartLocation.x = event.screenX;
      this.dragStartLocation.y = event.screenY;
      this.dragStartLocation.height = parseFloat(style.height);
      this.dragStartLocation.width = parseFloat(style.width);
    },
    dragEnd(name,padding) {
     let main = window.getComputedStyle(this.$el.parentElement, null)
      let height = parseFloat(main.height)
      let width = parseFloat(main.width)
      let x = this.dragStartLocation.right - (event.screenX - this.dragStartLocation.x)
      let y = this.dragStartLocation.bottom + (this.dragStartLocation.y - event.screenY)
      if (y <= 0) y = 10
      if (y >= (height - this.dragStartLocation.height - 70)) y = height - this.dragStartLocation.height - 70
      this.$refs[name].style.bottom = y + 'px'
      if (name === 'passengerLegend') {
        if (x <= 0) x = 10 // 限制右边
        if (x >= (width - this.dragStartLocation.width - 500)) x = width - this.dragStartLocation.width - padding - 500 // 限制左边
      } else {
        if (x <= 0) x = 10
        if (x >= (width - this.dragStartLocation.width)) x = width - this.dragStartLocation.width - padding - 20
      }
      
      this.$refs[name].style.right = x + 'px'
  },
  },
  
};
</script>

<style lang="less" scoped>
.drag {
  width: 200px;
  padding: 10px;
  background-color: green;
  color: white;
  text-align: center;
  position: absolute;
  right: 50px;
  bottom: 100px;
}
</style>