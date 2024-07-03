const axios = require('axios');
const colors = require('colors');

// URL de una API pública que devuelve una lista de usuarios
const apiUrl = 'https://jsonplaceholder.typicode.com/users';

async function fetchData() {
  try {
    // 1. Realizar una solicitud GET a la API utilizando Axios
    const response = await axios.get(apiUrl);

    // 2. Extraer los datos de la respuesta en la variable 'users'
    const users = response.data;

    // 3. Mostrar un mensaje en la consola indicando que se obtuvieron los datos
    console.log(colors.green('Usuarios obtenidos de la API:'));

    // 4. Recorrer cada usuario en la lista de 'users'
    users.forEach(user => {
      // 5. Mostrar el nombre del usuario en amarillo
      console.log(colors.yellow(`Nombre: ${user.name}`));

      // 6. Mostrar el correo electrónico del usuario en cian
      console.log(colors.cyan(`Correo: ${user.email}`));

      // 7. Mostrar la ciudad del usuario en magenta
      console.log(colors.magenta(`Ciudad: ${user.address.city}`));

      // 8. Agregar una línea divisoria azul para separar a cada usuario
      console.log(colors.blue('-------------------------'));
    });
  } catch (error) {
    // 9. En caso de error, mostrar un mensaje en rojo con la información del error
    console.error(colors.red('Error al obtener los datos:', error));
  }
}

// 10. Llamar a la función 'fetchData' para ejecutar el código
fetchData();
