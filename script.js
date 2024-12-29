const form = document.querySelector(".formulario-conosco")
const Maskara = document.querySelector(".Maskara-fundo")


function cliqueiNoBotão(){
    form.style.left="40%"
    form.style.transform ="translateX(-50%);"
    Maskara.style.visibility = "visible"
}

function esconderform(){
    form.style.left ="-290px"
    form.style.transform ="translateX(0)"
    Maskara.style.visibility = "hidden"
    
}