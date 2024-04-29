class Usuario{
    constructor(id,apeyNomU,documento,user,pass){
        this.id=id;
        this.apeyNomU=apeyNomU;
        this.documento=documento;
        this.user=user;
        this.pass=pass;
    }
}

//declaracion del arreglo usuarios
const usuarios =JSON.parse(localStorage.getItem(`usuarios`)) || [];

//enlace al inicio con el nombre del consultorio
// let titulo = document.querySelector("#titulo");
// titulo.addEventListener("click",()=>{location.href="/index.html"});

//funcionalidades del modal
let abrirModal=document.getElementById("modalRegistro");
let modal = document.getElementById("ventanaModal");
let cerrarM = document.getElementById("btnCerrar");

abrirModal.addEventListener("click",()=>{
    modal.style.display='block';
})

cerrarM.addEventListener("click",()=>{
    limpiar();
    modal.style.display='none';
})


//probar un boton para salir de la sesion
const clave = 12345;


//ingreso de un nuevo usuario
const agregarUsuario= (event)=>{
    let apn = document.getElementById("apeynomb").value;
    let doc = document.getElementById("docum").value;
    let nick = document.getElementById("usuario").value;
    let passw = document.getElementById("contra").value;

    if(apn==="" || doc==0 || nick === "" || passw ===""){
        alert("Faltan campos por completar");
    }else{
        let conf = confirm("¿Desea registrar usuario?");
        if(conf){
            let autent = prompt("ingrese la clave de administrador");
            if(autent == clave){
                usuarios.push(new Usuario(new Date().getTime(),apn,doc,nick,passw))
                alert("ingreso exitoso");
                limpiar();
                localStorage.setItem('usuarios', JSON.stringify(usuarios));  
            }else{alert("clave incorrecta");}
            
        }else{
            alert("operacion cancelada");
        }
    }
}

const limpiar = ()=>{
    document.getElementById("userU").value="";
    document.getElementById("passU").value="";
    document.getElementById("apeynomb").value="";
    document.getElementById("docum").value="";
    document.getElementById("contra").value="";  
    document.getElementById("usuario").value="";
}

//ingreso con cuenta existente

let usuarioIn = document.getElementById("userU");
let contraIn = document.getElementById("passU");
let contenidoI =document.getElementById("contenido");

const ingresar = (evt)=>{
    let encontrado = usuarios.findIndex((usuario)=>{
        return usuario.user  === usuarioIn.value;
    })
    if(encontrado > -1){
       
        if(usuarios[encontrado].pass === contraIn.value){
            alert(usuarios[encontrado].apeyNomU.toUpperCase() +" se ha conectado".toUpperCase());
            let usuarioCargado = localStorage.getItem(`cargado`);
            usuarioCargado = true;
            localStorage.setItem(`cargado`,JSON.stringify(usuarioCargado));
            let nombreUsuarioC = usuarios[encontrado].apeyNomU;
            localStorage.setItem(`usuarioActual`,nombreUsuarioC);
            limpiar();
            volverInicio();
        }else{
            alert("constraseña invalida");
        }
    }else{
       alert("no se encontro el usuario");
    }
}

const volverInicio = ()=>{
    window.location.href="/index.html";
}
// const botonRegistro = document.getElementById("btnReg");

// botonRegistro.addEventListener("click",agregarUsuario);
