let usuarioCargado = localStorage.getItem(`cargado`);
const cuerpo = document.getElementById("contenido");
const btningreso = document.getElementById("btnIng");
const btnsalir = document.getElementById("btnExit");
const nombreC = document.getElementById("nombreCargado");

let usuarioA = localStorage.getItem(`usuarioActual`);

// localStorage.setItem('cargado',usuarioCargado);

if(usuarioCargado){
    cuerpo.style.display="inline";
    btnsalir.style.display="inline"
    btningreso.style.display="none"
    nombreC.innerHTML=`<p>${usuarioA.toUpperCase()}</p>`;
}else{
}

const cerrarSesion = (event)=>{
    cuerpo.style.display="none";
    btnsalir.style.display="none"
    btningreso.style.display="inline"
    usuarioCargado = false;
    localStorage.setItem(`cargado`,usuarioCargado);
    nombreC.innerHTML=""
    usuarioA = "";
    localStorage.setItem(`usuarioActual`,usuarioA);
}

const logearse = ()=>{
    window.location.href="/pages/login.html";
}