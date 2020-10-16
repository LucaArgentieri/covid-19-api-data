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


    for(let i = 0; i < len; i++) {
      // Time 
        let newData = data[i].data
        let d = new Date(newData)
        let dataprova = d.getDate()
        let month = d.getMonth() + 1
        let year = d.getFullYear()
        let dateStr = dataprova + "/" + month + "/" + year
        let orarioFormattato = newData.split('T')[0]
        orarioFormattato = dataprova + "/" + month + "/" + year
      //Ciclo
        lista.tempo.push(orarioFormattato)
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
    
    let ultimideceduti = lista.deceduti[lista.deceduti.length - 1]
    let ultimidimessiguariti = lista.dimessi_guariti[lista.dimessi_guariti.length - 1]
    let ultimiisolamento = lista.isolamento_domiciliare[lista.isolamento_domiciliare.length - 1]
    let ultimiricoverati = lista.ricoverati_con_sintomi[lista.ricoverati_con_sintomi.length - 1]
    let ultimipositivi = lista.totale_positivi[lista.totale_positivi.length - 1]
    let ultimoaggiornamento = lista.tempo[lista.tempo.length - 1]

    // Dati dell'ultimo giorno

    let decedutimeno = lista.deceduti[lista.deceduti.length - 2]
    let totdec = ultimideceduti - decedutimeno

    let dimessimeno = lista.dimessi_guariti[lista.dimessi_guariti.length - 2]
    let totdimessi = ultimidimessiguariti - dimessimeno

    let isolamentomeno = lista.isolamento_domiciliare[lista.isolamento_domiciliare.length - 2]
    let totisolamento = ultimiisolamento - isolamentomeno

    let ricoveratimeno =  lista.ricoverati_con_sintomi[lista.ricoverati_con_sintomi.length - 2]
    let totricoverati =  ultimiricoverati - ricoveratimeno

    let positivimeno = lista.totale_positivi[lista.totale_positivi.length - 2]
    let totpositivi = ultimipositivi - positivimeno

  document.getElementById('titolo').innerHTML=ultimoaggiornamento
  document.getElementById('deceduti').innerHTML="+" + totdec
  document.getElementById('dimessiguariti').innerHTML="+" + totdimessi  
  document.getElementById('isolamento').innerHTML="+" + totisolamento
  document.getElementById('ricoverati').innerHTML="+" + totricoverati
  document.getElementById('positivi').innerHTML="+" + totpositivi







  //chart.js
  var myChart1 = document.getElementById('myChart').getContext('2d');
  var myChart = new Chart(myChart1, {
      type: 'line',
      data: {
          labels: lista.tempo, //tempo
          datasets: [{
              label:"Deceduti",
              data: lista.deceduti, // categoria
              borderColor: ['rgba(204, 0, 0, 1)'],
              fill: false,
              pointBorderColor:'rgba(204, 0, 0, 1)',
              pointBackgroundColor:'rgba(204, 0, 0, 1)',
              pointHitRadius:10,
              pointHoverBackgroundColor:'rgba(204, 0, 0, 1)',
          },
          {
            label:"Dimessi guariti",
            data: lista.dimessi_guariti, // categoria
            borderColor: ['rgba(255, 99, 255, 0.5)'],
            fill: false,
            pointBorderColor:'rgba(255, 99, 255, 0.5)',
            pointBackgroundColor:'rgba(255, 99, 255, 0.5)',
            pointHitRadius:10,
            pointHoverBackgroundColor:'rgba(255, 99, 255, 0.5)',
          },
          {
            label:"Isolamento domiciliare",
            data: lista.isolamento_domiciliare, // categoria
            borderColor: ['rgba(255, 104, 10, 1)'],
            fill: false,
            pointBorderColor:'rgba(255, 104, 10, 1)',
            pointBackgroundColor:'rgba(255, 104, 10, 1)',
            pointHitRadius:10,
            pointHoverBackgroundColor:'rgba(255, 104, 10, 1)',
          },
          // {
          //   label:"Nuovi positivi",
          //   data: lista.nuovi_positivi, // categoria
          //   backgroundColor: ['rgba(255, 172, 0, 0.5)'],
          // },
          {
            label:"Ricoverati con sintomi",
            data: lista.ricoverati_con_sintomi, // categoria
            borderColor: ['rgba(13, 0, 255, 1)'],
            fill: false,
            pointBorderColor:'rgba(13, 0, 255, 1)',
            pointBackgroundColor:'rgba(13, 0, 255, 1)',
            pointHitRadius:10,
            pointHoverBackgroundColor:'rgba(13, 0, 255, 1)',
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
          // {
          //   label:"Casi totali",
          //   data: lista.totale_casi, // categoria
          //   borderColor: ['rgba(162, 144, 0, 1)'],
          //   fill: false,
          //   pointBorderColor:'rgba(0, 0, 0, 0.5)',
          //   pointHitRadius:10,
          //   pointHoverBackgroundColor:'rgba(0,0,0 ,1 )',
          // },
          // {
          //   label:"Totale ospedalizzati",
          //   data: lista.totale_ospedalizzati, // categoria
          //   borderColor: ['rgba(0, 21, 164, 1)'],
          //   fill: false,
          //   pointBorderColor:'rgba(0, 0, 0, 0.5)',
          //   pointHitRadius:10,
          //   pointHoverBackgroundColor:'rgba(0,0,0 ,1 )',
          // },
          {
            label:"Positivi",
            data: lista.totale_positivi, // categoria
            borderColor	: ['rgba(3, 204, 0, 1)'],
            fill: false,
            pointBorderColor:'rgba(3, 204, 0, 1)',
            pointBackgroundColor:'rgba(3, 204, 0, 1)',
            pointHitRadius:10,
            pointHoverBackgroundColor:'rgba(3, 204, 0, 1)',
          },
        ]
      },
      options: {
        layout: {
          padding: {
              left: 20,
              right: 20,
              top: 50,
              bottom: 100,
          },
        },
        responsive:true,
        maintainAspectRatio: false,
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