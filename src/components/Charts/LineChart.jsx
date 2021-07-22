import React, { useState, useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import { Box } from '@material-ui/core'
import formatNumber from '../../modules/utils/format-number'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import { exportComponentAsJPEG } from 'react-component-export-image'
import InfoLabel from '../Labels/InfoLabel'

const LineChart = ({ data }) => {
  const [amounts, setAmounts] = useState([])
  const colors = ['#0097A7', '#FBC02D', '#F57C00', '#E64A19']

  useEffect(() => {
    const setData = () => {
      const arrayAmounts = data.map((item, index) => ({
        ...item,
        color: colors[index]
      }))
      setAmounts(arrayAmounts)
    }
    setData()
  }, [data])

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
      categories: [
        'Enero',
        'Febrero',
        'Marzo',
        'Abril',
        'Mayo',
        'Junio',
        'Julio',
        'Agosto',
        'Septiembre',
        'Octubre',
        'Noviembre',
        'Diciembre'
      ]
    },
    series: amounts,
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

  const ComponentToPrint = React.forwardRef((props, ref) => (
    <div ref={ref}>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  ))

  const componentRef = useRef()

  return (
    <>
      <ComponentToPrint ref={componentRef} />
      <div onClick={() => exportComponentAsJPEG(componentRef)} id="exportLineChart" />
      <Box mb={2}>
        {amounts.map(item => (
          <InfoLabel key={item.name} label={item.name} color={item.color} />
        ))}
      </Box>
    </>
  )
}

LineChart.propTypes = {
  data: PropTypes.array
}

export default LineChart
