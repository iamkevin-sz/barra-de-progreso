const progreso  =  document.getElementById('progreso');
const porcentaje = document.getElementById('porcentaje');
let cantidad = 0;

let tiempo = setInterval(() => {

    var dia = new Date().getDate();


    cantidad=cantidad + 1;
    PorcentajeAcumulado = Math.round(cantidad * 3.225806452);
    // console.log(PorcentajeAcumulado); 

    typeof(dia)
    typeof(tiempo)
    console.log('dia <br>' + typeof(dia));
    console.log('tiempo <br>' + typeof(tiempo));


    progreso.style.width = `${PorcentajeAcumulado}%`
    
        if (cantidad == dia){
            clearInterval(tiempo)
        }
    

    porcentaje.textContent = `${PorcentajeAcumulado}%`
    // console.log(cantidad)

    
    }, 70);


    
    
    
   

   