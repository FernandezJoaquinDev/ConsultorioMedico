class Paciente{
    constructor(id, apeynom,edad,obrasocial,telefono,dni,direccion,historial=""){
        this.id=id;
        this.apeynom=apeynom;
        this.edad=edad;
        this.obrasocial=obrasocial;
        this.telefono=telefono;
        this.dni=dni;
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

const buscarPaciente = () =>{
    event.preventDefault();
  let docuP=document.getElementById("docu").value
   let encontrado = pacientes.findIndex((item)=>{
        return item.dni==docuP;
    })
    if(encontrado>-1){
        abrirModal()
    }
}

const abrirModal= ()=>{
    modalPac.show();
}
