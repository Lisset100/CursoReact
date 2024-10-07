// Funciones en JS
const saludar = function (nombre) {
  return `Hola ${nombre}`;
}
const saludar2 = (nombre) => {
  return `Hola ${nombre}`;
}
const saludar3 = (nombre) => `Hola ${nombre}`;
const saludar4 = () => `Hola Mundo`;

console.log(saludar('Lisset'));
console.log(saludar2('Lisset'));
console.log(saludar3('Lisset'));
console.log(saludar4());

const getUser = () => ({
  uid: 'XXXXXX',
  username: 'XXXXXX'
});
const user = getUser();
console.log(user());



function getUsuarioActivo(nombre) {
  return {
    uid: 'XXXXXX',
    username: nombre
  }
};
const usuarioActivo = getUsuarioActivo('Lisset');
console.log(usuarioActivo);
const getUsuarioActivo2 = (nombre) => ({
  uid: 'XXXXXX',
  username: nombre
});

const usuarioActivo2 = getUsuarioActivo2('Lisset');
console.log(usuarioActivo2);