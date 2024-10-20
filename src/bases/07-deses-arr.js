const personajes = ['Goku', 'vegeta', 'yo']

const [, , p3] = personajes;

console.log(p3)


const retornaArreglo = () => {
  return ['ABC', 123]
}

const [letras, numeros] = retornaArreglo();
console.log(letras, numeros);


const useState = (valor) => {
  return [
    valor,
    () => {
      console.log('Hola mundo')
    }
  ]
}
const [nombre, setNombre] = useState('Goku');
setNombre();
console.log(nombre);
