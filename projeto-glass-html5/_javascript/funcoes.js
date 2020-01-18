/*A necessidade de usar um arquivo JavaScript por separado, é quando pensamos em fazer várias funções JS, utilizando um arquivo à parte evita do arquivo em HTML ficar extenso demais.*/

function mudaFoto(foto) {
    var avaliador = ['', undefined, null, 0, '0', false];
    /*Criei um array com os possíveis valores opostos do que eu queria*/
    //  if (avaliador.includes(foto)) {/*Avaliei meu array com o parâmetro dado ao chamar este método.*/
    //      document.getElementById('icone').src = "_imagens/glass-oculos-preto-peq.png";
    //      return;
    /*Caso haja o mesmo valor definidos no array igual ao parâmetro, retorno o ícone para a imagem do óculos*/
    //  }
    /*Do contrário, altere o ícone ao seu respectivo menu.*/
    //   document.getElementById('icone').src = foto;

    // Usando o condicional Switch.
    switch (foto) {
        case 'home':
            document.getElementById('icone').src = "_imagens/home.png";
            break;
        case 'specs':
            document.getElementById('icone').src = "_imagens/especificacoes.png";
            break;
        case 'fotos':
            document.getElementById('icone').src = "_imagens/fotos.png";
            break;
        case 'multi':
            document.getElementById('icone').src = "_imagens/multimidia.png";
            break;
        case 'contato':
            document.getElementById('icone').src = "_imagens/contato.png";
            break;
        case 'oculos':
            document.getElementById('icone').src = "_imagens/glass-oculos-preto-peq.png";
            break;
        default:
            //Caso nenhuma dessas alternativas forem válidas, o default irá ser executado.
            document.write("Error")
            break;
    }
}