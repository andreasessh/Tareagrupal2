function showAlertSuccess() {
  document.getElementById("alert-success").classList.add("show");
}

function showAlertError() {
  document.getElementById("alert-danger").classList.add("show");
}
document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("formulario").addEventListener('submit', validarFormulario); 
});

var nombre = document.getElementById('nombre');
var apellido = document.getElementById('apellido');
var email = document.getElementById('email');
var password1 = document.getElementById('password1');
var password2 = document.getElementById('password2');
var isChecked = document.getElementById('terminos');

function validarFormulario(e){
  e.preventDefault();
  if(nombre.value !=='' && apellido.value !=='' && email.value !=='' && isChecked.checked && password1.value !=='' && password2.value !=='' && password1.value.length>=6 && password1.value == password2.value){
      showAlertSuccess();
  }else{
      showAlertError();
  }
}

// function validarFormulario(evento) {
//   evento.preventDefault();
//   var nombre = document.getElementById('nombre').value;
//   if(nombre.length == 0) {
//       showAlertError();
//     return;
//   }
//   var apellido = document.getElementById('apellido').value;
//   if(apellido.length == 0) {
//       showAlertError();
//     return;
//   }
//   var email = document.getElementById('email').value;
//   if(email.length == 0) {
//       showAlertError();
//     return;
//   }
//   var password1 = document.getElementById('password1').value;
//   if(password1.length == 0) {
//       showAlertError();
//     return;
//   }


//   var clave = document.getElementById('password1').value;
//   if (clave.length < 6) {
//     showAlertError();
//     return;

//   }
//   var password2 = document.getElementById('password2').value;
//   if(password2 !==password1){
      
//       showAlertError();
//     return;
//   } 
//   var isChecked = document.getElementById('terminos').checked;
// if(!isChecked){
//   showAlertError();
//   return;
// }
//   showAlertSuccess();
//   this.submit();
// }