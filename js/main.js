//const { type, get } = require("jquery")

function consultaCep() {
    let cep = document.getElementById("cep").value
    let url = "https://viacep.com.br/ws/" + cep + "/json/"
    $.ajax({
        url: url,
        type: "GET",
        success: function(response) {
            console.log(response)
            //document.getElementById("logradouro").innerHTML = response.logradouro
            //$("#bairro").html(response.bairro)
        }
    })
}