<template>
  <div>
    {{ o }}

    <button @click="changeData">改数据</button>
    <p
      v-show="show"
      id="ipt"
    >{{ text }}</p>
  </div>
</template>

<script>
import { myMixin } from "@/mixin";

export default {
  data() {
    return {
      o: {
        name: "小貂蝉",
        // email:""
      },
      show: false,
      text: "原本内容",
    };
  },

  // 混入：把共有的配置选项 和 组件的选项 进行合并
  mixins: [myMixin],


  methods: {
    hi() {},
    changeData() {
      // 后面添加的email 挟持不到 可以修改email 不会触发视图更新
      // this.o.email = "凡凡";
      //解决1：
      // this.o = { ...this.o };

      //解决2：
      // this.$set(this.o, "email", "哈哈哈哈");

      this.show = true;
      this.text = "嗷嗷嗷啊改变了";
      console.log(document.getElementById("ipt").textContent); //没有拿到最新文本内容

      //获取最新内容文本dom
      this.$nextTick(() => {
        console.log(document.getElementById("ipt").offsetWidth);
        console.log(document.getElementById("ipt").textContent);
      });

    },
  },
};
</script>

<style lang="less" scoped></style>
