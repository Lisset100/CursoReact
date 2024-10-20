const promesa = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Hola mundo');
  }, 2000);
})

promesa.then((mensaje) => {
  console.log(mensaje);
})