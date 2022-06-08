function esconde(){
  var menu = document.getElementById("menulateral")
  if (menu.classList.contains("escondido")){
    menu.classList.remove("escondido")
  } else{
    menu.classList.add("escondido")
  }
}