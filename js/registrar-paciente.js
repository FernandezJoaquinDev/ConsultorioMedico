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

let pacientes = [];

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
//Crear la funcion eliminar pacientes
//Crear la funcion Modificar pacientes
//Crear la funcion Buscar pacientes (con filter)