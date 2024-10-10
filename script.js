// "use strict";
// //ajout de l'evènement onclick sur le butoon
// let tache = document.getElementById("idput");

// function myButton(envent) {
//     event.preventDefault();
//     let valeur= idput.value;
//     if (valeur != "") {
//         let nouElm= document.createElement('li');
//         nouElm.innerHTML = valeur;
//         document.getElementById("maList").appendChild(nouElm);
//         idput.value= "";
//     }
   
// }


let addToDobutton = document.getElementById("addToDo");
let toDoContainer = document.getElementById('toDoContainer');
let inputField= document.getElementById('inputField');
addToDobutton.onclick= function () {
   //verifier si input n'est pas vide
   if (inputField.value != "") {
        var paragraph = document.createElement('p');
   }
   // valorisé ce paragraph avec le contenu de l'input
   paragraph.innerText = inputField.value;
   // styliser le paragraph
   paragraph.classList.add('paragraph_style')
   // inserer le paragraph dans le toDoContainer
   toDoContainer.appendChild(paragraph)
   // vidé input quand le paragph est ajouter
   inputField.value = "";
  // barré le paragraph quand on va cliquer la dessus
  paragraph.addEventListener('click', function(){
    paragraph.classList.add('paragraph_click');
  })
  //supprimer la tâche quand on double clique sur la tache
  paragraph.addEventListener('dblclick', function(){
    toDoContainer.removeChild(paragraph);
  })
}