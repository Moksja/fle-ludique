 //Datas
 const labels = ['Jeux de rôles', 'Jeux numériques', 'Jeux de société', 'Jeux de cartes'];
 const data = {
     labels: labels,
     datasets: [{
        data: [60, 40, 35, 25],
        backgroundColor: '#EF3054', 
     }]
 };

//Config
 const options = {
    indexAxis: 'y',
    scales: {
      x: {
        beginAtZero: true,
        max: 100, 
        
        grid: {
          display: false
        }
      },
      y: { 
        grid: {
          display: false 
        }
    }
    },
    plugins: {
      legend: {
        display: false
      },
      datalabels: {
        anchor: 'end',
        align: 'end',
        color: 'black',
        font: {
          weight: 'bold'
          },
          formatter: function(value) {
            return value+'%';
          }
      }
    }
 };

 // Initialisation
 const ctx = document.getElementById('p2-frequency-chart').getContext('2d');
 const myBarChart = new Chart(ctx, {
    type: 'bar',
    data: data,
    options: options,
    plugins: [ChartDataLabels]
 });