const doughnutChart = document.querySelector('#doughnutChart .doughnut')
const doughnutChartValue = document.querySelector('.doughnut-chart .value')

const doughnutData = Math.random() * 100

doughnutChart.style.strokeDashoffset = `${220 - 1.26 * doughnutData}%`
doughnutChartValue.innerText = `${doughnutData.toFixed(2)}%`