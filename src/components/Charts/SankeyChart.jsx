import React from 'react'
import PropTypes from 'prop-types'
import { GlobalStyle } from './LineChart.styles'
import Highcharts from 'highcharts'
import HighchartsSankey from 'highcharts/modules/sankey'
import HighchartsReact from 'highcharts-react-official'
import exportToImage from '../../modules/utils/exportToImage'
import theme from '../../config/styles/theme'

const SankeyChart = ({ data, inputSankeyChartRef }) => {
  HighchartsSankey(Highcharts)
  const options = {
    title: {
      text: ''
    },
    plotOptions: {
      series: {
        linkOpacity: 1,
        states: {
          inactive: {
            linkOpacity: 0.8
          }
        }
      }
    },
    series: [
      {
        colors: [
          theme.palette.charts.lightenNavyBlue,
          theme.palette.charts.darkenWisteria,
          theme.palette.charts.darkenTonysPink,
          theme.palette.charts.darkenMacNcheese,
          theme.palette.charts.darkenCreamBrulee
        ],
        data: data,
        type: 'sankey',
        name: '',
        dataLabels: {
          color: theme.palette.MP.black,
          style: {
            textOutline: 'none',
            fontWeight: 'light',
            fontSize: '12px'
          }
        }
      }
    ]
  }

  const exportData = () => {
    exportToImage('sankeyChart')
  }

  return (
    <>
      <GlobalStyle />
      <div id="sankeyChart">
        <HighchartsReact highcharts={Highcharts} options={options} />
        <div onClick={exportData} ref={inputSankeyChartRef} />
      </div>
    </>
  )
}

SankeyChart.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      color: PropTypes.string,
      from: PropTypes.string,
      to: PropTypes.string,
      weight: PropTypes.number
    })
  ).isRequired,
  inputSankeyChartRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.instanceOf(window.HTMLDivElement) })
  ])
}

export default SankeyChart
