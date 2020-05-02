
document.addEventListener('DOMContentLoaded', (evt) => {


  var requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };
  
  fetch("https://raw.githubusercontent.com/pcm-dpc/COVID-19/master/dati-json/dpc-covid19-ita-andamento-nazionale.json   "
    , requestOptions)
    .then(response => {
      return response.json()
    })
    .then(data => {
    console.log(data);


    
      let tempo = data[0].data
      let deceduti = data[0].deceduti
      let dimessi_guariti = data[0].dimessi_guariti
      let isolamento_domiciliare = data[0].isolamento_domiciliare
      let nuovi_positivi = data[0].nuovi_positivi
      let ricoverati_con_sintomi = data[0].ricoverati_con_sintomi
      let tamponi = data[0].tamponi
      let terapia_intensiva = data[0].terapia_intensiva
      let totale_casi = data[0].totale_casi
      let totale_ospedalizzati = data[0].totale_ospedalizzati
      let totale_positivi = data[0].totale_positivi




//chart.js
var myChart1 = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(myChart1, {
    type: 'line',
    data: {
        labels: [tempo], //tempo
        datasets: [{
            label:"Deceduti",
            data: [deceduti], // categoria
            backgroundColor: ['rgba(255, 99, 132, 0.2)',],
        },
        {
          label:"Dimessi guariti",
          data: [dimessi_guariti], // categoria
          backgroundColor: ['rgba(255, 99, 71, 0.5)'],
        },
        {
          label:"Isolamento domiciliare",
          data: [isolamento_domiciliare], // categoria
          backgroundColor: ['rgba(255, 99, 255, 0.5)'],
        },
        {
          label:"Nuovi positivi",
          data: [nuovi_positivi], // categoria
          backgroundColor: ['rgba(255, 172, 0, 0.5)'],
        },
        {
          label:"Ricoverati con sintomi",
          data: [ricoverati_con_sintomi], // categoria
          backgroundColor: ['rgba(0, 172, 0, 1)'],
        },
        {
          label:"Tamponi effettuati",
          data: [tamponi], // categoria
          backgroundColor: ['rgba(162, 0, 0, 1)'],
        },
        {
          label:"Terapia intensiva",
          data: [terapia_intensiva], // categoria
          backgroundColor: ['rgba(162, 0, 252, 1)'],
        },
        {
          label:"Casi totali",
          data: [totale_casi], // categoria
          backgroundColor: ['rgba(162, 144, 0, 1)'],
        },
        {
          label:"Totale ospedalizzati",
          data: [totale_ospedalizzati], // categoria
          backgroundColor: ['rgba(0, 21, 164, 1)'],
        },
        {
          label:"Totale positivi",
          data: [totale_positivi], // categoria
          backgroundColor: ['rgba(0, 255, 164, 1)'],
        },
      ]
    },
    options: {
      responsive:true,
      maintainAspectRatio: false,
      title: {
        text: "Prova titolo",
        display: true,
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