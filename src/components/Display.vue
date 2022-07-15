<template>
  <!-- 按钮和文字是环绕型，不会遮挡文字，文字避开会换行 -->
  <div class="wrapper">
    <div ref="textarea" :class="btnStatus ? '' : 'textarea'">
      <!-- 按钮必须写在文字前面，因为float的原因 -->
      <div
        v-if="btnShow"
        class="btnChange"
        :class="btnStatus ? '' : 'btn'"
        @click="changeBtnStatus"
      >
        {{ btnStatus ? "收起" : "展开" }}
      </div>
      {{ contentWords }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    contentWords: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      btnShow: true,
      btnStatus: false,
    };
  },
  methods: {
    changeBtnStatus() {
      this.btnStatus = !this.btnStatus;
    },
    isBtnShow() {
      //判断内容高度和视口高度
      if (
        this.$refs.textarea.scrollHeight == this.$refs.textarea.clientHeight
      ) {
        this.btnShow = false;
      }
    },
  },
  mounted() {
    this.isBtnShow();
  },
};
</script>

<style lang="less" scoped>
div.wrapper {
  width: 100%;
  display: flex;
  font-size: 12px;
  margin-bottom: 30px;
  > div {
    text-align: justify;
    line-height: 2em;
  }
  div.textarea {
    max-height: 4em;
    overflow: hidden;
  }
  > div::before {
    content: "";
    float: right;
    height: 100%;
    margin-bottom: -24px;
  }


  div.btnChange {
    color: #2e90ff;
    float: right;
    clear: both;//两个浮动元素
    cursor: pointer;
    margin-left: 20px;
    position: relative;
}
    .btn::before {
      position: absolute;
      left: -20px;
      width: 20px;
      content: "···";
      text-align: center;
      color: #000;
    }
  
}
</style>