const btn = document.querySelector(".btn");
const formEditor = document.getElementById("form-editor");

formEditor.addEventListener('change', pegouMudanca);

const funcoes = {
    
    text(valor){
        btn.innerText = valor;
    },

    color(valor){
        btn.style.color = valor;
    },
    color(valor){
        btn.style.color = valor;
    },
    bgColor(valor){
        btn.style.backgroundColor = valor;
    },
    height(valor){
        btn.style.height = valor + 'px';
    },
    width(valor){
        btn.style.width = valor + 'px';
    },
    border(valor){
        btn.style.border = valor;
    },
    borderRadius(valor){
        btn.style.borderRadius = valor + 'px';
    },
    font(valor){
        btn.style.fontFamily = valor;
    },
    fontSize(valor){
        btn.style.fontSize = valor + 'px';
    },

};

function pegouMudanca(event) {
    const valor = event.target.value;
    const name = event.target.name;
    funcoes[name](valor);
    guardarInformacoes(name, valor);
};

function guardarInformacoes(name, valor) {
    localStorage[name] = valor;
}

colocarCss();

function colocarCss() {
    const variaveisLocal = Object.keys(localStorage);

    variaveisLocal.forEach(function(variavelAtual){
        funcoes[variavelAtual](localStorage[variavelAtual])
    })
};