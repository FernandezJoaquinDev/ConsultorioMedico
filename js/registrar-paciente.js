class Paciente{
    constructor(id, apeynom,edad,obrasocial,telefono,dni,direccion,historial=""){
        this.id=id;
        this.apeynom=apeynom;
        this.edad=edad;
        this.obrasocial=obrasocial;
        this.telefono=telefono;
        this.dni=dni;
        this.direccion=direccion;
        this.historial=historial;
        
    }
}

// const modalPac =  new  Modal(document.getElementById('modalPac'))

let pacientes = JSON.parse(localStorage.getItem(`pacientes`)) || [];

const agregarPacientes = (event) =>{
    event.preventDefault();
    let nom = document.getElementById("apeynom").value;
    let ed = document.querySelector("#edad").value;
    let obs = document.getElementById("obraSoc").value;
    let tel = document.getElementById("tel").value;
    let docu = document.getElementById("dni").value;
    let direc = document.getElementById("direc").value;
    let area = document.getElementById("historia").value;
    // alert(nom);
    if(nom!="" && ed!=0 && obs!="" && tel!=0 && direc!="" && docu>=1){

        pacientes.push(new Paciente(new Date().getTime(), nom, ed, obs, tel,docu, direc,area));
        alert("Paciente Registrado");
        document.getElementById("apeynom").value="";
        document.getElementById("edad").value="";
        document.getElementById("obraSoc").value="";
        document.getElementById("tel").value="";
        document.getElementById("direc").value="";
        document.getElementById("historia").value="";
        docu = document.getElementById("dni").value="";
    }else{
        alert("faltan campos por rellenar");
    }

    localStorage.setItem(`pacientes`,JSON.stringify(pacientes));
}


// const abrirmdlPacientes = (event)=>{
//     ventanaMdlPacientes.style.display = "inline";
//     listarPacientes();
// }
// const cerrarMdl = ()=>{
//     ventanaMdlPac.style.display = "none";
// }

// let ventanaMdlPacientes = document.getElementById("ventanaMdlPac")
// let abrirMPac = document.getElementById("openModalPac");
const contenedorT=document.getElementById("contenedorPacientes");


//Crear la funcion listar pacientes (con modal)
const listarPacientes = (event) =>{
    //  event.preventDefault();
     contenedorT.innerHTML='';
    pacientes=JSON.parse(localStorage.getItem(`pacientes`))
    pacientes.map((item)=>{
        let columna = document.createElement("div");
        columna.classList="col-12";
        let tarjeta = `<div class="card" style="width: 18rem;">
        <div class="card-body d-flex flex-column">
          <h5 class="card-title">${item.apeynom}</h5>
          <span>Años: ${item.edad}</span>
          <span>Direccion: ${item.direccion}</span>
          <span>Tel: ${item.telefono}</span>
          <span>DNI: ${item.dni}</span>
          <span>Obra Social: ${item.obrasocial}</span>
          </div>
          <button type="button" class="btn btn-danger" onclick="eliminarPacientes(${item.id})">X</button>
          </div>`;

          
          columna.innerHTML=tarjeta;
          contenedorT.append(columna)
        })
}

//Crear la funcion eliminar pacientes
 const eliminarPacientes = (id) =>{
  pacientes=JSON.parse(localStorage.getItem(`pacientes`))

let pacientesN=pacientes.filter((paciente)=>{
 return paciente.id!==id;
})
  
let indice = pacientes.findIndex((item)=>{
   return item.id==id;
  })

  let validar = confirm(`desea eliminar al paciente ${pacientes[indice].apeynom}?`);

  if(validar){
   pacientes = [...pacientesN]; //spread operator
   localStorage.setItem('pacientes', JSON.stringify(pacientes));
    alert("Paciente Eliminado")
 }else{
    alert("Se Cancelo La Operacion")
 }


 }
//Crear la funcion Modificar pacientes
//Crear la funcion Buscar pacientes (con filter)

let encontrado;
const buscarPaciente = () =>{
    event.preventDefault();
  let docuP=document.getElementById("docu").value
   encontrado = pacientes.findIndex((item)=>{
        return item.dni==docuP;
    })
    console.log(encontrado)
     if(encontrado>-1){
         let contenido = document.getElementById("contenedorBuscar");
         contenido.innerHTML=""
         let infoPac = `<form> 
         <div class="form-group row">
         <label for="apeynom" class="col-sm-2 col-form-label">Nombre:</label>
         <div class="col-sm-10">
         <input type="text" class="form-control" id="nomMod" value="${pacientes[encontrado].apeynom}">
         </div>
         <label for="apeynom" class="col-sm-2 col-form-label">edad:</label>
         <div class="col-sm-10">
         <input type="text" class="form-control" id="edadMod" value="${pacientes[encontrado].edad}">
         </div>
         <label for="apeynom" class="col-sm-2 col-form-label">O.S:</label>
         <div class="col-sm-10">
         <input type="text" class="form-control" id="osMod" value="${pacientes[encontrado].obrasocial}">
         </div>
         <label for="apeynom" class="col-sm-2 col-form-label">tel:</label>
         <div class="col-sm-10">
         <input type="text" class="form-control" id="telMod" value="${pacientes[encontrado].telefono}">
         </div>
         <label for="apeynom" class="col-sm-2 col-form-label">DNI:</label>
         <div class="col-sm-10">
         <input type="text" class="form-control" id="dniMod" value="${pacientes[encontrado].dni}">
         </div>
         <label for="apeynom" class="col-sm-2 col-form-label">direc:</label>
         <div class="col-sm-10">
         <input type="text" class="form-control" id="direcMod" value="${pacientes[encontrado].direccion}">
         </div>
         <textarea class="form-control" id="historiaMod" value="${pacientes[encontrado].historial}"></textarea>
         </div>

         </form>`
         contenido.innerHTML=infoPac;
        }else{
            let contenido = document.getElementById("contenedorBuscar");
            contenido.innerHTML=""
            let notFound= `<div class="card">
            <div class="card-body">
            Paciente No Encontrado
            </div>
            </div>`
            contenido.innerHTML=notFound;
        }
        
    }
    const modifPacientes = (event)=>{
        
        let nombMod = document.getElementById("nomMod").value;
        let edMod = document.querySelector("#edadMod").value;
        let obsMod = document.getElementById("osMod").value;
        let telMod = document.getElementById("telMod").value;
        let docuMod = document.getElementById("dniMod").value;
        let direcMod = document.getElementById("direcMod").value;
        let areaMod = document.getElementById("historiaMod").value;
        pacientes.splice(encontrado,1,new Paciente(new Date().getTime(),nombMod,edMod,obsMod,telMod,docuMod,direcMod,areaMod))        
        localStorage.setItem('pacientes', JSON.stringify(pacientes));
    }

//     const abrirModal= ()=>{
//     modalPac.show();
// }
