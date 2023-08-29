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

let doctores = [];

const añadirDoc = (event)=>{
    let nom = document.getElementById("apynomD");
    let edad = document.getElementById("edadD");
    let spec = document.getElementById("espec");
    let tel = document.getElementById("telD");
    let direcc = document.getElementById("direcD");

    
    if(nom!="" && ed!=0 && spec!="" && tel!=0 && direcc!=""){
        
        doctores.push(new Date().getTime(), nom, edad, spec, tel, direcc);
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