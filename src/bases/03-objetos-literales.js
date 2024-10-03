console.log('Hola Mundo!!!')

const persona = {
  nombre: 'Juan',
  apellido: 'Perez',
  edad: 30,
  direccion: {
    calle: 'Calle La Vida',
    numero: 123,
    ciudad: 'Querétaro',
    estado: 'Querétaro'
  }
};
console.log(persona);

const persona2 = { ...persona };
persona2.nombre = 'Luis';
console.log(persona2);