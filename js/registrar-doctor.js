class Doctor {
    constructor(id,apeynom,especialidad,tel, direc, estado=true, img){
        this.id=id;
        this.apeynom=apeynom;
        this.especialidad=especialidad;
        this.tel=tel;
        this.direc=direc;
        this.estado=estado;
        this.img=img;
    }
}

//Crear la funcion agregar doctor con localstorage
//Hacer CRUD de doctores

let doctores = JSON.parse(localStorage.getItem(`doctores`)) || [];

const añadirDoc = (event)=>{
    let nom = document.getElementById("apeynomD").value;
    let edad = document.getElementById("edadD").value;
    let spec = document.getElementById("espec").value;
    let tel = document.getElementById("telD").value;
    let direcc = document.getElementById("direcD").value;
    let imagen = document.getElementById("imag").value;

    
    if(nom!="" && edad!=0 && spec!="" && tel!=0 && direcc!="" && imagen!=""){
        
        doctores.push(new Doctor(new Date().getTime(), nom, edad, spec, tel, direcc,imagen));
        console.log("Ingreso exitoso");
        document.getElementById("apeynomD").value="";
        document.getElementById("edadD").value="";
        document.getElementById("espec").value="";
        document.getElementById("telD").value="";
        document.getElementById("direcD").value="";
        document.getElementById("imag").value="";
    }else{
        alert("faltan campos por rellenar");
    }

    localStorage.setItem('doctores', JSON.stringify(doctores));
    console.log(nom)
}


const listadoD = document.querySelector("#nose");

const listarDoc = ()=>{
    doctores.forEach((item) => {
        let columna = document.createElement("div");
        columna.className="col";
        let tarjeta = `<div class="card" style="width: 18rem;">
        <img class="card-img-top" src="${item.img}" alt="Card image cap">
        <div class="card-body">
        <span>${item.apeynom}</span>
        <span>${item.especialidad}</span>
        <span>${item.tel}</span>
        <span>${item.direc}</span>
        </div>
      </div>`;
      columna.innerHTML=tarjeta;
      listadoD.appendChild(columna);
    });

}




listarDoc();






