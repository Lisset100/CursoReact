//Desestructuración
// Asignación Descontructurante
const persona = {
  nombre: 'Tony',
  edad: 45,
  clave: 'Ironman'
}
const { nombre, edad, clave } = persona;
console.log(nombre);
console.log(edad);
console.log(clave);

const retornaPersona = ({ clave, edad }) => {
  return {
    nombreClave: clave,
    anios: edad,
    latlng: {
      lat: 14.3232,
      lng: -89.999
    }
  }

};
const { nombreClave, anios, latlng: { lat, lng } } = retornaPersona(persona);
console.log(nombreClave, anios);
console.log(lat, lng);
