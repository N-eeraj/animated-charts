const barChart = document.getElementById('barChart')

const data = [
    {
        label: 'Column 1',
        value: 100,
    },
    {
        label: 'Column 2',
        value: 431,
    },
    {
        label: 'Column 3',
        value: 140,
    },
    {
        label: 'Column 4',
        value: 540,
    },
]

const max = Math.max(...data.map(({value}) => value))

data.forEach(({label, value}) => {
    const column = document.createElement('div')
    column.classList.add('column')
    column.setAttribute('data-value', value)


    const columnValue = document.createElement('span')
    columnValue.classList.add('value')
    columnValue.innerText = value
    column.appendChild(columnValue)

    const columnBar = document.createElement('div')
    columnBar.classList.add('column-bar')
    columnBar.style.height = `${Math.round(value * 100 / max)}%`
    column.appendChild(columnBar)

    const columnLabel = document.createElement('span')
    columnLabel.classList.add('label')
    columnLabel.innerText = label
    column.appendChild(columnLabel)

    barChart.appendChild(column)
})
