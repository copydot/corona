const API = 'https://script.google.com/macros/s/AKfycbwI68_FYAYzOLKHwbxIJSX1RH_21MBF1nrxXOpHZlNsKkqvPRHh/exec?spreadsheetId=1RHD0AZGOCGNObH4W4CprLdv_IuX050-BuOqfO55Vcvw&sheet=atencion0800';
const xlabels = [];
const ylabels1 = [];
const ylabels2 = [];

chartIt();

async function chartIt() {
  
  await getData();

  const ctx = document.getElementById('chartCallCenter').getContext('2d');
  const myChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: xlabels.reverse(),
        datasets: [
          {
            label: 'Total de llamados',
            fill: false,
            data: ylabels1,
            borderWidth: 3,
            borderColor: "rgba(29,172,230,1)",
            lineTension: 0.4
          },
          {
            label: 'Subtotal de llamados',
            fill: false,
            data: ylabels2,
            borderWidth: 3,
            borderColor: "rgba(29,72,230,1)",
            lineTension: 0.4
          }
        ]
      }
  });
}

async function getData() {
  const response = await fetch(API);
  const data = await response.text();
  const date = [];
  const total = [];
  const subtotal = [];

  const datos = JSON.parse(data).reverse();

  //console.log(datos);  

  for (var i = 0; i < 7; i++) {
    
    const date = datos[i].fecha;
    xlabels.push(date);

    const total = datos[i].total;
    ylabels1.push(total);

    const subtotal = datos[i].subtotal;
    ylabels2.push(subtotal);

    console.log(date, total, subtotal);

  }
}
