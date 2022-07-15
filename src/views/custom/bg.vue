<template>
  <div>
    <el-select
      v-model="nowValue"
      placeholder="请选择"
    >
      <el-option
        label="区域一"
        value="1"
      ></el-option>
      <el-option
        label="区域二"
        value="2"
      ></el-option>
      <el-option
        label="区域三"
        value="3"
      ></el-option>
    </el-select>
  </div>
</template>

<script>
export default {
  props: {
    area: {
      type: String,
      default: "",
    },
  },
  computed: {
    nowValue: {
      get() {
        console.log("执行了get", this.area);
        return this.area;
      },
      set(val) {
        console.log("执行了set", val);
        this.$emit("update:area", val);
      },
    },
  },
};
</script>

<style lang="less" scoped></style>
