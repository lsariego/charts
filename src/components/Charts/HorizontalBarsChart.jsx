import React from 'react'
import PropTypes from 'prop-types'
import formatToAmount from '../../modules/utils/formatters'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import { GlobalStyle } from './LineChart.styles'
import exportToImage from '../../modules/utils/exportToImage'
import theme from '../../config/styles/theme'

const HorizontalBarsChart = ({ inputHorizontalBarChartRef, info, categories }) => {
  const options = {
    title: {
      text: ''
    },
    chart: {
      type: 'bar'
    },
    yAxis: {
      title: {
        text: ''
      }
    },
    xAxis: {
      categories: categories
    },
    series: [{
      data: info,
      dataLabels: [{
        align: 'left',
        inside: true,
        style: {
          color: theme.palette.blackGrayBrand.white,
          fontWeight: 'lighter',
          fontSize: '12px',
          textOutline: 'none'
        },
        formatter: function() {
          return '<div>' + formatToAmount(this.point.orders) + ' órdenes de compra</div>'
        }
      },
      {
        align: 'right',
        borderColor: theme.palette.charts.lightSlate,
        backgroundColor: theme.palette.blackGrayBrand.white,
        borderWidth: 1,
        padding: 5,
        x: 110,
        borderRadius: '15px',
        style: {
          color: theme.palette.charts.lightSlate,
          fontWeight: 'lighter',
          fontSize: '12px',
          textOutline: 'none'
        },
        formatter: function() {
          return '&nbsp; $' + formatToAmount(this.y) + '&nbsp;'
        }
      }
      ]
    }],
    tooltip: {
      enabled: false
    },
    plotOptions: {
      bar: {
        minPointLength: 175,
        color: theme.palette.charts.navyBlue
      },
      series: {
        dataLabels: {
          enabled: true
        }
      }
    }
  }

  const exportData = () => {
    exportToImage('horizontalBarChart')
  }

  return (
    <>
      <GlobalStyle />
      <div id="horizontalBarChart">
        <HighchartsReact highcharts={Highcharts} options={options} />
        <div onClick={exportData} ref={inputHorizontalBarChartRef} />
      </div>
    </>
  )
}

HorizontalBarsChart.propTypes = {
  info: PropTypes.arrayOf(
    PropTypes.shape({
      catName: PropTypes.string,
      orders: PropTypes.number,
      amount: PropTypes.number,
      y: PropTypes.number
    })
  ).isRequired,
  categories: PropTypes.arrayOf(PropTypes.string).isRequired,
  inputHorizontalBarChartRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.instanceOf(window.HTMLDivElement) })
  ])
}

export default HorizontalBarsChart
