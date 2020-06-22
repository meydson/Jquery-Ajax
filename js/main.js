//const { type, get } = require("jquery")

function consultaCep() {
    $(".barra-progresso").show()
    let cep = document.getElementById("cep").value
    let url = "https://viacep.com.br/ws/" + cep + "/json/"
    $.ajax({
        url: url,
        type: "GET",
        success: function(response) {
            console.log(response)
            //document.getElementById("logradouro").innerHTML = response.logradouro
            //$("#bairro").html(response.bairro)
            $("#logradouro").html(response.logradouro)
            $("#bairro").html(response.bairro)
            $("#localidade").html(response.localidade)
            $("#uf").html(response.uf)
            $("#titulo_cep").html("CEP: " + response.cep)
            $(".cep").show()
            $(".barra-progresso").hide()
        }
    })
}

$(() => {
    $(".cep").hide()
    $(".barra-progresso").hide()
})