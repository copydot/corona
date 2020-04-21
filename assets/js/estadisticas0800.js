const API_ESTADISTICAS = 'https://script.google.com/macros/s/AKfycbwI68_FYAYzOLKHwbxIJSX1RH_21MBF1nrxXOpHZlNsKkqvPRHh/exec?spreadsheetId=1RHD0AZGOCGNObH4W4CprLdv_IuX050-BuOqfO55Vcvw&sheet=estadisticas0800';
const xlabels = [];
const ylabels1 = [];
const ylabels2 = [];
const ylabels3 = [];
const ylabels4 = [];
const ylabels5 = [];


chartIt();

async function chartIt() {
  
  await getData();

  const ctx = document.getElementById('chartCallCenter').getContext('2d');
  
  const lineTension = 0.4;
  const borderWidth = 2;
  const radius = 2;
  const pointStyle = 'circle';
  const fill = false;
  const opacity = 1;

  const myChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: xlabels.reverse(),
        datasets: [
          {
            label: 'Consultas',
            fill: fill,
            data: ylabels1,
            borderWidth: borderWidth,
            radius: radius,
            pointStyle: pointStyle,
            borderColor: `rgba(160, 160,160,${opacity})`,
            lineTension: lineTension
          },
          {
            label: 'Reclamos',
            fill: fill,
            data: ylabels2,
            borderWidth: borderWidth,
            radius: radius,
            pointStyle: pointStyle,
            borderColor: `rgba(150,72,230,${opacity})`,
            lineTension: lineTension
          },
          {
            label: 'Denuncias',
            fill: fill,
            data: ylabels3,
            borderWidth: borderWidth,
            radius: radius,
            pointStyle: pointStyle,
            borderColor: `rgba(250,0,0,${opacity})`,
            lineTension: lineTension
          },
          {
            label: 'Asistencia Social',
            fill: fill,
            data: ylabels4,
            borderWidth: borderWidth,
            radius: radius,
            pointStyle: pointStyle,
            borderColor: `rgba(0,160,15,${opacity})`,
            lineTension: lineTension
          },
          {
            label: 'Total',
            fill: fill,
            data: ylabels5,
            borderWidth: borderWidth,
            radius: radius,
            pointStyle: pointStyle,
            borderColor: `rgba(29,172,230,${opacity})`,
            lineTension: lineTension
          }
        ]
      },
      options: {
        maintainAspectRatio: false,
        layout: {
          //padding: 10
        }
      }
  });
}

async function getData() {
  const response = await fetch(API_ESTADISTICAS);
  const data = await response.text();

  const datos = JSON.parse(data).reverse();

 //console.log(datos);  

  for (var i = 0; i < datos.length; i++) {
    
    const fecha = datos[i].fecha;
    xlabels.push(fecha);
    
    const consultas = datos[i].consultas;
    ylabels1.push(consultas);
    
    const reclamos = datos[i].reclamos;
    ylabels2.push(reclamos);

    const denuncias = datos[i].denuncias;
    ylabels3.push(denuncias);
   
    const social = datos[i].social;
    ylabels4.push(social);
   
    const total = datos[i].total;
    ylabels5.push(total);

    //console.log(fecha, consultas, reclamos, denuncias, social, total);

  }
}
