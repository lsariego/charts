import React from 'react'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import formatNumber from '../../modules/utils/format-number'

const LineChart = () => {
  const data = [
    { mes: 'Convenio Marco', ordenes: 1014, monto: 631387201 },
    { mes: 'Licitación Pública', ordenes: 100, monto: 403765287 },
    { mes: 'Licitación Privada', ordenes: 34, monto: 248648354 },
    { mes: 'Trato directo', ordenes: 369, monto: 655387201 },
    { mes: 'Compra ágil', ordenes: 1983, monto: 723358462 }
  ]

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
      categories: data.map(item => item.mes)
    },
    series: [{
      data: data.map(({ monto, ...rest }) => ({ ...rest, y: monto })),
      dataLabels: [{
        align: 'left',
        inside: true,
        style: {
          color: '#fff',
          fontWeight: 'lighter',
          fontSize: '12px',
          textOutline: 'none'
        },
        formatter: function() {
          return '<div>' + formatNumber(this.point.ordenes) + ' órdenes de compra</div>'
        }
      },
      {
        align: 'right',
        borderColor: '#768AA2',
        backgroundColor: '#fff',
        borderWidth: 1,
        x: 110,
        borderRadius: '15px',
        style: {
          color: '#768AA2',
          fontWeight: 'lighter',
          fontSize: '12px',
          textOutline: 'none'
        },
        formatter: function() {
          return '&nbsp; $' + formatNumber(this.y) + '&nbsp;'
        }
      }
      ]
    }],
    tooltip: {
      enabled: false
    },
    plotOptions: {
      bar: {
        color: '#0064FF'
      },
      series: {
        dataLabels: {
          enabled: true
        }
      }
    }
  }

  return (
    <>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </>
  )
}

export default LineChart
