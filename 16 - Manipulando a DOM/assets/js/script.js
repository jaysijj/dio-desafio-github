function changeClasse(){
    texto.innerHTML = "Light Mode ON"
    texto.classList.toggle("light-mode")

    botão.innerHTML = "LIGHT mode"
    botão.classList.toggle("light-mode")

    rodapé.classList.toggle("light-mode")
    corpo.classList.toggle("light-mode")

    if(botão.classList.contains("light-mode")){
        texto.innerHTML = "Light Mode ON"
        botão.innerHTML = "DARK mode"
    }else{
        texto.innerHTML = "Dark Mode ON"
        botão.innerHTML = "LIGHT Mode"
    }
}


const texto = document.getElementsByTagName('h1')[0]
const botão = document.getElementById("bd")
const rodapé = document.getElementsByTagName('footer')[0]
const corpo = document.getElementsByTagName("body")[0]

