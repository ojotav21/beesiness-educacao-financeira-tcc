var ctx = document.getElementById('myChart');
                var myChart = new Chart(ctx, {
                    type: 'pie',
                    data: {
                        labels: ['Investimentos', 'Lazer', 'Despesas Básicas', 'Conhecimento', 'Caridade'],
                        datasets: [{
                            data: [20, 10, 50, 10, 10],
                            backgroundColor: [
                                'rgba(255, 99, 132, 0.8)',
                                'rgba(54, 162, 235, 0.8)',
                                'rgba(255, 206, 86, 0.8)',
                                'rgba(75, 192, 192, 0.8)',
                                'rgba(153, 102, 255, 0.8)',

                            ],
                            borderColor: [
                                'rgba(255, 99, 132, 1)',
                                'rgba(54, 162, 235, 1)',
                                'rgba(255, 206, 86, 1)',
                                'rgba(75, 192, 192, 1)',
                                'rgba(153, 102, 255, 1)',

                            ],
                            borderWidth: 1
                        }]
                    },
                    options: {
                        scales: {
                            y: {
                                beginAtZero: true
                            },

                        }
                    }

                });