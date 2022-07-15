import * as echarts from 'echarts/core'
import {
  BarChart,
  LineChart,
  PieChart
} from 'echarts/charts'
import {
  TitleComponent,
  TooltipComponent,
  GridComponent,
  LegendComponent,
  GraphicComponent,
  DataZoomComponent
} from 'echarts/components'

import {
  LabelLayout,
  UniversalTransition
} from 'echarts/features'
import {
  CanvasRenderer
} from 'echarts/renderers'

import theme from './theme'

echarts.use([
  TitleComponent,
  TooltipComponent,
  GridComponent,
  LegendComponent,
  GraphicComponent,
  BarChart,
  LineChart,
  PieChart,
  LabelLayout,
  UniversalTransition,
  CanvasRenderer,
  DataZoomComponent
])

echarts.registerTheme('theme', theme)

export default echarts
