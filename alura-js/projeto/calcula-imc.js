var tdPeso = document.getElementById("peso-2");
var tdAltura = document.getElementById("altura-2");

var paciente = {"peso": tdPeso.textContent, "altura": tdAltura.textContent};

var imc = paciente.peso / (paciente.altura * paciente.altura);

var tdImc = document.getElementById("imc-2");

tdImc.textContent = imc;