//CO chart
const coLabels = [1,2,3,4,5,6]
const coData = {
  labels: coLabels,
  datasets: [{
    label: 'Supports ludiques',
    data: [4,16,19,23,25,31],
    fill: '#872B95',
    borderColor: '#872B95',
    tension: 0.1
  },
  {
    label: 'Supports classiques',
    data: [6,14,19,21,23,25],
    fill: '#FFC53A',
    borderColor: '#FFC53A',
    tension: 0.1
  }
]
};
const coConfig = {
    type: 'line',
    data: coData,
    options: {
        scales: {
            y: {
            beginAtZero: true,
            max: 50
            }
        },
        plugins: {
            legend: {
              display: false
            },
      }
  }
};

const myChart1 = new Chart(
    document.getElementById('co').getContext('2d'),
    coConfig
);

//PO chart
const poLabels = [1,2,3,4,5,6]
const poData = {
  labels: poLabels,
  datasets: [{
    data: [4,18,23,26,31,38],
    fill: '#872B95',
    borderColor: '#872B95',
    tension: 0.1
  },
  {
    data: [5,11,19,23,27,30],
    fill: '#FFC53A',
    borderColor: '#FFC53A',
    tension: 0.1
  }
]
};
const poConfig = {
    type: 'line',
    data: poData,
    options: {
        scales: {
            y: {
            beginAtZero: true,
            max: 50
            }
        },
        plugins: {
            legend: {
              display: false
            },
      }
  }
};

const myChart2 = new Chart(
    document.getElementById('po').getContext('2d'),
    poConfig
);

//CE chart
const ceLabels = [1,2,3,4,5,6]
const ceData = {
  labels: ceLabels,
  datasets: [{
    data: [6, 19, 24, 26, 29, 33],
    fill: '#872B95',
    borderColor: '#872B95',
    tension: 0.1
  },
  {
    data: [4,18,23,26,31,38],
    fill: '#FFC53A',
    borderColor: '#FFC53A',
    tension: 0.1
  }
]
};
const ceConfig = {
    type: 'line',
    data: ceData,
    options: {
        scales: {
            y: {
            beginAtZero: true,
            max: 50
            }
        },
        plugins: {
            legend: {
              display: false
            },
      }
  }
};

const myChart3 = new Chart(
    document.getElementById('ce').getContext('2d'),
    ceConfig
);

//PE chart
const peLabels = [1,2,3,4,5,6]
const peData = {
  labels: peLabels,
  datasets: [{
    data: [6,19,25,29,34,39],
    fill: '#872B95',
    borderColor: '#872B95',
    tension: 0.1
  },
  {
    data: [5,10,17,21,24,28],
    fill: '#FFC53A',
    borderColor: '#FFC53A',
    tension: 0.1
  }
]
};
const peConfig = {
    type: 'line',
    data: peData,
    options: {
        scales: {
            y: {
            beginAtZero: true,
            max: 50
            }
        },
        plugins: {
            legend: {
              display: false
            },
      }
  }
};

const myChart4 = new Chart(
    document.getElementById('pe').getContext('2d'),
    peConfig
);