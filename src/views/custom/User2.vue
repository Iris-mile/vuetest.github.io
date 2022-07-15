<template>
  <div>
    <el-button
      :disabled="state"
      size="mini"
      type="success"
    >哈哈哈哈</el-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      state:false,
    };
  },
};
</script>

<style lang="less" scoped></style>
