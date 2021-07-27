import React from 'react'
import PropTypes from 'prop-types'
import formatToAmount from '../../modules/utils/formatters'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import { GlobalStyle, BoxWrapper } from './LineChart.styles'
import InfoLabel from '../Labels/InfoLabel'
import exportToImage from '../../modules/utils/exportToImage'

const LineChart = ({ inputLineChartRef, categories, info }) => {
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

  const exportData = () => {
    exportToImage('lineChart')
  }

  return (
    <>
      <GlobalStyle />
      <div id="lineChart">
        <HighchartsReact highcharts={Highcharts} options={options} />
        <div onClick={exportData} ref={inputLineChartRef} />
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
  categories: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number])).isRequired,
  info: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number])).isRequired,
  inputLineChartRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.instanceOf(window.HTMLDivElement) })
  ])
}

export default LineChart
