
const menu = document.getElementById("menu"); //pegando o elemento pelo id

// estamos pegando o elemento de forma generica pode ser classe (precisa trazer o ponto) po
const navMenu = document.querySelector(".navegacao")
menu.addEventListener("click", function() {
if(navMenu.className == "navegacao") {
    navMenu.className = "navegacao ativo";
}
        else {
            navMenu.className = "navegacao"
    }
}
)
