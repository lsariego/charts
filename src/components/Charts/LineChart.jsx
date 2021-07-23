import React, { useRef, forwardRef } from 'react'
import PropTypes from 'prop-types'
import { Box } from '@material-ui/core'
import formatNumber from '../../modules/utils/format-number'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import useLineChart from './LineChart.hooks'
import { GlobalStyle } from './LineChart.styles'
import { exportComponentAsJPEG } from 'react-component-export-image'
import InfoLabel from '../Labels/InfoLabel'

const LineChart = ({ chartStructure, inputLineChart }) => {
  const { serie: info, category: categories } = useLineChart(chartStructure)

  const options = {
    title: {
      text: ''
    },
    chart: {
      type: 'line'
    },
    yAxis: {
      title: {
        text: ''
      },
      gridLineDashStyle: 'ShortDash'
    },
    xAxis: {
      min: 0,
      gridLineDashStyle: 'ShortDash',
      gridLineWidth: 1,
      max: 11,
      startOnTick: false,
      endOnTick: false,
      categories: categories
    },
    series: info,
    tooltip: {
      borderWidth: 1,
      shadow: true,
      formatter() {
        return (
          '<strong>$' +
          formatNumber(this.y) +
          '</strong> transados durante el mes de ' +
          this.x +
          ' de ' +
          this.series.name
        )
      }
    },
    plotOptions: {
      line: {
        lineWidth: 4
      },
      series: {
        marker: {
          radius: 5,
          fillColor: '#fff',
          lineColor: null,
          lineWidth: 2
        }
      }
    }
  }

  const exportImage = () => {
    exportComponentAsJPEG(componentRef)
  }

  const ComponentToPrint = forwardRef((props, ref) => (
    <div ref={ref}>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  ))

  const componentRef = useRef()

  return (
    <>
      <GlobalStyle />
      <ComponentToPrint ref={componentRef} />
      <div onClick={exportImage} ref={inputLineChart} />
      <Box mb={2}>
        {info.map(item => (
          <InfoLabel key={item.name} label={item.name} color={item.color} />
        ))}
      </Box>
    </>
  )
}

LineChart.propTypes = {
  inputLineChart: PropTypes.oneOfType([PropTypes.func, PropTypes.shape({ current: PropTypes.any })]),
  chartStructure: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      mes: PropTypes.number.isRequired,
      data: PropTypes.number.isRequired,
      montoAcumulado: PropTypes.string.isRequired
    }).isRequired
  ).isRequired
}

export default LineChart
