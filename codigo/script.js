function verificar() {
    var nascimento = document.getElementById("data").value
    var dataNascimento = new Date(nascimento)
    var anoNascimento = dataNascimento.getFullYear()
    var mesNascimento = dataNascimento.getMonth()
    var diaNascimento = dataNascimento.getDate()
    var hoje = new Date()
    var anoAtual = hoje.getFullYear()
    var mesAtual = hoje.getMonth()
    var diaAtual = hoje.getDate()
    var idade = anoAtual - anoNascimento

    if (mesAtual < mesNascimento || (mesAtual === mesNascimento && diaAtual < diaNascimento)) {
        idade--;
    }

    if (nascimento.length === 0) {
        document.getElementById("imagem-img").src = "imagens/erro/evil-clone-stan.png";
        document.getElementById("resultado").innerText = "[ERRO] Por favor, preencha sua data de nascimento!";
        return;
    }

    var amor = document.getElementsByName("sexo")
    var genero = ''
    var imagemAleatoria = Math.floor(Math.random() * 6)
    document.getElementById("resultado").innerText = `Sua idade é ${idade} anos!`

    if (amor[0].checked){
        genero = 'Masculino'
        if (idade <= 0) {
            document.getElementById("imagem-img").src = "imagens/coco/mr-hankey.png"
            document.getElementById("resultado").innerText = "Você ainda não nasceu!"
        }else if (idade < 4){
                document.getElementById("imagem-img").src = `imagens/bebes/masculino/${imagemAleatoria}.png`
        }else if (idade < 12){
                document.getElementById("imagem-img").src = `imagens/criancas/masculino/${imagemAleatoria}.png`
        }else if (idade < 18){
                document.getElementById("imagem-img").src = `imagens/jovens/masculino/${imagemAleatoria}.png`
        }else if (idade < 50){
                document.getElementById("imagem-img").src = `imagens/adultos/masculino/${imagemAleatoria}.png`
        }else {
                document.getElementById("imagem-img").src = `imagens/velhos/masculino/${imagemAleatoria}.png`
        }   
    }
    else if (amor[1].checked){
        genero = 'Feminino'
        if (idade <= 0){
            document.getElementById("imagem-img").src = "imagens/coco/mr-hankey.png"
            document.getElementById("resultado").innerText = "Você ainda não nasceu!"
        }else if (idade < 4){
                document.getElementById("imagem-img").src = `imagens/bebes/feminino/${imagemAleatoria}.png`
        }else if (idade < 12){
                document.getElementById("imagem-img").src = `imagens/criancas/feminino/${imagemAleatoria}.png`
        }else if (idade < 18){
                document.getElementById("imagem-img").src = `imagens/jovens/feminino/${imagemAleatoria}.png`
        }else if (idade < 50){
                document.getElementById("imagem-img").src = `imagens/adultos/feminino/${imagemAleatoria}.png`
        }else {
                document.getElementById("imagem-img").src = `imagens/velhos/feminino/${imagemAleatoria}.png`
        } 
    } 
}