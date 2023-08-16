const barChart = document.getElementById('barChart')

const barChartData = Array.from({ length: 15 }, (_, i) => {
    return {
        label: `Bar ${i + 1}`,
        value: Math.round(Math.random() * 1000)
    }
})

const barMax = Math.max(...barChartData.map(({value}) => value))

barChartData.forEach(({ label, value }) => {
    const bar = document.createElement('div')
    bar.classList.add('bar')

    const barLabel = document.createElement('span')
    barLabel.classList.add('label')
    barLabel.innerText = label
    bar.appendChild(barLabel)

    const barPlot = document.createElement('div')
    barPlot.classList.add('bar-plot')
    barPlot.style.width = `${Math.round(value * 90 / barMax)}%`
    bar.appendChild(barPlot)

    const barValue = document.createElement('span')
    barValue.classList.add('value')
    barValue.innerText = value
    bar.appendChild(barValue)

    barChart.appendChild(bar)
})
