
document.addEventListener('DOMContentLoaded', (evt) => {

  var requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };
  
  fetch("https://raw.githubusercontent.com/pcm-dpc/COVID-19/master/dati-json/dpc-covid19-ita-andamento-nazionale.json   "
    , requestOptions)
    .then(response => response.json())
    .then(data => {
      let tempo = data[0].data
      console.log(tempo)
      let deceduti = data[0].deceduti
      console.log(deceduti)
      let dimessi_guariti = data[0].dimessi_guariti
      console.log(dimessi_guariti)
      let isolamento_domiciliare = data[0].isolamento_domiciliare
      console.log(isolamento_domiciliare)
      let nuovi_positivi = data[0].nuovi_positivi
      console.log(nuovi_positivi)
      let ricoverati_con_sintomi = data[0].ricoverati_con_sintomi
      console.log(ricoverati_con_sintomi)
      let tamponi = data[0].tamponi
      console.log(tamponi)
      let terapia_intensiva = data[0].terapia_intensiva
      console.log(terapia_intensiva)
      let totale_casi = data[0].totale_casi
      console.log(totale_casi)
      let totale_ospedalizzati = data[0].totale_ospedalizzati
      console.log(totale_ospedalizzati)
      let totale_positivi = data[0].totale_positivi
      console.log(totale_positivi)


//chart.js
var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: [tempo],
        datasets: [{
            label: 'Deceduti',
            data: [
              deceduti,              
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
    datasets: [{
        label: 'Dimessi guariti',
            data: [
              dimessi_guariti,              
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
        }],
    
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