function calcula_imc() {
	return this.peso / (this.altura ** 2);
}

function extrai_paciente(paciente_tr, ix) {

	return {'peso': paciente_tr.getElementsByClassName("info-peso")[0].textContent,
            'altura': paciente_tr.getElementsByClassName("info-altura")[0].textContent,
            'atualiza_imc': atualiza_imc,
            'calcula_imc': calcula_imc,
            'ix': ix};
}

function atualiza_imc() {
	document.getElementById("imc-" + (this.ix + 1)).textContent = this.calcula_imc();
}

function atualiza_imcs() {
	var pacientes = document.getElementsByClassName("paciente");

	[].forEach.call(pacientes, function(tr, ix){extrai_paciente(tr, ix).atualiza_imc()});
}

var botaoImc = document.getElementById("calcula-imcs");
botaoImc.addEventListener("click", atualiza_imcs);
botaoImc.addEventListener("click", function() {console.log("oi");});

var trs = document.getElementsByTagName("tr");

[].forEach.call(trs, function(tr){
	tr.addEventListener("mouseover", function() {
		this.setAttribute("bgcolor", "grey");
	});
	tr.addEventListener("mouseout", function() {
		this.setAttribute("bgcolor", "white");
	});
});

var botaoAdd = document.getElementById("adicionar-paciente");
botaoAdd.addEventListener("click", function(event) {
	event.preventDefault();

	var nome = document.getElementById("campo-nome");
	var peso = document.getElementById("campo-peso");
	var altura = document.getElementById("campo-altura");

	var tabela = document.getElementById("tabela-pacientes");
	var nPacientes = document.getElementsByClassName("paciente").length;
	tabela.innerHTML = tabela.innerHTML + "<tr class='paciente'><td class='info-nome'>"+nome.value+"</td><td class='info-peso'>"+peso.value+"</td><td class='info-altura'>"+altura.value+"</td><td class='info-imc' id='imc-"+(nPacientes+1)+"'></td></tr>";

	nome.value = "";
	peso.value = "";
	altura.value = "";
});