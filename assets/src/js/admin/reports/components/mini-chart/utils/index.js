export function formatData (data) {

    const formattedLabels = data.labels

    const formattedDatasets = data.datasets.map((dataset, index) => {
        const formatted = {
            label: dataset.label,
            data: dataset.data,
            backgroundColor: '#FFFFFF',
            borderColor: '#DDDDDD',
            borderWidth: 3
        }
        return formatted
    })

    const formattedData = {
        labels: formattedLabels,
        datasets: formattedDatasets
    }

    return formattedData
}

export function createConfig (type, data) {
    const formattedData = formatData(type, data)
    const config = {
        type: 'line',
        data: formattedData,
        options: {
            legend: {
                display: false
            },
            scales: {
                yAxes: [{
                    display: false
                }],
                xAxes: [{
                    display: false
                }]
            }
        }
    }
    return config
}