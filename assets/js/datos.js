const API = 'https://script.google.com/macros/s/AKfycbwI68_FYAYzOLKHwbxIJSX1RH_21MBF1nrxXOpHZlNsKkqvPRHh/exec?spreadsheetId=1RHD0AZGOCGNObH4W4CprLdv_IuX050-BuOqfO55Vcvw&sheet=datos';

// const actualizado = '0';
// console.log(actualizado);

async function getInformeCasos(page = '') {
  const response = await fetch(API)
  const json = await response.text();
  const data = JSON.parse(json)
  
  const actualizado = data[0].actualizado
  const rc_activos = data[0].rc_activos
  const rc_altas = data[0].rc_altas
  const rc_fallecidos = data[0].rc_fallecidos
  const rc_confirmados_total = data[0].rc_confirmados_total
  const cba_altas = data[0].cba_altas
  const cba_activos_domicilio = data[0].cba_activos_domicilio
  const cba_activos_internados = data[0].cba_activos_internados
  const cba_activos = data[0].cba_activos
  const cba_fallecidos = data[0].cba_fallecidos
  const cba_confirmados_total = data[0].cba_confirmados_total
  const cba_descartados = data[0].cba_descartados
  const cba_estudio = data[0].cba_estudio
  const cba_casos_total = data[0].cba_casos_total

  //document.getElementById('rc_activos').innerHTML = rc_activos
  
  document.getElementById("IC_rc_confirmados_total").innerHTML = rc_confirmados_total
  document.getElementById("IC_rc_altas").innerHTML = rc_altas
  document.getElementById("IC_rc_fallecidos").innerHTML = rc_fallecidos
  document.getElementById("IC_rc_activos").innerHTML = rc_activos
  document.getElementById("IC_cba_confirmados_total").innerHTML = cba_confirmados_total
  document.getElementById("IC_cba_fallecidos").innerHTML = cba_fallecidos
  
  if(page == 'estadisticas') {    
    document.getElementById("IC_actualizado").innerHTML = actualizado
    document.getElementById("IC_cba_altas").innerHTML = cba_altas
    document.getElementById("IC_cba_activos_domicilio").innerHTML = cba_activos_domicilio
    document.getElementById("IC_cba_activos_internados").innerHTML = cba_activos_internados
    document.getElementById("IC_cba_activos").innerHTML = cba_activos
    document.getElementById("IC_cba_descartados").innerHTML = cba_descartados
    document.getElementById("IC_cba_estudio").innerHTML = cba_estudio
    document.getElementById("IC_cba_casos_total").innerHTML = cba_casos_total    
  }

  // console.log(
  //   actualizado,
  //   rc_activos,
  //   rc_altas,
  //   rc_fallecidos,
  //   rc_confirmados_total,
  //   cba_altas,
  //   cba_activos_domicilio,
  //   cba_activos_internados,
  //   cba_activos,
  //   cba_fallecidos,
  //   cba_confirmados_total,
  //   cba_confirmados_total,
  //   cba_descartados,
  //   cba_casos_total
  // );
  
}