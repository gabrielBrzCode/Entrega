// PRIMER RETO : SEMANA 1 
/*
    Lista de nombres
    Escribe un programa que le pida al usuario 3 nombres, los almacene en un arreglo de datos y luego los muestre, si el nombre está repetido, no debe guardarlo.
*/ 

// Leer el evento del fomr en html
document.querySelector(".form-Names").addEventListener('submit', (e) =>{

  e.preventDefault();

  // Guardar valor de los inputs en un arreglo
  const nameArray = document.getElementsByClassName("name");
  // Arreglo donde se guardaran
  // El new Set asegura que no hayan duplicados
  const names = new Set();

  for(let i=0; i<nameArray.length;i++){
      // Extrae el valor que se encuentre en esa posicion del arreglo
      // El .trim() Elimina espacios en blanco
      const name = nameArray[i].value.trim().toLowerCase();
      // Validar que no este en blanco
      if(name){
          names.add(name);
      }
  }

  //  Lugar donde se muestran
  const nameResult = document.querySelector(".nameBox");
  // Limpiar el contenido ante
  nameResult.innerHTML = "";
 
  names.forEach(name =>{
    // Hacer que se vean con mayuscula inicial
    const capitalizeName = name.charAt(0).toUpperCase() + name.slice(1);
    nameResult.innerHTML += `<p>${capitalizeName}</p>`;
})
const btnDelete = document.getElementById("btn-Delete");


btnDelete.getElementById("click", function () {
  nameResult.value = "";
});


  })