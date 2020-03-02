import { dataJuggler as dataJugglerOriginal } from 'data-juggler'
import { extent } from 'd3-array'

export function dataJuggler(dataset, dateColumnName) {
  const {
    data: dataOriginal,
    moments: momentsOriginal,
    types: typesOriginal,
    scalers,
  } = dataJugglerOriginal(dataset)

  // change data juggler output

  // update data
  const data = dataOriginal.map(d => {
    d[dateColumnName].raw = new Date(d[dateColumnName].raw).getTime()
    return d
  })
  // update moments
  const timestampsDate = data.map(d => new Date(d[dateColumnName].raw).getTime())
  const [minDate, maxDate] = extent(timestampsDate)
  const moments = {
    ...momentsOriginal,
    [dateColumnName]: {
      frequencies: {},
      min: minDate,
      max: maxDate,
      sum: 0,
    },
  }
  // update types
  const types = { ...typesOriginal, [dateColumnName]: 'date' }

  return { data, moments, types, scalers }
}
