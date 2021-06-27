function permisoconducir(){
    
    let nombre = document.getElementById("Nombre").value;  
    console.log(nombre);
    let apellido=document.getElementById("Apellido").value;
    console.log(apellido);
    let edad= parseInt(document.getElementById("Edad").value);
    console.log(edad);
    //let licencia=licencia.options[licencia.selectIndex].value
    let licencia=document.getElementById("licencia").value;
    //licencia=licencia.toString();
    console.log(licencia);
    var fecha_input = document.getElementById("fecha").value; 
    console.log(fecha_input);
    var f=new Date();
    console.log(f);
    
    var mes=(f.getMonth()+1).toString();
    if (mes.length <=1){
        mes="0"+mes;
    }    
    console.log(mes);
    
    var dia=f.getDate();
    console.log(dia);
    var fechaActual = f.getFullYear()+"-"+mes+"-"+dia;
    console.log(fechaActual);

    if (nombre =="" || apellido =="" || edad ==""){
    alert("debe completar todo el formulario") 
    } 
        else if (edad<18){
        alert("es menor de 18");

        }else if (licencia=="no"){
        alert("No tiene licencia");
            }else if (fecha_input<fechaActual){
                alert("su licencia expiro");
            }else{
                alert("el señor: "+nombre+" "+apellido+ " está habilitado")
            }

        }
    


