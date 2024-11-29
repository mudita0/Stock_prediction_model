// Import Chart.js (via a CDN in your project or locally if set up)
// Include this <script> in your HTML: 
// <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>

document.addEventListener("DOMContentLoaded", function () {
    const ctx = document.getElementById('revenueChart').getContext('2d');
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['2021', '2022', '2023'],
            datasets: [{
                label: 'Revenue (₹ Cr)',
                data: [280000, 300000, 339600],
                borderColor: 'blue',
                borderWidth: 2,
                fill: false
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    display: true,
                }
            }
        }
    });
});
