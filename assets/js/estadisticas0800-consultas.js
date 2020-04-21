//const API_CONSULTAS = 'https://script.google.com/macros/s/AKfycbwI68_FYAYzOLKHwbxIJSX1RH_21MBF1nrxXOpHZlNsKkqvPRHh/exec?spreadsheetId=1RHD0AZGOCGNObH4W4CprLdv_IuX050-BuOqfO55Vcvw&sheet=estadisticas0800';
const xlabelsConsultas = [];
const ylabelsConsultas1 = [];
const ylabelsConsultas2 = [];
const ylabelsConsultas3 = [];
const ylabelsConsultas4 = [];
const ylabelsConsultas5 = [];
const ylabelsConsultas6 = [];


chartItConsultas();

async function chartItConsultas() {
  
  await getDataConsultas();

  const ctx = document.getElementById('chartCallCenterConsultas').getContext('2d');
  
  const lineTension = 0.4;
  const borderWidth = 2;
  const radius = 2;
  const pointStyle = 'circle';
  const fill = false;

  const myChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: xlabelsConsultas.reverse(),
        datasets: [
          {
            label: 'Síntomas',
            fill: fill,
            data: ylabelsConsultas1,
            borderWidth: borderWidth,
            radius: radius,
            pointStyle: pointStyle,
            borderColor: "rgba(160,160,160,1)",
            lineTension: lineTension
          },
          {
            label: 'Medidas',
            fill: fill,
            data: ylabelsConsultas2,
            borderWidth: borderWidth,
            radius: radius,
            pointStyle: pointStyle,
            borderColor: "rgba(150,72,230,1)",
            lineTension: lineTension
          },
          {
            label: 'Laborales',
            fill: fill,
            data: ylabelsConsultas3,
            borderWidth: borderWidth,
            radius: radius,
            pointStyle: pointStyle,
            borderColor: "rgba(255,0,0,1)",
            lineTension: lineTension
          },
          {
            label: 'Vacunación',
            fill: fill,
            data: ylabelsConsultas4,
            borderWidth: borderWidth,
            radius: radius,
            pointStyle: pointStyle,
            borderColor: "rgba(0,160,15,1)",
            lineTension: lineTension
          },
          {
            label: 'Otras',
            fill: fill,
            data: ylabelsConsultas5,
            borderWidth: borderWidth,
            radius: radius,
            pointStyle: pointStyle,
            borderColor: "rgba(165,165,105,1)",
            lineTension: lineTension
          },
          {
            label: 'Total',
            fill: fill,
            data: ylabelsConsultas6,
            borderWidth: borderWidth,
            radius: radius,
            pointStyle: pointStyle,
            borderColor: "rgba(29,172,230,1)",
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

async function getDataConsultas() {
  const response = await fetch(API_ESTADISTICAS);
  const data = await response.text();

  const datos = JSON.parse(data).reverse();

 //console.log(datos);  

  for (var i = 0; i < datos.length; i++) {
    
    const fecha = datos[i].fecha;
    xlabelsConsultas.push(fecha);
    
    const sintomas = datos[i].sintomas;
    ylabelsConsultas1.push(sintomas);
    
    const medidas = datos[i].medidas;
    ylabelsConsultas2.push(medidas);

    const laboral = datos[i].laboral;
    ylabelsConsultas3.push(laboral);
   
    const vacunacion = datos[i].vacunacion;
    ylabelsConsultas4.push(vacunacion);
   
    const otras = datos[i].otras;
    ylabelsConsultas5.push(otras);
    
    const total = datos[i].consultas;
    ylabelsConsultas6.push(total);

    //console.log(fecha, sintomas, medidas, laboral, vacunacion, otras);

  }
}
