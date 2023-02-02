export const data = {
    labels: [
        'Jan',
        'Feb',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'Sept',
        'Oct',
        'Nov',
        'Dec'
    ],
    datasets: [
        {
            label: 'Transactions',
            backgroundColor: '#38D900',
            data: [40, 20, 12, 39, 10, 40, 39, 80, 40, 20, 12, 11],
            borderRadius: 100,
            borderSkipped: false,
            barThickness: 6,
        }
    ]
}

export const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
        legend: {
            display: false
        }
    },
    scales: {
        y: {
            display: false,
            ticks: {
                display: false
            }
        },
        x: {
            ticks: {
                color: 'rgba(255, 255, 255, 0.1)',
            }
        }
    },

}
