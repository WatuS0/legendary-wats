let nombre = prompt ("Ingrese su nombre y apellido")

alert("Bienvenido a la calculadora de indemnizacion " + nombre)

let empleador = prompt ("Ingrese el nombre de su Empresa/Empleador: ")

console.log("Bienvenido a la calculadora de indemnizacion "+ nombre)

const importeagregado = 1.21

function calcularindemnizacion (sueldo, años, importeagregado) {
    let sueldobase = (parseInt(sueldo)*importeagregado)
    console.log("Sueldo", sueldo)
    let sueldox = 0;
    for (let i = 1; i <= años ; i++) {
        sueldox = sueldobase*i
        console.log("Indemnizacion " + i + " $ " + (parseInt(sueldox)))
    }
    let pregunta1 = prompt ("Es un caso de fallecimiento del trabajador o del empleador?: Si o No")
    if (pregunta1 == "si"){
        sueldox = sueldox * 0.50
    } else {
        sueldox
    }
    console.log("Tu indemnizacion es de: $ ", sueldox)
    prompt("La empresa te debe de indemnizacion", sueldox)
}

function darindemnizacion() {
    let sueldo = prompt ("Ingresa tu sueldo: ")
    let años = prompt ("Cuantos años trabajaste?")
    if (sueldo != "") {
        calcularindemnizacion (sueldo, años, importeagregado)
    }
    else {
        console.error("Sueldo invalido")
        alert("Sueldo invalido")
    }

}

darindemnizacion()


let feedback = parseInt(prompt("Deja tu feedback del 1 al 10 sobre tu experiencia en el programa"))

switch(feedback) {
    case 1:
        console.log("Lo siento por tu mala experiencia vamos a trabajar para poder darte un buen servicio")
        alert("Lo siento por tu mala experiencia vamos a trabajar para poder darte un buen servicio")
    break
    case 2: 
        console.log("Lo siento por tu mala experiencia vamos a tratar de mejorar el servicio")
        alert("Lo siento por tu mala experiencia vamos a tratar de mejorar el servicio")
    break
    case 3:
        console.log("Perdon por desperdiciar tu tiempo trataremos de mejorar el servicio")
        alert("Perdon por desperdiciar tu tiempo trataremos de mejorar el servicio")
    break
    case 4:
        console.log("Lamentamos tu regular experiencia vamos a tratar de corregirlo")
        alert("Lamentamos tu regular experiencia vamos a tratar de corregirlo")
    break
    case 5: 
        console.log("Un 5 no esta tan mal pero vamos a seguir mejorando")
        alert("Un 5 no esta tan mal pero vamos a seguir mejorando")
    break
    case 6:
        console.log("Intentaremos trabajar para poder mejorar tu experiencia")
        alert("Intentaremos trabajar para poder mejorar tu experiencia")
    break
    case 7: 
        console.log("Un 7 es aprobado por lo tanto estamos felices pero falta")
        alert("Un 7 es aprobado por lo tanto estamos felices pero falta")
    break
    case 8: 
        console.log("Muchas gracias por valorar asi nuestro servicio")
        alert("Muchas gracias por valorar asi nuestro servicio")
    break
    case 9:
        console.log("Increible nota pero hay que mejorar!")
        alert("Increible nota pero hay que mejorar")
    break
    case 10:
        console.log("Gracias por utilizar nuestros servicios :)")
        alert("Gracias por utilizar nuestros servicios :)")
    break
    default:
        console.error("Ingresa un valor valido")
        alert("Ingresa un valor valido")
}

