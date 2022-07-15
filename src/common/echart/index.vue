<template>
  <div
    :id="id"
    :class="className"
  />
</template>

<script>
// import resize from '@/mixins/resize'
export default {
  name: 'EChart',
  // mixins: [resize],
  props: {
    className: {
      type: String,
      default: 'chart'
    },
    id: {
      type: String,
      default: 'chart'
    },
    options: {
      type: Object,
      default: () => ({})
    }
  },
  data() {
    return {
      chart: null
    }
  },
  watch: {
    options: {
      handler(options) {
        // 设置true清空echart缓存
        this.chart.setOption(options, true)
      },
      deep: true
    }
  },
  mounted() {
    this.initChart()
  },
  beforeDestroy() {
    this.chart.dispose()
    this.chart = null
  },
  methods: {
    initChart() {
      // 初始化echart
      this.chart = this.$echarts.init(this.$el, 'theme')
      this.chart.setOption(this.options, true)
    }
  }
}
</script>
