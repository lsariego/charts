import React from 'react'
import PropTypes from 'prop-types'
import formatToAmount from '../../modules/utils/formatters'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import useLineChart from './LineChart.hooks'
import { GlobalStyle, BoxWrapper } from './LineChart.styles'
import InfoLabel from '../Labels/InfoLabel'
import exportToImage from '../../modules/utils/exportToImage'

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
          formatToAmount(this.y) +
          '</strong> transados durante el month de ' +
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

  const exportData = data => {
    exportToImage(data)
  }

  return (
    <>
      <GlobalStyle />
      <div id="lineChart">
        <HighchartsReact highcharts={Highcharts} options={options} />
        <div
          onClick={() => {
            exportData('lineChart')
          }}
          ref={inputLineChart}
        />
        <BoxWrapper mb={2}>
          {info.map(item => (
            <InfoLabel key={item.name} label={item.name} color={item.color} />
          ))}
        </BoxWrapper>
      </div>
    </>
  )
}

LineChart.propTypes = {
  inputLineChart: PropTypes.oneOfType([PropTypes.func, PropTypes.shape({ current: PropTypes.instanceOf('div') })]),
  chartStructure: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      month: PropTypes.number.isRequired,
      data: PropTypes.number.isRequired,
      totalAmount: PropTypes.string.isRequired
    }).isRequired
  ).isRequired
}

export default LineChart
