// 
// Page 1 charts
// 

//60% chart
const yValues60Percent = [40, 60];
const barColors60Percent = [
  "#9D9D9D",
  "#872B95"
];

new Chart("p1-60percent-chart", {
  type: "doughnut",
  data: {
    datasets: [{
      backgroundColor: barColors60Percent,
      data: yValues60Percent
    }]
  },
  options: {
    responsive: true
  }
});

//75% chart
const yValues75Percent = [25, 75];
const barColors75Percent = [
  "#9D9D9D",
  "#FFC53A"
];

new Chart("p1-75percent-chart2", {
  type: "doughnut",
  data: {
    datasets: [{
      backgroundColor: barColors75Percent,
      data: yValues75Percent
    }]
  },
  options: {
    responsive: true
  }
});
