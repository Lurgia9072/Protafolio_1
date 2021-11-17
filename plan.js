
const $form=document.querySelector("#form"),$buttonMailto=document.querySelector("#trucazo");function hanleSubmit(t){t.preventDefault();const e=new FormData(this);console.log(e.get("name")),$buttonMailto.setAttribute("href",`mailto:eruraipa@gmail.com?subject= Nombre: ${e.get("name")}  Correo :${e.get("email")}&body=${e.get("message")}`),$buttonMailto.click()}$form.addEventListener("submit",hanleSubmit);






