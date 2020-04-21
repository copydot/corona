const API_CASOS = 'https://script.google.com/macros/s/AKfycbwI68_FYAYzOLKHwbxIJSX1RH_21MBF1nrxXOpHZlNsKkqvPRHh/exec?spreadsheetId=1RHD0AZGOCGNObH4W4CprLdv_IuX050-BuOqfO55Vcvw&sheet=casos';

//console.log(actualizado);

getCasos();

async function getCasos() {
  const response = await fetch(API_CASOS)
  const json = await response.text();
  const data = JSON.parse(json)
  
  const actualizado = data[0].actualizado
  const positivos = data[0].positivos
  const recuperados = data[0].recuperados
  const muertes = data[0].muertes
  const positivos_cba = data[0].positivos_cba
  const muertes_cba = data[0].muertes_cba

  document.getElementById('positivos').innerHTML = positivos
  document.getElementById('recuperados').innerHTML = recuperados
  document.getElementById('muertes').innerHTML = muertes
  document.getElementById('positivos_cba').innerHTML = positivos_cba
  document.getElementById('muertes_cba').innerHTML = muertes_cba
  //console.log(actualizado);
  
}