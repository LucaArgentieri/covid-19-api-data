
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

    var lista = {
      tempo: [],
      deceduti: [],
      dimessi_guariti: [],
      isolamento_domiciliare: [],
      nuovi_positivi: [],
      ricoverati_con_sintomi: [],
      tamponi: [],
      terapia_intensiva: [],
      totale_casi: [],
      totale_ospedalizzati: [],
      totale_positivi: [],
    }

    let len = data.length;
    let newDate = moment(lista.tempo).format('LL');
    console.log(newDate)


    for(let i = 0; i < len; i++) {
        lista.tempo.push(data[i].data)
        lista.deceduti.push(data[i].deceduti)
        lista.dimessi_guariti.push(data[i].dimessi_guariti)
        lista.isolamento_domiciliare.push(data[i].isolamento_domiciliare)
        lista.nuovi_positivi.push(data[i].nuovi_positivi)
        lista.ricoverati_con_sintomi.push(data[i].ricoverati_con_sintomi)
        lista.tamponi.push(data[i].tamponi)
        lista.terapia_intensiva.push(data[i].terapia_intensiva)
        lista.totale_casi.push(data[i].totale_casi)
        lista.totale_ospedalizzati.push(data[i].totale_ospedalizzati)
        lista.totale_positivi.push(data[i].totale_positivi)
    }





//chart.js
var myChart1 = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(myChart1, {
    type: 'line',
    data: {
        labels: lista.tempo, //tempo
        datasets: [{
            label:"Deceduti",
            data: lista.deceduti, // categoria
            borderColor: ['rgba(255, 99, 132, 0.2)',],
            fill: false,

        },
        {
          label:"Dimessi guariti",
          data: lista.dimessi_guariti, // categoria
          borderColor: ['rgba(255, 99, 71, 0.5)'],
          fill: false,

        },
        {
          label:"Isolamento domiciliare",
          data: lista.isolamento_domiciliare, // categoria
          borderColor: ['rgba(255, 99, 255, 0.5)'],
          fill: false,
        },
        // {
        //   label:"Nuovi positivi",
        //   data: lista.nuovi_positivi, // categoria
        //   backgroundColor: ['rgba(255, 172, 0, 0.5)'],
        // },
        {
          label:"Ricoverati con sintomi",
          data: lista.ricoverati_con_sintomi, // categoria
          borderColor: ['rgba(0, 172, 0, 1)'],
          fill: false,
        },
        // {
        //   label:"Tamponi effettuati",
        //   data: lista.tamponi, // categoria
        //   backgroundColor: ['rgba(199, 0, 0, 0)'],
        //   borderColor: [
        //     'rgba(255, 99, 132, 1)',
        // ],
        // },
        // {
        //   label:"Terapia intensiva",
        //   data: lista.terapia_intensiva, // categoria
        //   backgroundColor: ['rgba(162, 0, 252, 1)'],
        // },
        {
          label:"Casi totali",
          data: lista.totale_casi, // categoria
          borderColor: ['rgba(162, 144, 0, 1)'],
          fill: false,
          
        },
        {
          label:"Totale ospedalizzati",
          data: lista.totale_ospedalizzati, // categoria
          borderColor: ['rgba(0, 21, 164, 1)'],
          fill: false,
        },
        {
          label:"Totale positivi",
          data: lista.totale_positivi, // categoria
          borderColor	: ['rgba(0, 255, 164, 1)'],
          fill: false,
        },
      ]
    },
    options: {
      responsive:true,
      maintainAspectRatio: false,
      title: {
        text: "Situazione Italiana Covid-19 - 2020",
        display: true,
        fontSize: 30,
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