<template>
  <div>
    <h1>文字展开收缩</h1>
    <div class="word">
      <Display contentWords="日浮动元素是如何元素。" />
      <Display
        contentWords="日照市东港区纪，进驻中心医院展开调查。已对日照东港区政府、日照东港区卫健局、涉事医院负有领导责任和直接管理责任的11名相关人员严肃追责问责，对负有直接管理责任和重要领导责任的人员予以免职。"
      />
      <Display
        contentWords="日照市东港区纪委监委于18日22时成立调查组，进驻中心医院展开调查。已对日照东港区政府、日照东港区卫健局、涉事医院负有领导责任和直接管理责任的11名相关人员严肃追责问责，对负有直接管理责任和重要领导责任的人员予以免职。"
      />
    </div>
  </div>
</template>

<script>
import Display from "@/components/Display.vue";
export default {
  components: { Display },
};
</script>

<style lang="less" scoped>
.word {
  width: 40%;
  margin: 0 auto;
}
</style>
