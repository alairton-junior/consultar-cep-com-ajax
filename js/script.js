var inputElement = document.querySelector('#cep')

function preencherDados(dados) {

        document.getElementById('city').value=(dados.localidade)
        document.getElementById('uf').value=(dados.uf)
}



function validarCep(){

    var txt = inputElement.value
    var num = txt.split('')
    console.log(num)
    var t = num.indexOf('-')
    var p = num.indexOf('.')
    if(t != '-1'){
        num.splice(t, 1)
    }
    if(p != '-1'){
        num.splice(p, 1)
    }
    var res = num.join('')
    console.log(res)
    buscarCep(res)

}


function buscarCep(valor){
    
    var cep = valor

    var link = document.createElement('script');

    link.src = 'https://viacep.com.br/ws/'+ cep + '/json/?callback=preencherDados'

    document.body.appendChild(link)
}