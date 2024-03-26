function convertKMToLightYears() {
    var valorElemento = document.getElementById("kmToLightYearsInput");
    var valor = valorElemento.value;
    var valorEmKm = parseFloat(valor);
  
    var valorEmAnosLuz = valorEmKm / 9.461e12;
    console.log(valorEmAnosLuz);
  
    var dataMedicao = new Date().toLocaleString(); 
    insertTableRow(dataMedicao, valorEmKm, valorEmAnosLuz);
  }
  
  function convertLightYearsToKM() {
    var valorElemento = document.getElementById("lightYearsToKMInput");
    var valor = valorElemento.value;
    var valorEmAnosLuz = parseFloat(valor);
  
    var valorEmKm = valorEmAnosLuz * 9.461e12; 
  
    var dataMedicao = new Date().toLocaleString(); 
    insertTableRow(dataMedicao, valorEmKm, valorEmAnosLuz);
  }
  
  function insertTableRow(dataMedicao, valorEmKm, valorEmAnosLuz) {
    var tableBody = document.querySelector("#conversionTable tbody");
    var newRow = tableBody.insertRow(-1); 
  
    var cellDataMedicao = newRow.insertCell(0);
    var cellValorEmKm = newRow.insertCell(1);
    var cellValorEmAnosLuz = newRow.insertCell(2);
  
    cellDataMedicao.textContent = dataMedicao;
    cellValorEmKm.textContent = valorEmKm.toFixed(4); 
    cellValorEmAnosLuz.textContent = valorEmAnosLuz.toFixed(4); 
  }