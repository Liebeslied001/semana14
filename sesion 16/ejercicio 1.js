let mul = (x,y) => {return x*y};
let sum = (x,y) => {return x+y};
let res = (x,y) => {return x-y};

let a = +prompt('Ingrese el primer numero: ')
let b = +prompt('Ingrese el segundo numero: ')
let op = +prompt('Ingrese operacion \n1.Suma\n2.Resta\n3.Multiplicacion: ')

switch (op) {
    case 1:
        document.write('La suma es: '+sum(a,b))
        break;
    case 2:    
        document.write('La resta es: '+res(a,b))
        break;
    case 3:    
        document.write('El producto es: '+mul(a,b))
        break;

    default:
        document.write('Operacion no existe')
        break;
}
