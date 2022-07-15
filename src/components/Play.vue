<template>
  <div class="music">
    <div class="top">
      <img :src="music.imgUrl" />
      <div class="data">
        <div class="left">
          <i class="iconfont icon-erji"></i>
          <span>{{ music.num | doNum }}万</span>
        </div>
        <div class="right">
          <em class="iconfont icon-play" @click="toPlay(music)"></em>
        </div>
      </div>
    </div>

    <p class="bottom">
      {{ music.desc }}
    </p>
  </div>
</template>

<script>
export default {
  name: "play",
  props: {
    music: {
      typeof: Object,
      default: [],
    },
  },
  filters: {
    doNum(value) {
      let result = Math.ceil(value / 1000);
      return result;
    },
  },
  methods: {
    toPlay(music) {
      this.$emit("play", music);
    },
  },
};
</script>

<style lang="less" scoped>
.music {
  height: 200px;
  width: 140px;
  display: flex;
  flex-direction: column;
  .top {
    position: relative;
    img {
      height: 150px;
      width: 140px;
    }
    .data {
      display: flex;
      position: absolute;
      height: 30px;
      width: 100%;
      bottom: 0;
      color: rgba(255, 255, 255, 0.76);
      background-color: rgba(0, 0, 0, 0.7);
      align-items: center;
      justify-content: space-between;
      padding: 0 10px;
      box-sizing: border-box;
      i {
        margin-right: 5px;
      }
      em {
        font-size: 20px;
      }
    }
  }
  .bottom {
    margin: 8px 0;
    font-size: 14px;
    line-height: 18px;
  }
}
</style>