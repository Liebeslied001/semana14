let CaF = (x) => {return (x*1.8)+32};
let FaC = (x) => {return (x-32)*0.5556};


let op = +prompt('Ingrese operacion \n1.Celcius a Farenheit \n2.Farenheit a Celsius ')
let a = +prompt('Ingrese valor a convertir: ')

switch (op) {
    case 1:
        document.write(a+' Celcius en Farenheit es: '+CaF(a))
        break;
    case 2:    
        document.write(a+' Farenheit en Celcius es: '+FaC(a))
        break;
    default:
        document.write('Operacion no existe')
        break;
}
