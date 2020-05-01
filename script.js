
document.addEventListener('DOMContentLoaded', (evt) => {

  let confirmeddata = document.getElementById('confirmeddata')
  let recovereddata = document.getElementById('recovereddata')
  let deathsdata = document.getElementById('deathsdata')
  let lastUpdatedata = document.getElementById('lastUpdatedata')



  var requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };
  
  fetch("https://covid19.mathdro.id/api/countries/IT"
    , requestOptions)
    .then(response => response.json())
    .then(data => {
      let confirmed = data.confirmed.value
      let recovered = data.recovered.value
      let deaths = data.deaths.value
      let lastUpdate = data.lastUpdate
      

//chart.js
var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'pie',
    data: {
        labels: ['Positivi al Covid', 'Ricoverati', 'Deceduti'],
        datasets: [{
            label: 'Popolazione Italiana',
            data: [
              confirmed,
              recovered,
              deaths
            ],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderWidth: 1,
            borderColor:'#777',
            hoverBorderWidth: 2,
        }]
    },
    options: {
        title:{
            display:true,
            text:'Dati Covid-19 in Italia dall\'inizio della pandemia',
            fontSize:25
        },
        legend:{
            display:true,
            position:'right',
            labels:{
                fontColor:'#000'
            }
        },
        layout:{
            padding:{
                left:50,
                right:0,
                bottom:0,
                top:0
            }
        },
        tooltips:{
            enabled:true,
        },
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});













    })
    .catch(error => console.log('error', error));













})