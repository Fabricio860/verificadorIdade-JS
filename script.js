function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if(fano.value.length == 0 || fano.value > ano){ //fano.value.length == 0  se não digitou o ano || se o ano é maior que o atual
        window.alert('[Erro] Verifique os dados e tente novamente!')
    }else{
       var fsex = document.getElementsByName('radsex')
       var idade = ano - Number(fano.value)
      // res.innerHTML = `Idade calculada: ${idade}` testando o funcionamento
      var genero = ''

      var img = document.createElement('img') // Criando uma tag img no JS
      img.setAttribute('id','foto') // Criei um id="foto" em Js, inves no HTML

      if(fsex[0].checked){
        genero = 'Homem'
        if(idade>=0 && idade < 10){
            //criança
        img.setAttribute('src', 'Imagens/bebe-homen.jpg')
        }else if(idade < 21){
            //jovem
            img.setAttribute('src', 'Imagens/homem-jovem.jpg') 
        }else if(idade < 50){
            //Adulto
            img.setAttribute('src', 'Imagens/homem-adulto.jpg')
        }
        else{
            //idoso
            img.setAttribute('src', 'Imagens/homem-idoso.jpg')
        }
   
      } else if(fsex[1].checked){
        genero = 'Mulher'
        if(idade>=0 && idade < 10){
            //criança
        img.setAttribute('src', 'Imagens/bebe-mulher.jpg')
        }else if(idade < 21){
            //jovem
            img.setAttribute('src', 'Imagens/mulher-jovem.jpg') 
        }else if(idade < 50){
            //Adulto
            img.setAttribute('src', 'Imagens/mulher-adulta.jpg')
        }
        else{
            //idoso
            img.setAttribute('src', 'Imagens/mulher-idosa.jpg')
        }
      }
      res.style.textAlign = 'center' //stilizando pelo JS
      res.innerHTML = `Detectamos ${genero} com a idade: ${idade} ano`      
      res.appendChild(img)   //Mostrando as imagens       
    }
}
