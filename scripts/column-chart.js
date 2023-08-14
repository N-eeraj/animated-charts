const columnChart = document.getElementById('columnChart')

const columnChartData = Array.from({ length: 15 }, (_, i) => {
    return {
        label: `Column ${i + 1}`,
        value: Math.round(Math.random() * 1000)
    }
})

const columnChartMax = Math.max(...columnChartData.map(({value}) => value))

columnChartData.forEach(({label, value}) => {
    const column = document.createElement('div')
    column.classList.add('column')

    const columnValue = document.createElement('span')
    columnValue.classList.add('value')
    columnValue.innerText = value
    column.appendChild(columnValue)

    const columnPlot = document.createElement('div')
    columnPlot.classList.add('column-plot')
    columnPlot.style.height = `${Math.round(value * 100 / columnChartMax)}%`
    column.appendChild(columnPlot)

    const columnLabel = document.createElement('span')
    columnLabel.classList.add('label')
    columnLabel.innerText = label
    column.appendChild(columnLabel)

    columnChart.appendChild(column)
})
