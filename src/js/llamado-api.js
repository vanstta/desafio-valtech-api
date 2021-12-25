const url = 'https://www.mockachino.com/a71b232c-218e-4d/users'


export const obtenerUsuarios = async() => {

   try {
    const respuesta= await fetch (url);

    if (!respuesta.ok) throw'No se pudo cargar la API';

    const data = await respuesta.json();
    const usuarios = data.results
    
    return usuarios;

   }catch(err) {
  
    throw err
}


}

