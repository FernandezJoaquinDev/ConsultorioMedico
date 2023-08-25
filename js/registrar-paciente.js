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

//Agregar un navbar
//Crear la funcion listar pacientes (con modal)

const contenedorT=document.getElementById("contenedorPacientes");
const prueba=document.getElementById("contenedorPrueba");

const listarPacientes = (event) =>{
     event.preventDefault();
     contenedorT.innerHTML=<div class="modal-dialog" role="document">
     <div class="modal-content">
       <div class="modal-header">
         <h5 class="modal-title" id="exampleModalLabel">Lista de Pacientes</h5>
         <button type="button" class="close" data-dismiss="modal" aria-label="Close">
           <span aria-hidden="true">&times;</span>
         </button>
       </div>
       <div class="modal-body row" id="contenedorPacientes">
           
       </div>
       <div class="modal-footer">
         <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
       </div>
     </div>
   </div>;
     
    // window.location.href="/pages/listadoPacientes.html";
    // window.location.assign("/pages/listadoPacientes.html")
    pacientes=JSON.parse(localStorage.getItem(`pacientes`))
    pacientes.map((item)=>{
        let columna = document.createElement("div");
        columna.classList="col-12";
        let tarjeta = `<div class="card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">${item.apeynom}</h5>
          <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
      </div>`;
      columna.innerHTML=tarjeta;
      contenedorT.append(columna)
    })
}
//Crear la funcion eliminar pacientes
//Crear la funcion Modificar pacientes
//Crear la funcion Buscar pacientes (con filter)