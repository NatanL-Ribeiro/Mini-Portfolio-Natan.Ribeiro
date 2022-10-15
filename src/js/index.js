/*

    OBJETIVO: quando clicarmos na aba temos que mostrar o conteúdo da aba que foi clicada pelo usuário e esconder o conteúdo da outra aba 

    1. Dar um jeito de pegar os elementos que represetam as abas no HTML

    2. Dar um jeito de identificar o clique no elemento da aba

    3. Quando o usuário clicar, desmarcar a aba selecionada

    4. Marcar a aba clicada como selecionada

    5. Esconder o conteúdo da aba anterior

    6. Mostrar o conteúdo da aba clicada

 */

//1. Dar um jeito de pegar os elementos que represetam as abas no HTML
const abas = document.querySelectorAll(".aba");

abas.forEach(aba => {
    //2. Dar um jeito de identificar o clique no elemento da aba
    aba.addEventListener("click", function() {

        if(aba.classList.contains("selecionado")){
            return;
        }

     selecionarAba(aba)
     mostrarInformacoesDaAba(aba)
    
    });
});
function selecionarAba(aba){
    //3. Quando o usuário clicar, desmarcar a aba selecionada
    const abaSelecionada = document.querySelector(".aba.selecionado");
    abaSelecionada.classList.remove("selecionado")

    //4. Marcar a aba clicada como selecionada
    aba.classList.add("selecionado")
}

function mostrarInformacoesDaAba(aba){
    //5. Esconder o conteúdo da aba anterior
    const informacaoSelecionada = document.querySelector(".informacao.selecionado");
    informacaoSelecionada.classList.remove("selecionado"); 

    //6. Mostrar o conteúdo da aba clicada
    const idDoElementoDeInformacoesDaAba = `informacao-${aba.id}`

    const informacapASerMostrada = document.getElementById(idDoElementoDeInformacoesDaAba)
    informacapASerMostrada.classList.add("selecionado")
}