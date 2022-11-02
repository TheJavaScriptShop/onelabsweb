import { useEffect } from 'react'

import ClimbingBoxLoader from 'react-spinners/ClimbingBoxLoader'

import { APPS } from 'src/constants'

export const QUERY = gql`
  query HomeQuery($appName: String!) {
    transactionsForApp(appName: $appName) {
      price {
        value
        timestamp
      }
      transactions {
        value
        timestamp
      }
    }
  }
`

export const Loading = () => (
  <div className="align-center mt-5 flex items-center justify-center">
    <ClimbingBoxLoader color="#ffde5c" />
  </div>
)

export const Empty = () => (
  <div className="align-center mt-5 flex items-center justify-center">
    <img src="/nodata.png" alt="no data" height={100} width={100} />
  </div>
)

export const Failure = () => (
  <div className="align-center mt-5 flex items-center justify-center">
    <img src="/nodata.png" alt="no data" height={100} width={100} />
  </div>
)

export const Success = (data) => {
  useEffect(() => {
    window.Highcharts.chart('container', {
      title: {
        text: APPS[data.appName] + ' Price Movement',
      },

      yAxis: {
        title: {
          text: 'Price',
        },
      },

      xAxis: {
        accessibility: {
          rangeDescription: 'Date',
        },
        labels: {
          enabled: true,
          formatter: function () {
            return data.transactionsForApp.price.map((x) => x.timestamp)[
              this.value
            ]
          },
        },
      },

      legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'middle',
      },

      plotOptions: {
        series: {
          label: {
            connectorAllowed: false,
          },
        },
      },

      series: [
        {
          name: 'Price',
          data: data.transactionsForApp.price.map((x) => x.value) || [],
        },
      ],

      responsive: {
        rules: [
          {
            condition: {
              maxWidth: 500,
            },
            chartOptions: {
              legend: {
                layout: 'horizontal',
                align: 'center',
                verticalAlign: 'bottom',
              },
            },
          },
        ],
      },
    })
    window.Highcharts.chart('container-transactions', {
      title: {
        text: APPS[data.appName] + ' Transactions',
      },

      yAxis: {
        title: {
          text: 'Price',
        },
      },

      xAxis: {
        accessibility: {
          rangeDescription: 'Date',
        },
        labels: {
          enabled: true,
          formatter: function () {
            return data.transactionsForApp.transactions.map((x) => x.timestamp)[
              this.value
            ]
          },
        },
      },

      legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'middle',
      },

      plotOptions: {
        series: {
          label: {
            connectorAllowed: false,
          },
        },
      },

      series: [
        {
          name: 'Transactions',
          data: data.transactionsForApp.transactions.map((x) => x.value) || [],
          color: '#4ade80',
        },
      ],

      responsive: {
        rules: [
          {
            condition: {
              maxWidth: 500,
            },
            chartOptions: {
              legend: {
                layout: 'horizontal',
                align: 'center',
                verticalAlign: 'bottom',
              },
            },
          },
        ],
      },
    })
  }, [data])

  return (
    <div>
      <figure className="highcharts-figure">
        <div id="container"></div>
      </figure>
      <figure className="highcharts-figure mt-5">
        <div id="container-transactions"></div>
      </figure>
    </div>
  )
}
