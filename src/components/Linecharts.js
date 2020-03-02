import * as React from 'react'
import { Linechart } from '@accurat/chart-library'
import appearanceConfig from '../lib/appearanceConfig.json'
import { dimensions } from '../lib/constants'
import { dataJuggler } from '../lib/fixDJ'
import { d1, d2 } from '../datasets/datasets'
import d3 from '../datasets/data.csv'

// call the method `dataJuggler` for each dataset
// the first input is the dataset (d1, d2, ...)
// the second input is the name of the date column
const { data: data1, moments: moments1, types: types1 } = dataJuggler(d1, 'date')
const { data: data2, moments: moments2, types: types2 } = dataJuggler(d2, 'birthday')
const { data: data3, moments: moments3, types: types3 } = dataJuggler(d3, 'date')

export class Linecharts extends React.Component {
  render() {
    const { className = '' } = this.props

    return (
      <div className={`${className}`}>
        <Linechart
          data={data1}
          moments={moments1}
          structure={{
            x: [{ variable: 'date' }],
            y: [{ variable: 'value' }],
            color: [{ variable: 'cat' }],
          }}
          appearanceConfig={appearanceConfig}
          dimensions={dimensions}
          types={types1}
          withLegend={true}
        />

        <Linechart
          data={data2}
          moments={moments2}
          structure={{
            x: [{ variable: 'birthday' }],
            y: [{ variable: 'height' }],
            color: [{ variable: 'category' }],
          }}
          appearanceConfig={appearanceConfig}
          dimensions={dimensions}
          types={types2}
          withLegend={true}
        />

        <Linechart
          data={data3}
          moments={moments3}
          structure={{
            x: [{ variable: 'date' }],
            y: [{ variable: 'value' }],
            color: [{ variable: 'cat' }],
          }}
          appearanceConfig={appearanceConfig}
          dimensions={dimensions}
          types={types3}
          withLegend={true}
        />
      </div>
    )
  }
}
