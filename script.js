function buscaCep(){
    let cep = document.getElementById("cep").value;
    let endereco = document.getElementById("endereco");
    let cepValido = cep.substr(0,5) + "-" + cep.substr(5)+".json";

    let cidade = document.getElementById("cidade");
    let estado = document.getElementById("estado");
    let bairro = document.getElementById("bairro");
    let logradouro = document.getElementById("logradouro");
    let país = document.getElementById("país");

    let url = "https://cdn.apicep.com/file/apicep/"+cepValido;

    fetch(url) 
        .then(res => res.json())
        .then(data =>{
            //endereco.innerHTML = data.city+"<br>"+data.state+"<br>"+
            //data.district+"<br>"+data.address+"<br>Brasil"

            cidade.value = data.city
            estado.value = data.state
            bairro.value = data.district
            logradouro.value = data.address
            país.value = "Brasil"

        })
    
}