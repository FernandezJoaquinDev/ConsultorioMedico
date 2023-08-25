class Paciente{
    constructor(id, apeynom,edad,obrasocial,telefono,direccion,historial=""){
        this.id=id;
        this.apeynom=apeynom;
        this.edad=edad;
        this.obrasocial=obrasocial;
        this.telefono=telefono;
        this.direccion=direccion;
        this.historial=historial;
    }
}

let pacientes = JSON.parse(localStorage.getItem(`pacientes`));

const agregarPacientes = (event) =>{
    event.preventDefault();
    let nom = document.getElementById("apeynom").value;
    let ed = document.querySelector("#edad").value;
    let obs = document.getElementById("obraSoc").value;
    let tel = document.getElementById("tel").value;
    let direc = document.getElementById("direc").value;
    let area = document.getElementById("historia").value;
    // alert(nom);
    if(nom!="" && ed!=0 && obs!="" && tel!=0 && direc!=""){

        pacientes.push(new Paciente(new Date().getTime(), nom, ed, obs, tel, direc,area));
        alert("Paciente Registrado");
        document.getElementById("apeynom").value="";
        document.getElementById("edad").value="";
        document.getElementById("obraSoc").value="";
        document.getElementById("tel").value="";
        document.getElementById("direc").value="";
        document.getElementById("historia").value="";
    }else{
        alert("faltan campos por rellenar");
    }

    localStorage.setItem(`pacientes`,JSON.stringify(pacientes));
}



const contenedorT=document.getElementById("contenedorPacientes");

//Crear la funcion listar pacientes (con modal)
const listarPacientes = (event) =>{
     event.preventDefault();
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
          <span>Obra Social: ${item.obrasocial}</span>
        </div>
      </div>`;
      columna.innerHTML=tarjeta;
      contenedorT.append(columna)
    })
}
//Crear la funcion eliminar pacientes
// const eliminarPacientes = (nom) =>{
// pacientes=JSON.parse(localStorage.getItem(`pacientes`))

// pacientes.map((item)=>{
// if () {
  
// }
// })
// }
//Crear la funcion Modificar pacientes
//Crear la funcion Buscar pacientes (con filter)

const buscarPaciente = (event) =>{
  let nombreABusc=document.getElementById("ingreso").value
  alert(nombreABusc)
  // pacientes=JSON.parse(localStorage.getItem(`pacientes`));
  // let indice;
  // pacientes.map((item)=>{
  //   if (item.apeynom == nom) {
  //     indice = item.id;
  //     console.log(indice);
  //   }else{
  //     alert("no se encontro")
  //   }
  // })
}
