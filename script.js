// @ts-nocheck
let textoInput = document.getElementById('textoInput');
let loremIpsumContainer = document.getElementById('loremIpsumContainer');
let botaoCriptografar = document.getElementById('botaoCriptografar');
let botaoDescriptografar = document.getElementById('botaoDescriptografar');

escondeBotao();

botaoCriptografar.addEventListener('click', function () {
    mostraBotao();
    criptografa();
});

botaoDescriptografar.addEventListener('click', function () {
    mostraBotao();
    descriptografa();
});

let mapCriptografia = {
    'a': 'lorem',
    'b': 'ipsum',
    'c': 'dolor',
    'd': 'sit',
    'e': 'amet',
    'f': 'consectetur',
    'g': 'adipiscing',
    'h': 'elit',
    'i': 'sed',
    'j': 'do',
    'k': 'eiusmod',
    'l': 'tempor',
    'm': 'incididunt',
    'n': 'ut',
    'o': 'labore',
    'p': 'et',
    'q': 'dolore',
    'r': 'magna',
    's': 'aliqua',
    't': 'ullamco ',
    'u': 'enim',
    'v': 'minim',
    'w': 'veniam',
    'x': 'quis',
    'y': 'nostrud',
    'z': 'exercitation'
};

let mapDescriptografia = {
    'lorem': 'a',
    'ipsum': 'b',
    'dolor': 'c',
    'sit': 'd',
    'amet': 'e',
    'consectetur': 'f',
    'adipiscing': 'g',
    'elit': 'h',
    'sed': 'i',
    'do': 'j',
    'eiusmod': 'k',
    'tempor': 'l',
    'incididunt': 'm',
    'ut': 'n',
    'labore': 'o',
    'et': 'p',
    'dolore': 'q',
    'magna': 'r',
    'aliqua': 's',
    'ullamco': 't',
    'enim': 'u',
    'minim': 'v',
    'veniam': 'w',
    'quis': 'x',
    'nostrud': 'y',
    'exercitation': 'z'
}

function criptografa() {
    let texto = textoInput.value.trim();
    if (texto) {
        let textoCriptografado = '';
        for (let i = 0; i < texto.length; i++) {
            let caracteres = texto[i];
            if (mapCriptografia[caracteres]) {
                textoCriptografado += mapCriptografia[caracteres] + ' ';
            } else {
                textoCriptografado += caracteres + ' ';
            }
        }
        loremIpsumContainer.innerText = textoCriptografado;
        loremIpsumContainer.style.display = 'block';
    }

    document.getElementById('imagemGarotoLupaTexto').style.display = 'none';
    document.getElementById('loremIpsumContainer').style.display = 'block';
    document.getElementById('botaoCopiar').style.display = 'block';
}

function descriptografa() {
    let textoCriptografado = textoInput.value.trim();
    if (textoCriptografado) {
        let texto = '';
        let palavras = textoCriptografado.trim().split(' ');
        for (let i = 0; i < palavras.length; i++) {
            let palavra = palavras[i];
            if (mapDescriptografia[palavra]) {
                texto += mapDescriptografia[palavra];
            } else {
                texto += palavra;
            }
        }
        loremIpsumContainer.innerText = texto;
    }

    document.getElementById('imagemGarotoLupaTexto').style.display = 'none';
    document.getElementById('loremIpsumContainer').style.display = 'block';
    document.getElementById('botaoCopiar').style.display = 'block';
}

function escondeBotao() {
    document.getElementById('botaoCopiar').style.display = 'none';
}

function mostraBotao() {
    document.getElementById('botaoCopiar').style.display = 'block';
}
