class Doctor {
    constructor(id,apeynom,especialidad,tel, direc){
        this.id=id;
        this.apeynom=apeynom;
        this.especialidad=especialidad;
        this.tel=tel;
        this.direc=direc;
    }
}

//Crear la funcion agregar doctor con localstorage
//Hacer CRUD de doctores

let doctores = JSON.parse(localstorage.getItem(`doctores`)) || [];

const añadirDoc = (event)=>{
    let nom = document.getElementById("apynomD");
    let edad = document.getElementById("edadD");
    let spec = document.getElementById("espec");
    let tel = document.getElementById("telD");
    let direcc = document.getElementById("direcD");

    
    if(nom!="" && ed!=0 && spec!="" && tel!=0 && direcc!=""){
        
        doctores.push(new Doctor(new Date().getTime(), nom, edad, spec, tel, direcc));
        console.log("Ingreso exitoso");
        document.getElementById("apeynomD").value="";
        document.getElementById("edadD").value="";
        document.getElementById("espec").value="";
        document.getElementById("telD").value="";
        document.getElementById("direcD").value="";
    }else{
        alert("faltan campos por rellenar");
    }

    localStorage.setItem('doctores', JSON.stringify(doctores));
}

const listado = document.getElementById("listado");
const listarDoc = ()=>{

    doctores.forEach((item) => {
        let columna = document.createElement("div");
        columna.className="col";
        let tarjeta = `<div class="card" style="width: 18rem;">
        <img class="card-img-top" src="..." alt="Card image cap">
        <div class="card-body">
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
      </div>`;
      columna.innerHTML=tarjeta;
      listado.appendChild(columna);
    });

}


listarDoc();




